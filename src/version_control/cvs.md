#CVS

## Resetting mule's lock
When checking out files form CVS it locks the directory with a file ("#cvs.lock",
"#cvs.rfl" and/or "#cvs.wfl"). It sometimes happens that a checkout is interrupted
by a sudden reboot, in which case the lock file is never removed, causing all
builds to wait for the lock.

To find the lock files, login to the CVS server and issue the following command:

```sh
find /home/cvs -name "#cvs.*"
```

You can probably remove all files it finds. The CVSROOT checkout does not have
a lock file, but a lock directory.
