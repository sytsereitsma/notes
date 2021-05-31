cd /tank/backups
NAS met backups


## Schijf groter maken [3h]
* Snapshot mogelijk
* Schijf is vergroot
* ```sudo zpool online zroot da0p3``` brrrr

cd /tank/backups
Delete old backups

https://tylersguides.com/guides/how-to-increase-the-size-of-a-freebsd-disk/
```sh
sudo camcontrol reprobe da0
gpart show
sudo zpool online zroot da0p3
sudo gpart recover da0
sudo gpart resize -i 3 da0
sudo zpool online -e zroot da0p3
zpool list
```

## Renault sales case [15m]
* Klimaat kamer (Servathin?)
* 11:00 morgen
* 