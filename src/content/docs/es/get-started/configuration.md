---
title: Configuración
description: Una guía para configurar Wrestic.
---

Veamos cómo configurar **Wrestic**.\
La configuración de **Wrestic** es bastante sencilla. Todo lo que tienes que hacer es generar un archivo `wrestic.toml` y comenzar a añadir perfiles.

## Configurando el archivo wrestic.toml
Dentro de tu carpeta `$USER`, tienes que crear (si no está creada todavía) una carpeta `.config`.\
Tu configuración de Wrestic vivirá allí dentro de otra carpeta llamada `wrestic`.

Así que la ruta será: `/home/<$USER>/.config/wrestic/wrestic.toml`

Puedes crear esa ruta así como el archivo `wrestic.toml` con el siguiente comando:

```sh
mkdir -p ~/.config/wrestic && touch ~/.config/wrestic/wrestic.toml
```

Ahora que has creado tu archivo `wrestic.toml`, vamos a profundizar en la configuración.

## Añadir un perfil
Los perfiles son básicamente un objeto con la información necesaria para crear, restaurar, hacer copias de seguridad, etc... de tu repositorio.

Si tienes más de 1 perfil en tu `wrestic.toml` se te preguntará por el perfil que quieres utilizar al realizar una acción.

Para añadir un perfil a tu fichero `wrestic.toml` echa un vistazo al siguiente ejemplo:


```toml
[settings.local]
BACKEND = "local"
RESTIC_PASSWORD = "alexsupersecretpassword"
REPOSITORY = "/home/alex/Documents/demo-repo"
BACKUP_FOLDER = "/home/alex/Documents/demo"
RESTORE_FOLDER = "/home/alex/Documents/restored"
KEEP_LAST = 10
```

- **PROFILE:** En el ejemplo puedes ver que el nombre del perfil `local` está precedido por `settings.`.
Puedes poner el nombre de perfil que quieras, podría ser algo como `[settings.blazingly_fast]` o `[settings.pineapple]`, pero los perfiles tienen que ser únicos.
Cuando crees un perfil nuevo, no olvides añadir `settings.` antes del nombre del perfil.


- **BACKEND:** Llego el momento, toca elegir un backend.
Si vas a realizar una copia de seguridad a nivel local: `BACKEND = "local"`\
Si vas a realizar una copia de seguridad de forma remota, usted tiene una gran lista de backends, de hecho, son los mismos backends que [**Restic**](https://restic.readthedocs.io/en/latest/030_preparing_a_new_repo.html) soporta, tales como:

  - AWS S3: `BACKEND = "s3"`
  - AZURE: `BACKEND = "azure"`
  - BACKBLAZE B2: `BACKEND = "b2"`
  - GOOGLE CLOUD STORAGE: `BACKEND = "gs"`
  - MINIO: `BACKEND = "s3"`
  - WASABI: `BACKEND = "s3"`
  - SFTP: `BACKEND = "sftp"`

- **RESTIC_PASSWORD:** Aquí es donde establecemos la contraseña del repositorio para `Restic`.\
Cuando creamos un repositorio, se nos pide que introduzcamos una contraseña para que los datos queden encriptados y esta contraseña es la llave.\
Con **Wrestic** puedes crear el repositorio sobre la marcha introduciendo el comando `wrestic init`, pero eso lo veremos más adelante.
La cosa es...
    - Si su repositorio aún no se ha creado: `RESTIC_PASSWORD = "tu_nueva_contraseña"`.
    - Si el repositorio ya existe: `RESTIC_PASSWORD = "tu_contraseña_ya_existente"`.

    Y no te preocupes, **Wrestic** es muy inteligente, así que cuando ejecutas `wrestic init`, sólo inicializa los nuevos repositorios (aún no inicializados) que encuentra en tu `wrestic.toml`.


- **REPOSITORY & BACKUP_FOLDER/RESTORE_FOLDER:**  En `REPOSITORT` es donde le dices a **Wrestic** cual es la ruta de tu repositorio. Puede existir o no todavía.\
Digamos que quieres hacer una copia de seguridad de tu carpeta `~/Documents` en `~/BACKUPS/my_documents_backup`:
    - `REPOSITORY = "/home/alex/BACKUPS/my_documents_backup"`
    - `BACKUP_FOLDER = "/home/alex/Documents"`

    Entonces, ¿Qué pasa si algún día quiero recuperar mi carpeta `~/Documents` en `~/RESTORED/my_recovered_documents_folder`:

    - `RESTORE_FOLDER = "/home/alex/RESTORED/my_recovered_documents_folder"`

- **KEEP_LAST:** Número de copias de seguridad que deseas mantener.

    Fácil, ¿verdad? 😁