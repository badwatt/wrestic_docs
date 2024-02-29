---
title: Configuration
description: A guide for accomplish Wrestic configuration.
---

Let's see how to configure **Wrestic**.\
Wrestic's configuration is pretty simple. All you have to do is generate a `wrestic.toml` file and add profiles.

## Configuring wrestic.toml
Inside of your `$USER` folder, you have to create (if is not created yet) a `.config` folder.\
Your Wrestic configuration will live there inside another folder called `wrestic`.

So the path will be: `/home/<$USER>/.config/wrestic/wrestic.toml`

you can make that path available with the following command:

```sh
mkdir -p ~/.config/wrestic && touch ~/.config/wrestic/wrestic.toml
```

Now that you have created your `wrestic.toml` file, let's deep dive into the configuration.

## Add a profile
Profiles are basically an object with the information needed to create, restore, backup, etc... your repository.

If you have more than 1 profile in your `wrestic.toml` you'll be asked for the profile you want to use when performing an action.

To add a profile to your `wrestic.toml` file look at the following example:

```toml
[settings.local]
BACKEND = "local"
RESTIC_PASSWORD = "alexsupersecretpassword"
REPOSITORY = "/home/alex/Documents/demo-repo"
BACKUP_FOLDER = "/home/alex/Documents/demo"
RESTORE_FOLDER = "/home/alex/Documents/restored"
KEEP_LAST = 10
```

- **PROFILE:** In the example you can see that the profile name `local` is preceded by `settings.`.
You can set the profile name that you like, it could be something like `[settings.blazingly_fast]` or `[settings.pineapple]`, but profiles need to be unique.\
When creating a new profile, don't forget to add `settings.` before the profile name.

- **BACKEND:** So, you have to pick a backend.\
If you are going to perform a backup locally: `BACKEND = "local"`\
If you are going to perform a backup remotely, you have a big list of backends, in fact, they are the same backends that [**Restic**](https://restic.readthedocs.io/en/latest/030_preparing_a_new_repo.html) supports, like:

  - AWS S3: `BACKEND = "s3"`
  - AZURE: `BACKEND = "azure"`
  - BACKBLAZE B2: `BACKEND = "b2"`
  - GOOGLE CLOUD STORAGE: `BACKEND = "gs"`
  - MINIO: `BACKEND = "s3"`
  - WASABI: `BACKEND = "s3"`
  - SFTP: `BACKEND = "sftp"`

- **RESTIC_PASSWORD:** Here is where we set the repository password for `Restic`.\
When creating a repository, we are asked to input a password for it so data gets encrypted and this password is the key.
With **Wrestic** you can create the repository on the fly by entering the command `wrestic init`, but we'll get into that later.
The thing is...
    - If your repo is not created yet: `RESTIC_PASSWORD = "your_new_password"`
    - If repo already exists: `RESTIC_PASSWORD = "your_good_old_password"`

    And don't worry, **Wrestic** is very clever, so when you run `wrestic init`, it only initialize the new repos (not initialized yet) that founds in your `wrestic.toml`.

- **REPOSITORY & BACKUP_FOLDER/RESTORE_FOLDER:** In `REPOSITORY` is where you give **Wrestic** the path you your repository. It can exists or not yet.\
Let's say you want to backup your `~/Documents` folder into `~/BACKUPS/my_documents_backup`:
    - `REPOSITORY = "/home/alex/BACKUPS/my_documents_backup"`
    - `BACKUP_FOLDER = "/home/alex/Documents"`

    So, What if someday I want to recover my `~/Documents` folder into `~/RESTORED/my_recovered_documents_folder`:

    - `RESTORE_FOLDER = "/home/alex/RESTORED/my_recovered_documents_folder"`

- **KEEP_LAST:** Number of backups you want to keep.

    Easy, right? 😁