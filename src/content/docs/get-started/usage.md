---
title: Usage
description: How to use Wrestic.
---

To use **Wrestic** simply run the following command:

```sh
sudo wrestic
```
It will show you a screen like this:

![wrestic screen](src/assets/wrestic_tui.png)

From there you can perform various actions, but it's recommended to initialize the repositories first.\
You can do it inside of this screen by selecting `Initialize` or you can run the command directly with the CLI:

```sh
sudo wrestic init
```
This commad will start all the repos not initialized yet from your `wrestic.toml` file.

## Wrestic commands
When you run the following command:
```sh
sudo wrestic help
```
**Wrestic** will show you the help screen:

```sh
Restic wrapper built in Rust

Usage: wrestic [OPTIONS] [COMMAND]

Commands:
  backup     Make a backup of all your repositories
  restore    Restore a snapshot
  snapshots  List snapshots
  delete     Delete a snapshot
  init       Initialize all of your repositories
  check      Check repository health
  repair     Fix any issue
  cache      Clean cache
  update     Update Wrestic
  help       Print this message or the help of the given subcommand(s)

Options:
      --generate <GENERATOR>  [possible values: bash, elvish, fish, powershell, zsh]
  -h, --help                  Print help
  -V, --version               Print version
```

## Autocompletion
Setting up autocompletion for Wrestic is very easy.\
The only thing you have to know is which is your shell.\
If you don't know which is your shell, you can run:

```sh
echo $SHELL
```
So... How can I get autocompletions?\
Just run:

```sh
sudo wrestic --generate <YOUR SHELL NAME>
```

if your shell in **bash** or **zsh** it will do everything for you, so when you restart your shell you'll have autocompletions.\
If your shell is different, then **Wrestic** will output everything you need to get autocompletions in your shell.

***BASH USERS, YOUR ATTENTION PLEASE:***\
Keep in mind that if your shell is **BASH** you'll need a very popular package called:\
`bash-completion`