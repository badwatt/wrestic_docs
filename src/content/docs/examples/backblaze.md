---
title: Backblaze B2
description: Configuration example for Backblaze B2.
---
## wrestic.toml
```toml
[user]
USER = "username"

[settings.backblaze_profile]
BACKEND = "b2"
RESTIC_PASSWORD = "your_backblaze_restic_repo_password"
REPOSITORY = "your_backblaze_bucket_name:your_backblaze_repository"
BACKUP_FOLDER = "/home/username/backup_this_folder"
RESTORE_FOLDER = "/home/username/restore_to_this_folder"
KEEP_LAST = 10

[settings.backblaze_profile.env]
B2_ACCOUNT_ID = "backblaze_application_key_id"
B2_ACCOUNT_KEY = "backblaze_application_key"
```