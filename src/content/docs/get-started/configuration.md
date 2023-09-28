---
title: Configuration
description: A guide for accomplish Wrestic configuration.
---

Let's see how to configure **Wrestic**.\
Wrestic's configuration is pretty simple. All you have to do is generate a `wrestic.toml` file and start.

## Configuring wrestic.toml
Inside of your `$USER` folder, you have to create (if is not created yet) a `.config` folder.\
Your Wrestic configuration will live there inside another folder called `wrestic`.

So the path will be: `/home/<$USER>/.config/wrestic/wrestic.toml`

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