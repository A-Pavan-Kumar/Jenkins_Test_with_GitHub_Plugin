#include <iostream>
#include <ctime>

using namespace std;

int main() {
    time_t now = time(0);
    char* dt = ctime(&now);

    cout << "Current date and time: " << dt << endl;
    cout << "Hello, World!" << endl;

    return 0;
}
