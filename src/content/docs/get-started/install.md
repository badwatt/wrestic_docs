---
title: Install Wrestic
description: A guide for accomplish Wrestic installation.
---

Let's see how to install **Wrestic** in **Linux**.\
To achieve this we have the following options, choose the one that best suits you.

## Install Wrestic as a binary
```sh
curl -sL $(curl -s https://api.github.com/repos/alvaro17f/wrestic/releases/latest | grep browser_download_url | cut -d '"' -f 4) | sudo tar zxf - -C /usr/bin --overwrite
```

## Build Wrestic from source
Requirements:\
[git](https://git-scm.com/)\
[rust](https://rust-lang.org/)
```sh
git clone https://github.com/alvaro17f/wrestic.git
cd wrestic
cargo build --release
sudo cp target/release/wrestic /usr/bin
```