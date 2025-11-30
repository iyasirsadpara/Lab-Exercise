#include <iostream>

using namespace std;

int main()
{
    int i=1;
    for(int i=1;i<101;i++)
        if(i%5==0)
    {
        cout<<i<<" : firrrzz"<<endl;
    }
        else if(i%3==0){
            cout<<i<<" : buzz"<<endl;
        }
        else{
            cout<<i<<endl ;
        }

    return 0;
}
