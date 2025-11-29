#include <iostream>
using namespace std;

int main() {
    int first=0,sec=1,next,n;
    cout<<"Enter hoe many term you would like to print"<<endl;
    cin>>n;
    cout<<"fibonacci Sequence: ";
    for(int i=0;i<n;i++){
        if(i==0){
            cout<<first<<"  ";
        }
        else if(i==1){
            cout<<sec<<"  ";
        }
        else{
            next=first+sec;
            cout<<next<<"  ";
            first=sec;
            sec=next;
        }

    }

    return 0;

}
