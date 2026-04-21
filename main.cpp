#include <iostream>
#include <cstdlib>
#include <ctime>

using namespace std;

int main() {
    string arry[] = {"Head", "Tail"};
    string userInput, input;
    srand(time(0));
    while (true) {
        cout << "Flip the coin? \n 1:'yes' to flip \n 2:'no' to quit): ";
        cin >> userInput;
        if (userInput == "no") {
            cout << "Thanks for playing!" << endl;
            break;
        }
        if (userInput == "yes") {
            int flip = rand() % 2;
            cout << "Guess Head or Tail: ";
            cin >> input;
            if (input == arry[flip]) {
                cout << "Congratulations! You win!" << endl;
            } else {
                cout << "You lost!.The machine chose: " << arry[flip] << "." << endl;
            }
        }
    }

    return 0;
}
