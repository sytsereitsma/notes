# Tunneling through laptop

## On windows PC
Start SSH server, make sure both  ```GateWayPorts``` and ```AllowTcpForwarding``` are enabled.

## On laptop
```ssh -R 8070:<target system>:80 sytse@atlantis```

### Examples:
Forward all traffic from home PC localhost:8070 to the bugsystem:
```ssh -R 8070:bugs.nl.moog.com:80 sytse@atlantis```

### Connect to a controller without having to add a gateway:
On dev.nl.moog.com:
```ssh -R 8070:10.30.222.150:22 sytse@dev```

