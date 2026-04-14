#include <iostream>

using namespace std;

int main()
{
    int n;
    cout<<"Enter the size of arry: \n";
    cin>>n;
    int num[n];

    cout<<"Enter 10 number :\n";
    for(int i=0;i<n;i++){

        cin>>num[i];

    }
    cout<<"You entered a following number\n";
    cout<<"[";
    for(int i=0;i<=n;i++){
        cout<<num[i];
        if(i<n-1){
            cout<<",";
        }
    }
    cout<<"]";
    return 0;
}
