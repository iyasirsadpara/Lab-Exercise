#include <iostream>
using namespace std;

int main()
{
    int n,decimal,reminder,base;
    cout<<"Enter any binary number:"<<endl;
    cin>>n;
    base=1;
    decimal=0;
    while(n>0){
        reminder=n%10;
        decimal=decimal+reminder*base;
        base=base*2;
        n=n/10;
    }
    cout<<decimal;

    return 0;
}
