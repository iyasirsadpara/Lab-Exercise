#include <iostream>
#include <string>
using namespace std;

string capitalizeAfterFullStop(const string& sentence) {
    string result = "";
    bool capitalizeNext = true;  // Flag to capitalize the next character after a full stop

    // Loop through each character in the sentence
    for (char ch : sentence) {
        if (capitalizeNext && isalpha(ch)) {
            // Capitalize the first letter after a full stop
            result += toupper(ch);
            capitalizeNext = false;  // Reset the flag after capitalizing
        } else {
            // Add the character as is
            result += ch;
        }

        // If the character is a full stop or a space, set capitalizeNext to true
        if (ch == '.' || ch == ' ') {
            capitalizeNext = true;
        }
    }

    return result;
}

int main() {
    string sentence = "hello world. this is a test. check full stop.it is a bright day. how are you let's go out.this is a sample sentence. the next word will be capitalized.my name is john. i am learning c++. hope you enjoy it.hello there. what is your name? i am excited to meet you.";
    cout << capitalizeAfterFullStop(sentence) << endl;  // Output: "Hello world. This is a test. Check full stop."
    return 0;
}
