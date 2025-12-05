是minecraft中的命名空间，其用法多为
```java
Identifier.of(String namespace, String path)
```

> [!info] 原文件中强调
> The namespace and path must contain only ASCII lowercase letters ([a-z]), ASCII digits ([0-9]), or the characters _, ., and -. The path can also contain the standard path separator /. Uppercase letters cannot be used. 

命名空间不能使用大写字母，并且只能使用ASCII码中字符，这是一个新手常犯的错误，一般情况下，`namespace`多为`MOD_ID`

## 添加模型
如果`path`为`custom_item`
- 物品模型：`…/resources/assets/your_mod_id/models/item/custom_item.json`
- 物品纹理：`…/resources/assets/your_mod_id/textures/item/custom_item.png`
- 物品模型映射（自从 1.21.4）：`…/resources/assets/your_mod_id/items/custom_item.json`