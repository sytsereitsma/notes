# Linux Tricks

## Search command history with up and down arrow

In ~/.inputrc
```
# Add this include if ~/.inputrc does not exist yet
#$include /etc/inputrc
"\e[A": history-search-backward            # arrow up
"\e[B": history-search-forward             # arrow down
```

Log out and in again to activate.

## Show git branch in prompt

