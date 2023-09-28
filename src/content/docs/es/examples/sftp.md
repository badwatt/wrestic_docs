---
title: SFTP
description: Configuration example for SFTP.
---
## wrestic.toml
```toml
[user]
USER = "username"

[settings.sftp_profile]
BACKEND = "sftp"
RESTIC_PASSWORD = "your_sftp_restic_repo_password"
REPOSITORY = "user@host:/path/to/repo"
BACKUP_FOLDER = "/home/username/backup_this_folder"
RESTORE_FOLDER = "/home/username/restore_to_this_folder"
KEEP_LAST = 8
```