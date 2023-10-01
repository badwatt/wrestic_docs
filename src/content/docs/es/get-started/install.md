---
title: Instalación de Wrestic
description: A guide for accomplish Wrestic installation.
---

Veamos cómo instalar **Wrestic** en **Linux**.\
Para ello tenemos las siguientes opciónes, elige la que mejor se adecue a ti.

## Instalar mediante cargo
```sh
cargo install wrestic
```
## Instalar Wrestic como binario
```sh
curl -sL $(curl -s https://api.github.com/repos/alvaro17f/wrestic/releases/latest | grep browser_download_url | cut -d '"' -f 4) | sudo tar zxf - -C /usr/bin --overwrite
```

## Compilar Wrestic
Requirements:\
[git](https://git-scm.com/)\
[rust](https://rust-lang.org/)
```sh
git clone https://github.com/alvaro17f/wrestic.git
cd wrestic
cargo build --release
sudo cp target/release/wrestic /usr/bin
```