kts与原gradle相差不大，需要注意极个别特殊写法

``` kotlin
id ("org.jetbrains.kotlin.jvm") version "2.2.21"

version = project.property("mod_version") as String

val modVersion = providers.gradleProperty("mod_version")

inputs.property("mod_version", modVersion)
```

最重要的是，修改后，需要手动删除*build*文件夹和./gradle文件夹


