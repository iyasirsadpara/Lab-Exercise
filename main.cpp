#include <iostream>
#include <string>

using namespace std;
int counter(const string&input){
    int con=0;
    for(char ch : input){
        if(ch==' '){
            con=con+1;
        }
    }
    return con+1;//Add last word which has no space
}

int main(){
    string input;
    cout << "ENTER YOUR SENTENCE:\n" << endl;
    getline(cin,input);
    int counted=counter(input);
    cout << "There are "<<counted<<" words in sentence\n" << endl;

    return 0;
}
