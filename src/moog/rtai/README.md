# RTAI

[Semaphores](./rtai/semaphores.md)


## Get stack traces for all RTAI tasks
```sh
#!/bin/sh
rtai_ps

echo

rtai_ps | grep % | awk -F ' ' '{print $5}' | while read line; do
    echo "Stack trace for PID $line"
    echo "-------------------------"
    cat /proc/$line/stack
    echo
done
```

## Get count of all mutexes and semaphores
Note that the PID is of the creating process, not the resource holder.

```sh
#!/bin/sh

echo "PID Sem info"
echo

cat /proc/rtai/names|grep SEM|awk -F ' ' '{print $2 " " $7}' | while read line; do
    sem_name=`echo $line | cut -d' ' -f1`
    pid=`echo $line | cut -d' ' -f2`
    echo -n "$pid "
    rt_sem info $line
done
```