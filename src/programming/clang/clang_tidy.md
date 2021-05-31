# Using clang tidy

Some clang tidy recipes

## Add override to all function declarations
Simply run clang tidy using the following command line:
```
cd SmarTESTOne/bld/GNUMake
python3 /usr/bin/run-clang-tidy -header-filter='.*' -checks='-*,modernize-use-override' -fix
```
