---
title: Local
description: Configuration example for Local.
---
## wrestic.toml
```toml
[settings.local_profile]
BACKEND = "local"
RESTIC_PASSWORD = "your_local_restic_repo_password"
REPOSITORY = "/path/to/your/local/repo"
BACKUP_FOLDER = "/home/username/backup_this_folder"
RESTORE_FOLDER = "/home/username/restore_to_this_folder"
KEEP_LAST = 8
```