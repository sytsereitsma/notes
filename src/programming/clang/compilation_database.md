# The clang compilation dtaabase

The compilation database is a relatively straightforward json file containing an array of all source files with the compile command line:

On windows:
```json
[
  {
    "directory": "C:/Projects/HEAD/SmarTESTOne/bld/VS2017",
    "command": "clang-tool -fms-extensions -fms-compatibility -fms-compatibility-version=19  -isystem \"C:/Projects/HEAD/SystemInfo/bld/VS2017/\"  -isystem \"C:/Projects/HEAD/Tools/VS2017/../../Libs/FDriver/src\"  -isystem \"C:/Projects/HEAD/Tools/VS2017/../../Libs/regex/src\"  -isystem \"C:/Projects/HEAD/Tools/VS2017/../../Libs/TestUtils/src\"  -isystem \"C:/Projects/HEAD/Tools/VS2017/../../Libs/gmock/googlemock/include\"  -isystem \"C:/Projects/HEAD/Tools/VS2017/../../Libs/gmock/googletest/include\"  -isystem \"C:/Projects/HEAD/Tools/VS2017/../../Libs/FoS/src\"  -isystem \"C:/Projects/HEAD/Tools/VS2017/../../Libs/Futil/src\"  -isystem \"C:/Projects/HEAD/SmarTESTOne/bld/VS2017/MyCurrentVersionInfo-Win32-Debug-v141\"  -isystem \"C:/Projects/HEAD/SystemInfo/bld/VS2017/SystemInfo-Win32-Debug-v141/\"  -isystem \"C:/Projects/HEAD/Tools/VS2017/../../include\"  -isystem \"C:/Projects/HEAD/Tools/VS2017/../../Win32-v141-Debug/include\"  -isystem \"C:/Program Files (x86)/Visual Leak Detector/include\"  -isystem \"C:/Program Files (x86)/Microsoft Visual Studio/2017/Professional/VC/Tools/MSVC/14.16.27023/include\"  -isystem \"C:/Program Files (x86)/Microsoft Visual Studio/2017/Professional/VC/Tools/MSVC/14.16.27023/atlmfc/include\"  -isystem \"C:/Program Files (x86)/Microsoft Visual Studio/2017/Professional/VC/Auxiliary/VS/include\"  -isystem \"C:/Program Files (x86)/Windows Kits/10/Include/10.0.17763.0/ucrt\"  -isystem \"C:/Program Files (x86)/Microsoft Visual Studio/2017/Professional/VC/Auxiliary/VS/UnitTest/include\"  -isystem \"C:/Program Files (x86)/Windows Kits/10/Include/10.0.17763.0/um\"  -isystem \"C:/Program Files (x86)/Windows Kits/10/Include/10.0.17763.0/shared\"  -isystem \"C:/Program Files (x86)/Windows Kits/10/Include/10.0.17763.0/winrt\"  -isystem \"C:/Program Files (x86)/Windows Kits/10/Include/10.0.17763.0/cppwinrt\"  -isystem \"C:/Program Files (x86)/Windows Kits/NETFXSDK/4.6.1/Include/um\"  -D _DEBUG  -D _MT  -D _DLL  -D WIN32  -D _CONSOLE  -D _CRT_SECURE_NO_DEPRECATE  -D _CRT_NONSTDC_NO_DEPRECATE -std=c++14  \"C:/Projects/HEAD/SystemInfo/src/main.cpp\"",
    "file": "C:/Projects/HEAD/SystemInfo/src/main.cpp"
  },
]
````

On Linux:

## Generating the database

The compilation database can easily be generated using the 'bear' program on Linux. On windows I've had less luck with sourcetree (on our code base).

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