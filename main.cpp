#include <iostream>
#include <unordered_map>
using namespace std;

void count_characters(const string& str) {
        unordered_map<char, int> count_map;
    for (char ch : str) {
        count_map[ch]++;
    }
    for (const auto& item : count_map) {
        cout << "character: " << item.first << " times " << item.second << endl;
    }
}

int main() {
    string input;
    cout<<"Enter any Stirng: \n";
        getline(cin,input);
    count_characters(input);
    return 0;
}
