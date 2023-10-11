#include <stdio.h>

int main() {
    // ANSI escape codes to change text color (assuming support by the terminal)
    printf("\x1b[31m"); // Set text color to red
    printf("\x1b[47m"); // Set background color to white

    printf("Hello, World!\n");

    // Reset text color and background color to default
    printf("\x1b[0m");

    return 0;
}
