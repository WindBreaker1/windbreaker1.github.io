---
title: "Linux Terminal Commands"
date: "18-10-2025"
tags: "linux"
description: "A list of Linux Terminal commands."
icon: ""
---

Part of the [[Linux]] sub stack of notes.

Linux Terminal Commands List

| Command             | Description                                                            |
| :------------------ | :--------------------------------------------------------------------- |
| `ls`                | Lists the content of a directory                                       |
| `pwd`               | Prints the working directory                                           |
| `cd`                | Changes directory                                                      |
| `mkdir`             | Creates directories                                                    |
| `cp`                | Copies files and directories                                           |
| `mv`                | Moves (renames) files and directories                                  |
| `rm`                | Removes files and directories                                          |
| `touch`             | Creates empty files or updates access/modification times               |
| `cat`               | Displays file contents                                                 |
| `head`              | Displays the first lines of a file                                     |
| `tail`              | Displays the last lines of a file                                      |
| `less`              | Displays file contents one screen at a time interactively              |
| `more`              | Displays file contents one screen at a time                            |
| `grep`              | Searches for lines matching a pattern within files                     |
| `find`              | Searches for files and directories based on specified criteria         |
| `chmod`             | Changes file permissions                                               |
| `chown`             | Changes file owner and group                                           |
| `sudo`              | Executes commands with administrative privileges                       |
| `man`               | Displays the manual page for a command                                 |
| `uname`             | Shows Linux system information                                         |
| `uptime`            | Shows system uptime and load average                                   |
| `date`              | Displays the current date and time                                     |
| `cal`               | Shows a calendar with the current date highlighted                     |
| `hostname`          | Displays the system host name                                          |
| `df`                | Displays free disk space                                               |
| `du`                | Estimates file space usage                                             |
| `free`              | Displays memory usage                                                  |
| `ps`                | Reports the status of shell processes                                  |
| `top`               | Shows an overall system view of processes                              |
| `htop`              | An interactive process viewer and manager                              |
| `kill`              | Terminates a process by specifying its PID                             |
| `killall`           | Sends a kill signal to all instances of a process by name              |
| `ping`              | Tests network connectivity                                             |
| `ssh`               | Provides secure command-line access to remote Linux systems            |
| `scp`               | Transfers files securely between machines                              |
| `rsync`             | Synchronizes files and directories between two locations               |
| `wget`              | Retrieves files from the internet over HTTP, HTTPS, FTP, and FTPS      |
| `curl`              | Transfers data using various network protocols                         |
| `systemctl`         | Central management tool for controlling the init system                |
| `journalctl`        | Queries the systemd journal for logs                                   |
| `clear`             | Clears the terminal screen                                             |
| `alias`             | Defines or displays aliases for commands                               |
| `unalias`           | Removes alias definitions                                              |
| `which`             | Returns the full binary path of a program                              |
| `whereis`           | Locates the binary, source, and manual page files for a command        |
| `apropos`           | Searches help manual pages for keywords                                |
| `locate`            | Finds files by name                                                    |
| `find`              | Searches for files based on various criteria                           |
| `tar`               | Creates and extracts archive files                                     |
| `gzip`              | Compresses or decompresses named files                                 |
| `bzip2`             | Compresses or decompresses named files                                 |
| `mount`             | Mounts a file system to a directory                                    |
| `umount`            | Unmounts a file system                                                 |
| `df`                | Displays free disk space                                               |
| `du`                | Estimates file space usage                                             |
| `lscpu`             | Displays information about the CPU architecture                        |
| `lsblk`             | Lists block devices                                                    |
| `lspci`             | Lists all PCI devices                                                  |
| `lsusb`             | Lists USB devices                                                      |
| `lshw`              | Lists hardware information                                             |
| `cat /proc/cpuinfo` | Displays detailed CPU information                                      |
| `cat /proc/meminfo` | Displays detailed memory information                                   |
| `cat /proc/mounts`  | Shows mounted file systems                                             |
| `sudo dmidecode`    | Provides detailed system hardware information                          |
| `hdparm`            | Retrieves information about hard disk drives                           |
| `badblocks`         | Checks for bad blocks on a device                                      |
| `fsck`              | Checks and repairs file system consistency                             |
| `id`                | Prints user and group IDs                                              |
| `who`               | Shows who is logged in                                                 |
| `w`                 | Shows who is logged in and what they are doing                         |
| `last`              | Shows a list of the last logged-in users                               |
| `finger`            | Displays information about a user                                      |
| `useradd`           | Creates a new user account                                             |
| `userdel`           | Deletes a user account                                                 |
| `usermod`           | Modifies an existing user account                                      |
| `passwd`            | Changes a user's password                                              |
| `groupadd`          | Adds a new user security group                                         |
| `groupdel`          | Deletes a group                                                        |
| `groupmod`          | Modifies a group                                                       |
| `groups`            | Prints the group names a user is in                                    |
| `sudo`              | Executes commands with administrative privileges                       |
| `su`                | Switches to another user account                                       |
| `apt`               | Manages software packages on Debian/Ubuntu systems                     |
| `apt-get`           | Manages software packages on Debian/Ubuntu systems                     |
| `aptitude`          | Manages software packages on Debian/Ubuntu systems                     |
| `yum`               | Manages software packages on Red Hat/CentOS systems                    |
| `dnf`               | Manages software packages on Fedora/RHEL systems                       |
| `rpm`               | Manages software packages on RPM-based systems                         |
| `dpkg`              | Manages software packages on Debian/Ubuntu systems                     |
| `shutdown`          | Shuts down the system                                                  |
| `reboot`            | Restarts the system                                                    |
| `halt`              | Stops the system immediately                                           |
| `exit`              | Exits the current shell session                                        |
| `echo`              | Displays lines of text                                                 |
| `wc`                | Counts words, lines, and characters in files                           |
| `source`            | Executes commands from a file in the current shell                     |
| `set`               | Displays or sets shell variables and options                           |
| `export`            | Sets an environment variable                                           |
| `env`               | Runs a command in a modified environment                               |
| `jobs`              | Lists active jobs                                                      |
| `bg`                | Sends a job to the background                                          |
| `fg`                | Sends a job to the foreground                                          |
| `wait`              | Suspends script execution until background jobs are terminated         |
| `nohup`             | Runs a command immune to hangups                                       |
| `sleep`             | Suspends program execution for a specified time                        |
| `crontab`           | Schedules commands to run at a later time                              |
| `cron`              | Daemon to execute scheduled commands                                   |
| `at`                | Schedules a command to run once at a specific time                     |
| `dig`               | Performs DNS lookups                                                   |
| `nslookup`          | Queries DNS for information                                            |
| `netstat`           | Displays network connections, routing tables, and interface statistics |
| `ss`                | Investigates sockets                                                   |
| `ifconfig`          | Configures network interfaces                                          |
| `ip`                | Manages routing, devices, and tunnels                                  |
| `route`             | Manages the kernel's IP routing table                                  |
| `ping`              | Tests network connectivity                                             |
| `traceroute`        | Traces the route packets take to a network host                        |
| `mtr`               | Network diagnostics combining ping and traceroute                      |
| `nmap`              | Scans networks for open ports and services                             |
| `iptables`          | Manages firewall rules                                                 |
| `firewall-cmd`      | Manages firewall rules on systems using firewalld                      |
| `nft`               | Manages packet filtering and classification                            |
| `dmesg`             | Prints the kernel ring buffer messages                                 |
| `journalctl`        | Queries the systemd journal                                            |
| `systemctl`         | Controls the systemd init system                                       |
| `hostnamectl`       | Shows or sets the system hostname                                      |
| `timedatectl`       | Shows or sets system date, time, and NTP                               |
| `localectl`         | Shows or sets locale and keyboard layout                               |
