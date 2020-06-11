# Using clang tidy

## The compilation database

The compilation database can easily be generated using the 'bear' program on Linux.

To install bear (and clang c.s.): 
```
sudo apt install bear llvm clang-tidy clang-tools
```

Now create the compilation database:
```
cd SmarTESTOne
make distclean
bear make all
ln -s compile_commands.json bld/GNUMake/compile_commands.json # Need to run clang tools from bld/GNUMake
```


## Add override to all function declarations
Simply run clang tidy using the following command line:
```
cd SmarTESTOne/bld/GNUMake
python3 /usr/bin/run-clang-tidy -header-filter='.*' -checks='-*,modernize-use-override' -fix
```
