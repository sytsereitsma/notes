# Working with forks

## Adding the upstream
After forking the repo and cloning it we need to add the upstream (original repo) to the local checkout:

```git remote add upstream <url>```

## Making changes
Create a new branch and make your changes"

```
git checkout master
git branch <branch name>
```

## Sync fork with upstream

See also [Syncing a fork](https://help.github.com/en/articles/syncing-a-fork) on github.

First get the latest changes from the upstream
```git fetch upstream```

This will creates a branch called 'upstream/master'

Change to the master branch and merge the changes:
```
git checkout master
git merge upstream/master
```

## Creating a pull request
First merge the feature branch with the master branch (after the sync with upstream)
```
git checkout <branch name>
git merge master
```

Run all tests ant linting tools to make sure everyting still works.

After that you're basically good to go, but sometimes you do not want all itty bitty commits to make it to the fork. If the latter is ok for you just issue the pull request. Otherwise create a new branch off of master and merge your changes into there:

```
git checkout master
git branch <branch name for pull request>
git merge <branch name>
```

And issue the pull request.

## Use all your new features _and_ the latest upstream features
Simply create a new branch which you merge all your changes and the master changes to:
```
git checkout master
git branch <my 'master' branch name>
git merge master
git merge <branch name>
```
