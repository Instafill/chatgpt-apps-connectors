from __future__ import annotations

import json
from datetime import datetime
from pathlib import Path
from typing import Iterable

ROOT = Path(__file__).resolve().parent
README_PATH = ROOT / "README.md"

# Prefer the raw connectors feed if present; fall back to the legacy dump.
SOURCE_FILES = [
    ROOT / "connectors.json",
    ROOT / "aip-connectors-list_accessible-skip_actions=true&external_logos=true.js",
]

DATE_FMT = "%b %d, %Y"
TABLE_HEADER = "|name|description|created_at|base_url|"
TABLE_SEPARATOR = "|---|---|---|---|"


def load_connectors() -> tuple[list[dict], Path]:
    """Return connectors plus the file they came from."""
    for path in SOURCE_FILES:
        if not path.exists():
            continue
        data = json.loads(path.read_text())
        connectors = data.get("connectors")
        if isinstance(connectors, list):
            return connectors, path
    raise FileNotFoundError("No connectors list found in expected source files")


def parse_date(raw: str | None) -> datetime | None:
    if not raw:
        return None
    try:
        clean = raw.replace("Z", "+00:00") if raw.endswith("Z") else raw
        return datetime.fromisoformat(clean)
    except Exception:
        return None


def format_created(raw: str | None) -> str:
    dt = parse_date(raw)
    return dt.strftime(DATE_FMT) if dt else ""


def sanitize(text: str | None) -> str:
    if not text:
        return ""
    return text.replace("|", "\\|").replace("\n", " ").replace("\r", " ").strip()


def build_rows(connectors: Iterable[dict]) -> list[str]:
    def sort_key(item: dict) -> tuple[int, int, str]:
        dt = parse_date(item.get("created_at"))
        # Sort by date descending, undated entries last, then name.
        if dt:
            return (0, -int(dt.timestamp()), item.get("name", "").lower())
        return (1, 0, item.get("name", "").lower())

    ordered = sorted(connectors, key=sort_key)
    rows: list[str] = []
    for item in ordered:
        name = sanitize(item.get("name"))
        desc = sanitize(item.get("description"))
        created = format_created(item.get("created_at"))
        base = sanitize(item.get("base_url"))
        rows.append(f"|{name}|{desc}|{created}|{base}|")
    return rows


def update_table(readme_text: str, rows: list[str]) -> str:
    lines = readme_text.splitlines()
    try:
        start = next(i for i, line in enumerate(lines) if line.strip() == TABLE_HEADER)
    except StopIteration as exc:
        raise ValueError("Table header not found in README") from exc

    end = start + 1
    while end < len(lines) and lines[end].strip():
        end += 1

    replacement = [TABLE_HEADER, TABLE_SEPARATOR, *rows]
    new_lines = lines[:start] + replacement + lines[end:]
    return "\n".join(new_lines) + "\n"


def update_date(readme_text: str) -> str:
    today = datetime.now().strftime(DATE_FMT)
    lines = readme_text.splitlines()
    for idx, line in enumerate(lines):
        if line.startswith("Updated "):
            lines[idx] = f"Updated {today}"
            break
    return "\n".join(lines) + "\n"


def main() -> None:
    connectors, source_path = load_connectors()
    rows = build_rows(connectors)
    readme_text = README_PATH.read_text()
    readme_text = update_date(readme_text)
    readme_text = update_table(readme_text, rows)
    README_PATH.write_text(readme_text)
    print(
        f"Updated README with {len(rows)} connectors from {source_path.name} on "
        f"{datetime.now().strftime(DATE_FMT)}"
    )


if __name__ == "__main__":
    main()
