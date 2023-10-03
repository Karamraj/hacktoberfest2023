section .data
    hello db 'Hello, World!',0
    hello_len equ $ - hello

section .text
    global _start

_start:
    ; Syscall untuk menulis ke stdout (file descriptor 1)
    mov eax, 4
    mov ebx, 1
    mov ecx, hello
    mov edx, hello_len
    int 0x80

    ; Keluar program
    mov eax, 1
    int 0x80
