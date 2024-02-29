---
title: Usage
description: How to use Wrestic.
---

To use **Wrestic** simply run the following command:

```sh
wrestic
```
It will show you a screen like this:

![wrestic screen](src/assets/wrestic_tui.png)

From there you can perform various actions, but it's recommended to initialize the repositories first.\
You can do it inside of this screen by selecting `Initialize` or you can run the command directly with the CLI:

```sh
wrestic init
```
This commad will start all the repos not initialized yet from your `wrestic.toml` file.

## Wrestic commands
When you run the following command:
```sh
wrestic help
```
**Wrestic** will show you the help screen:

```sh
Restic wrapper built in Rust

Usage: wrestic [COMMAND]

Commands:
  backup, -b     Make a backup of all your repositories
  restore, -r    Restore a snapshot
  snapshots, -s  List snapshots
  delete, -d     Delete a snapshot
  init, -i       Initialize all of your repositories
  check          Check repository health
  repair         Fix any issue
  cache          Clean cache
  update, -u     Update Wrestic
  custom, -c     Custom command
  completions    Generate tab-completion scripts for your shell
  help           Print this message or the help of the given subcommand(s)

Options:
  -h, --help     Print help
  -V, --version  Print version
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
wrestic completions <YOUR SHELL NAME>
```
This command will show via console the script you need for your shell.\
To get autocompletion, you must save this script in a file in the respective completions folder of your shell.\
Taking **bash** as an example, you can run:

```sh
wrestic completions <YOUR SHELL NAME> > /etc/bash_completion.d/wrestic
```

***BASH USERS, YOUR ATTENTION PLEASE:***\
Keep in mind that if your shell is **BASH** you'll need a very popular package called:\
`bash-completion`