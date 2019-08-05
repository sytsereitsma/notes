# SVN tips and tricks

## Find files in repository
```svn list -R <repo URL> | grep -i "foo"```

## Create new repo
On the server SVN root:
```sh
svnadmin create $1
./setpermissions.sh $1
echo "Repo can be checked out from: http://svn.nl.moog.com/svn/$1"
```
