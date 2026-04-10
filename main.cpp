#include <iostream>
using namespace std;

int main()
{
    lon g long num,counter;
    cout<<"Enter any numbers:"<<endl;
    cin>>num;
    counter=0;
    while(num>0)
    {
        num=num/10;
        counter=counter+1;
    }
    cout<<"The digits in you enter number are: "<<counter;
    return 0;
}
