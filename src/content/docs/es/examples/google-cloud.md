---
title: Google Cloud Storage
description: Configuration example for Google Cloud Storage.
---
## wrestic.toml
```toml
[user]
USER = "username"

[settings.google_cloud_storage_profile]
BACKEND = "gs"
RESTIC_PASSWORD = "your_google_cloud_storage_restic_repo_password"
REPOSITORY = "your_bucket_name:/path/to/your/repo"
BACKUP_FOLDER = "/home/username/backup_this_folder"
RESTORE_FOLDER = "/home/username/restore_to_this_folder"
KEEP_LAST = 10

[settings.google_cloud_storage_profile.env]
# you can use the following:
GOOGLE_PROJECT_ID = "google_cloud_storage_project_id"
GOOGLE_APPLICATION_CREDENTIALS = "$HOME/.config/gs-secret-restic-key.json"
# or you can use GOOGLE_ACCESS_TOKEN instead:
GOOGLE_ACCESS_TOKEN = "ya29.a0AfH6SMC78..."
```