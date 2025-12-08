{
    "links": [
        {
            "id": "link_6906d68447e481919539180332e4ed1c",
            "created_at": "2025-12-08T17:04:12.579374Z",
            "connector_id": "connector_2128aebfecb84f64a069897515042a44",
            "name": "Gmail",
            "actions": [
                "batch_read_email",
                "search_emails",
                "read_email",
                "search_email_ids"
            ],
            "auth_type": "OAUTH",
            "auth_secret": null,
            "scopes": [
                "https://www.googleapis.com/auth/gmail.modify"
            ],
            "oauth_client_id": "google_oauth_client",
            "owners": [
                {
                    "type": "USER",
                    "id": "user-wglb23ZhwiJ1Qp4YaWlp9uln"
                }
            ],
            "access_list": [],
            "link_params": null,
            "action_param_schemas": null,
            "labels": null,
            "owner_profile": null,
            "refreshing": null,
            "auth_status": "ACTIVE",
            "auth_status_updated_at": null,
            "visibility": "VISIBLE",
            "disable_auto_invocation": false,
            "connector_status": "ENABLED",
            "connector_type": "SERVICE",
            "connector_name": "Gmail",
            "connector_description": "Find and reference emails from your inbox.",
            "connector_supports_full_actions": true,
            "tool_settings": {
                "personalized": "UNSET"
            }
        },
        {
            "id": "link_68ffdb9064fc8191bb486beaf163dcac",
            "created_at": "2025-11-14T19:37:06.938526Z",
            "connector_id": "connector_68df038e0ba48191908c8434991bbac2",
            "name": "Figma",
            "actions": [
                "get_screenshot",
                "get_design_context",
                "get_metadata",
                "generate_diagram"
            ],
            "auth_type": "OAUTH",
            "auth_secret": null,
            "scopes": [
                "mcp:connect"
            ],
            "oauth_client_id": "oauth_c_68df038b2bb48191876ed0eaa1eabcdd",
            "owners": [
                {
                    "type": "USER",
                    "id": "user-wglb23ZhwiJ1Qp4YaWlp9uln"
                }
            ],
            "access_list": [],
            "link_params": null,
            "action_param_schemas": null,
            "labels": null,
            "owner_profile": null,
            "refreshing": null,
            "auth_status": "ACTIVE",
            "auth_status_updated_at": null,
            "visibility": "VISIBLE",
            "disable_auto_invocation": false,
            "connector_status": "ENABLED",
            "connector_type": "MCP",
            "connector_name": "Figma",
            "connector_description": "Create flow charts, diagrams, Gantt charts, and more in FigJam",
            "connector_supports_full_actions": true,
            "tool_settings": {
                "personalized": "UNSET"
            }
        },
        {
            "id": "link_68e92f2e3f288191817d343444936f52",
            "created_at": "2025-12-08T17:04:11.568983Z",
            "connector_id": "connector_947e0d954944416db111db556030eea6",
            "name": "Google Calendar",
            "actions": [
                "fetch",
                "read_event",
                "search",
                "search_events"
            ],
            "auth_type": "OAUTH",
            "auth_secret": null,
            "scopes": [
                "https://www.googleapis.com/auth/calendar.events"
            ],
            "oauth_client_id": "google_oauth_client",
            "owners": [
                {
                    "type": "USER",
                    "id": "user-wglb23ZhwiJ1Qp4YaWlp9uln"
                }
            ],
            "access_list": [],
            "link_params": null,
            "action_param_schemas": null,
            "labels": null,
            "owner_profile": null,
            "refreshing": null,
            "auth_status": "ACTIVE",
            "auth_status_updated_at": null,
            "visibility": "VISIBLE",
            "disable_auto_invocation": false,
            "connector_status": "ENABLED",
            "connector_type": "SERVICE",
            "connector_name": "Google Calendar",
            "connector_description": "Look up events and availability.",
            "connector_supports_full_actions": true,
            "tool_settings": {
                "personalized": "UNSET"
            }
        },
        {
            "id": "implicit_link::connector_openai_shopping",
            "created_at": "1970-01-01T00:00:00Z",
            "connector_id": "connector_openai_shopping",
            "name": "Shopping research",
            "actions": [
                "get_all_products",
                "get_state",
                "set_nux_viewed",
                "start",
                "steer",
                "subscribe"
            ],
            "auth_type": "NONE",
            "auth_secret": null,
            "scopes": [],
            "oauth_client_id": null,
            "owners": [],
            "access_list": [],
            "link_params": null,
            "action_param_schemas": null,
            "labels": {
                "implicit_link": "true"
            },
            "owner_profile": null,
            "refreshing": null,
            "auth_status": "ACTIVE",
            "auth_status_updated_at": "1970-01-01T00:00:00Z",
            "visibility": "HIDDEN",
            "disable_auto_invocation": true,
            "connector_status": "ENABLED",
            "connector_type": "FIRST_PARTY_ECOSYSTEM",
            "connector_name": "Shopping research",
            "connector_description": "A shopping tool that helps find the right product or gift faster by asking smart questions, scouring in internet for reviews and deals, and researching across trusted sources to deliver a personalized buyer's guide.",
            "connector_supports_full_actions": true,
            "tool_settings": {
                "personalized": "UNSET"
            }
        },
        {
            "id": "link_6932580f7ea88191b4289584bef510f0",
            "created_at": "2025-12-05T03:57:03.571100Z",
            "connector_id": "connector_6923772ef3d48191b6b18899af1cb037",
            "name": "Target",
            "actions": [
                "multipleItemAvailability",
                "getItemAttributes",
                "checkAvailability",
                "multiCategorySearchItems",
                "getNearbyStores",
                "recommendStore",
                "searchItems",
                "listSimilarItems"
            ],
            "auth_type": "NONE",
            "auth_secret": null,
            "scopes": [],
            "oauth_client_id": null,
            "owners": [
                {
                    "type": "USER",
                    "id": "user-wglb23ZhwiJ1Qp4YaWlp9uln"
                }
            ],
            "access_list": [],
            "link_params": null,
            "action_param_schemas": null,
            "labels": null,
            "owner_profile": null,
            "refreshing": null,
            "auth_status": "ACTIVE",
            "auth_status_updated_at": null,
            "visibility": "VISIBLE",
            "disable_auto_invocation": false,
            "connector_status": "ENABLED",
            "connector_type": "MCP",
            "connector_name": "Target",
            "connector_description": "Shop for favorites, essentials, and deals with same-day pickup or shipping for effortless shopping",
            "connector_supports_full_actions": true,
            "tool_settings": {
                "personalized": "UNSET"
            }
        },
        {
            "id": "link_692f51e232608191a26ce737526ca370",
            "created_at": "2025-12-08T17:04:11.858681Z",
            "connector_id": "connector_690a90ec05c881918afb6a55dc9bbaa1",
            "name": "Vercel",
            "actions": [
                "search_vercel_documentation",
                "deploy_to_vercel",
                "list_projects",
                "get_project",
                "list_deployments",
                "get_deployment",
                "get_deployment_build_logs",
                "get_access_to_vercel_url",
                "web_fetch_vercel_url",
                "list_teams",
                "check_domain_availability_and_price"
            ],
            "auth_type": "OAUTH",
            "auth_secret": null,
            "scopes": [
                "openid",
                "offline_access"
            ],
            "oauth_client_id": "oauth_c_690a90ea3708819182676c48149cb02f",
            "owners": [
                {
                    "type": "USER",
                    "id": "user-wglb23ZhwiJ1Qp4YaWlp9uln"
                }
            ],
            "access_list": [],
            "link_params": null,
            "action_param_schemas": null,
            "labels": null,
            "owner_profile": null,
            "refreshing": null,
            "auth_status": "ACTIVE",
            "auth_status_updated_at": null,
            "visibility": "VISIBLE",
            "disable_auto_invocation": false,
            "connector_status": "ENABLED",
            "connector_type": "MCP",
            "connector_name": "Vercel",
            "connector_description": "Search and navigate documentation, manage projects and deployments, and analyze deployment logs",
            "connector_supports_full_actions": true,
            "tool_settings": {
                "personalized": "PERSONALIZE_ALWAYS"
            }
        },
        {
            "id": "link_692e2edb3fec8191873486b2c0ed19b4",
            "created_at": "2025-12-02T00:12:11.279074Z",
            "connector_id": "connector_6912075cb358819187346bcafb601db8",
            "name": "Fireflies",
            "actions": [
                "fireflies_get_transcript",
                "fireflies_get_summary",
                "fireflies_get_transcripts",
                "fireflies_get_user",
                "fireflies_get_usergroups",
                "fireflies_search",
                "fireflies_fetch"
            ],
            "auth_type": "OAUTH",
            "auth_secret": null,
            "scopes": [
                "email",
                "profile"
            ],
            "oauth_client_id": "oauth_c_6912075a900c819186671a2505b4f10c",
            "owners": [
                {
                    "type": "USER",
                    "id": "user-wglb23ZhwiJ1Qp4YaWlp9uln"
                }
            ],
            "access_list": [],
            "link_params": null,
            "action_param_schemas": null,
            "labels": null,
            "owner_profile": null,
            "refreshing": null,
            "auth_status": "ACTIVE",
            "auth_status_updated_at": null,
            "visibility": "VISIBLE",
            "disable_auto_invocation": false,
            "connector_status": "ENABLED",
            "connector_type": "MCP",
            "connector_name": "Fireflies",
            "connector_description": "Queries and returns meeting transcripts and summaries",
            "connector_supports_full_actions": true,
            "tool_settings": {
                "personalized": "UNSET"
            }
        },
        {
            "id": "link_68e56c2ad9c48191a2f9901852053f04",
            "created_at": "2025-12-08T17:04:13.627867Z",
            "connector_id": "connector_68df33b1a2d081918778431a9cfca8ba",
            "name": "Canva",
            "actions": [
                "upload-asset-from-url",
                "search-designs",
                "get-design",
                "get-design-pages",
                "get-design-content",
                "search",
                "fetch",
                "import-design-from-url",
                "create-folder",
                "move-item-to-folder",
                "list-folder-items",
                "comment-on-design",
                "list-comments",
                "list-replies",
                "reply-to-comment",
                "generate-design",
                "create-design-from-candidate",
                "start-editing-transaction",
                "perform-editing-operations",
                "commit-editing-transaction",
                "cancel-editing-transaction",
                "get-design-thumbnail",
                "get-assets"
            ],
            "auth_type": "OAUTH",
            "auth_secret": null,
            "scopes": [],
            "oauth_client_id": "oauth_c_68df33ae801481919e8fd3b763f075d7",
            "owners": [
                {
                    "type": "USER",
                    "id": "user-wglb23ZhwiJ1Qp4YaWlp9uln"
                }
            ],
            "access_list": [],
            "link_params": null,
            "action_param_schemas": null,
            "labels": null,
            "owner_profile": null,
            "refreshing": null,
            "auth_status": "ACTIVE",
            "auth_status_updated_at": null,
            "visibility": "VISIBLE",
            "disable_auto_invocation": false,
            "connector_status": "ENABLED",
            "connector_type": "MCP",
            "connector_name": "Canva",
            "connector_description": "Create, edit, resize, and more to make stunning presentations, docs, and social posts",
            "connector_supports_full_actions": true,
            "tool_settings": {
                "personalized": "UNSET"
            }
        },
        {
            "id": "link_6903fc4a91208191893d9544fc5a0bf1",
            "created_at": "2025-12-08T17:04:12.134440Z",
            "connector_id": "connector_37316be7febe4224b3d31465bae4dbd7",
            "name": "Notion",
            "actions": [
                "fetch",
                "search"
            ],
            "auth_type": "OAUTH",
            "auth_secret": null,
            "scopes": [],
            "oauth_client_id": "mcp_notion_oauth_client",
            "owners": [
                {
                    "type": "USER",
                    "id": "user-wglb23ZhwiJ1Qp4YaWlp9uln"
                }
            ],
            "access_list": [],
            "link_params": null,
            "action_param_schemas": null,
            "labels": null,
            "owner_profile": null,
            "refreshing": null,
            "auth_status": "ACTIVE",
            "auth_status_updated_at": null,
            "visibility": "VISIBLE",
            "disable_auto_invocation": false,
            "connector_status": "ENABLED",
            "connector_type": "SERVICE",
            "connector_name": "Notion",
            "connector_description": "Connector for the Notion MCP server.",
            "connector_supports_full_actions": true,
            "tool_settings": {
                "personalized": "UNSET"
            }
        },
        {
            "id": "link_68e92f4994848191a79610d6d10c80c1",
            "created_at": "2025-12-08T17:03:34.458324Z",
            "connector_id": "connector_76869538009648d5b282a4bb21c3d157",
            "name": "GitHub",
            "actions": [
                "list_installations",
                "get_profile",
                "list_user_orgs",
                "list_user_org_memberships",
                "fetch",
                "get_users_recent_prs_in_repo",
                "search_installed_repositories_streaming",
                "search",
                "get_repo",
                "search_repositories",
                "fetch_file",
                "fetch_pr_comments",
                "list_repositories_by_installation",
                "fetch_commit",
                "search_commits",
                "fetch_blob",
                "list_installed_accounts",
                "fetch_issue",
                "fetch_pr_patch",
                "search_issues",
                "get_pr_info",
                "get_user_login",
                "list_repositories",
                "search_prs",
                "fetch_pr"
            ],
            "auth_type": "OAUTH",
            "auth_secret": null,
            "scopes": [],
            "oauth_client_id": "github_oauth_client",
            "owners": [
                {
                    "type": "USER",
                    "id": "user-wglb23ZhwiJ1Qp4YaWlp9uln"
                }
            ],
            "access_list": [],
            "link_params": null,
            "action_param_schemas": null,
            "labels": null,
            "owner_profile": {
                "id": "5470602",
                "name": "Oleksandr Gamaniuk",
                "email": null,
                "nickname": "ogamaniuk",
                "picture": "https://avatars.githubusercontent.com/u/5470602?v=4"
            },
            "refreshing": null,
            "auth_status": "ACTIVE",
            "auth_status_updated_at": null,
            "visibility": "VISIBLE",
            "disable_auto_invocation": false,
            "connector_status": "ENABLED",
            "connector_type": "SERVICE",
            "connector_name": "GitHub",
            "connector_description": "Read repositories, issues, and pull requests.",
            "connector_supports_full_actions": true,
            "tool_settings": {
                "personalized": "UNSET"
            }
        }
    ]
}
