---
title: AWS S3
description: Configuration example for AWS S3.
---
## wrestic.toml
```toml
[settings.aws_profile]
BACKEND = "s3"
RESTIC_PASSWORD = "your_aws_restic_repo_password"
REPOSITORY = "s3.amazonaws.com/bucket_name"
BACKUP_FOLDER = "/home/username/backup_this_folder"
RESTORE_FOLDER = "/home/username/restore_to_this_folder"
KEEP_LAST = 10

[settings.aws_profile.env]
AWS_ACCESS_KEY_ID = "aws_access_key"
AWS_SECRET_ACCESS_KEY = "aws_secret_access_key"
```