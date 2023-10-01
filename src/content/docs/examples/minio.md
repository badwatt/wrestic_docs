---
title: MINIO
description: Configuration example for MINIO.
---
## wrestic.toml
```toml
[settings.minio_profile]
BACKEND = "s3"
RESTIC_PASSWORD = "your_minio_restic_repo_password"
REPOSITORY = "http://localhost:9000/repo"
BACKUP_FOLDER = "/home/username/backup_this_folder"
RESTORE_FOLDER = "/home/username/restore_to_this_folder"
KEEP_LAST = 10

[settings.minio_profile.env]
AWS_ACCESS_KEY_ID = "minio_access_key"
AWS_SECRET_ACCESS_KEY = "minio_secret_access_key"
```