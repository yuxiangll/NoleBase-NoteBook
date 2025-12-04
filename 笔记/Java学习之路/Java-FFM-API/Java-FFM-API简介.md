---
comment: true
---
# FFM API简介Java的FFM（Foreign Function & Memory）API是Java平台提供的一个新特性，旨在简化Java程序与本地代码（如C/C++）及内存的交互。以下是其核心简介：

---

### **1. 什么是FFM API？**
- **Foreign Function Interface (FFI)**：允许Java直接调用本地函数（如C库），无需依赖JNI（Java Native Interface）的复杂胶水代码。
- **Memory Access**：提供安全、高效的原生内存操作能力，支持手动内存管理或结构化访问。

---

### **2. 关键特性**
- **类型安全**：通过`MemoryLayout`和`VarHandle`确保内存操作的准确性。
- **性能优化**：减少JNI开销，贴近原生性能。
- **统一API**：整合了`jextract`工具（自动生成本地头文件的Java绑定）。
- ** Panama项目**：FFM是OpenJDK Panama项目的核心成果，目标是为Java提供现代化的本地交互能力。

---

### **3. 核心组件**
- **`Linker`**：连接Java与本地函数（如System V/Windows ABI）。
- **`MemorySegment`**：表示连续内存区域（堆内/堆外、原生/托管）。
- **`SegmentAllocator`**：内存分配策略（隐式/显式）。
- **`FunctionDescriptor`**：描述本地函数签名（参数/返回类型）。

---

### **4. 示例代码**
```java
import jdk.incubator.foreign.*;

// 调用C标准库的strlen函数
try (MemorySession session = MemorySession.openConfined()) {
    Linker linker = Linker.nativeLinker();
    MemorySegment str = session.allocateUtf8String("Hello FFM!");
    
    MethodHandle strlen = linker.downcallHandle(
        linker.defaultLookup().lookup("strlen").orElseThrow(),
        FunctionDescriptor.of(ValueLayout.JAVA_LONG, ValueLayout.ADDRESS)
    );
    
    long len = (long) strlen.invoke(str);
    System.out.println("Length: " + len); // 输出: Length: 10
}
```

---

### **5. 适用场景**
- **高性能计算**：直接操作原生数据结构（如数组、指针）。
- **系统编程**：调用OS API或硬件驱动。
- **替代JNI**：简化本地库集成流程。

---

### **6. 当前状态**
- **孵化阶段**：Java 16+作为预览功能引入（`jdk.incubator.foreign`模块）。
- **目标**：未来可能成为标准Java SE的一部分。

FFM API通过降低本地交互复杂度，为Java开发者打开了系统级编程的新大门。需注意生产环境中使用前评估稳定性。