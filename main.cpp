// Write a function that converts all uppercase letters in a string to lowercase, and all lowercase letters to uppercase.
#include <iostream>
#include <string>

using namespace std;
string myfun(string&input){
    string result=input;
    for(char&ch:result){
        if(isupper(ch)){
            ch=tolower(ch);
        }
        else if(islower(ch)){
            ch=toupper(ch);
        }
    }
    return result;
}

int main()
{
    string input,result;
    cout << "Enter any text:\n";
    getline(cin,input);
    result=myfun(input);
    cout<<"convert text:\n"<<result;

    return 0;
}
