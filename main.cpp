#include <iostream>
#include <cstdlib>  // For rand() and srand()
#include <ctime>    // For time()

using namespace std;

int main() {
    // Seed the random number generator with the current time
    srand(time(0));

    string userChoice;
    cout << "Choose Head or Tail: ";
    cin >> userChoice;

    // Convert user choice to lowercase to avoid case-sensitive issues
    for (int i = 0; i < userChoice.length(); i++) {
        userChoice[i] = tolower(userChoice[i]);
    }

    // Check if the user entered a valid option
    if (userChoice != "head" && userChoice != "tail") {
        cout << "Invalid choice! Please enter either 'Head' or 'Tail'." << endl;
        return 1; // Exit program with an error code
    }

    // Simulate the coin flip (0 = Head, 1 = Tail)
    int coinFlip = rand() % 2;
    string coinResult = (coinFlip == 0) ? "head" : "tail";

    // Output the result of the coin flip
    cout << "The coin landed on: " << (coinFlip == 0 ? "Head" : "Tail") << endl;

    // Check if the user's guess matches the result
    if (userChoice == coinResult) {
        cout << "Congratulations! You guessed it right." << endl;
    } else {
        cout << "Sorry, you guessed it wrong." << endl;
    }

    return 0;
}
