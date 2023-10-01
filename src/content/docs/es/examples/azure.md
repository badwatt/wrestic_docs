---
title: Azure
description: Configuration example for Azure.
---
## wrestic.toml
```toml
[settings.azure_profile]
BACKEND = "azure"
RESTIC_PASSWORD = "your_azure_restic_repo_password"
REPOSITORY = "your_bucket_name:/path/to/your/repo"
BACKUP_FOLDER = "/home/username/backup_this_folder"
RESTORE_FOLDER = "/home/username/restore_to_this_folder"
KEEP_LAST = 10

[settings.azure_profile.env]
AZURE_ACCOUNT_NAME = "azure_account_name"
# for autenthication export one of the following:
AZURE_ACCOUNT_KEY = "azure_secret_key" # for storage account key
AZURE_ACCOUNT_SAS = "azure_sas_token"  # for sas
```