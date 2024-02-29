---
title: Uso
description: Cómo usar Wrestic.
---

Para usar **Wrestic** solo tienes que ejecutar el siguiente comando:

```sh
wrestic
```
Y se mostrará una pantalla como ésta:

![wrestic screen](src/assets/wrestic_tui.png)

Desde aquí puedes realizar varias acciones, pero es recomendable inicializar los repositorios primero.\
Puedes hacerlo en esta pantalla seleccionando `Initialize` o puedes ejecutar el commando directamente a través de la CLI:

```sh
wrestic init
```
Este commando inicializará todos los repositorios que aún no hayan sido inicializados y se encuentren en tu archivo `wrestic.toml`.

## Comandos de Wrestic
Al ejecutar el commando:
```sh
wrestic help
```
Se mostrará la pantalla de ayuda:

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

## Autocompletado
Configurar el autocompletado para Wrestic es muy fácil.\
Lo único que tienes que saber es cuál es tu shell.\
Si no sabes cual es tu shell, puedes ejecutar:

```sh
echo $SHELL
```
Entonces... ¿Cómo puedo obtener autocompletado?\
Simplemente ejecuta:

```sh
wrestic completions <NOMBRE DE TU SHELL>
```
Este comando mostrara por consola el script que necesitas para tu shell.\
Para obtener autocompletado, debes guardar este script en un archivo en la respectiva carpeta de completions de tu shell.\
Tomando como ejemplo el caso de **bash**, puedes ejecutar:

```sh
wrestic completions <NOMBRE DE TU SHELL> > /etc/bash_completion.d/wrestic
```

***USUARIOS DE BASH, ATENCIÓN POR FAVOR:***\
Ten en cuenta que si tu shell es **BASH** necesitarás un paquete muy popular llamado:\
`bash-completion`