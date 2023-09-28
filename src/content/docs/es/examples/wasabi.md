---
title: Wasabi
description: Configuration example for Wasabi.
---
## wrestic.toml
```toml
[user]
USER = "username"

[settings.wasabi_profile]
BACKEND = "s3"
RESTIC_PASSWORD = "your_aws_restic_repo_password"
REPOSITORY = "https://wasabi_service_url/wasabi_bucket_name"
BACKUP_FOLDER = "/home/username/backup_this_folder"
RESTORE_FOLDER = "/home/username/restore_to_this_folder"
KEEP_LAST = 10

[settings.wasabi_profile.env]
AWS_ACCESS_KEY_ID = "wasabi_access_key"
AWS_SECRET_ACCESS_KEY = "wasabi_secret_access_key"
```