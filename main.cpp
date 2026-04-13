#include <iostream>
using namespace std;

int main()
{
    int row=3,col=3;
    int input1[row][col];
    int input2[row][col];
    int sum[row][col];
    cout << "Enter elements of matrix 3x3" << endl;
    for(int i=0;i<3;i++){
        for(int j=0;j<3;j++){
            cout << "Enter element at position [" << i+1 << "][" <<j+1 <<"]: ";
            cin>>input1[i][j];
        }
    }
    for(int i=0;i<3;i++){
        for(int j=0;j<3;j++){
            cout<<input1[i][j]<<"  ";
        }
        cout<<endl;
    }
    cout<<"Enter Second Matrix Elements"<<   endl;
    for(int i=0;i<3;i++){
        for(int j=0;j<3;j++){
            cout << "Enter element at position [" << i+1 << "][" <<j+1 <<"]: ";
            cin>>input2[i][j];
        }
    }

    for(int i=0;i<3;i++){
        for(int j=0;j<3;j++){
            cout<<input2[i][j]<<"  ";
        }
    cout<<endl;
    }
    cout<<"Now Adding both matrix"<<endl;

    for(int i=0;i<3;i++){
        for(int j=0;j<3;j++){
            sum[i][j]=input1[i][j]*input2[i][j];
        }
    }s


    for(int i=0;i<3;i++){
        for(int j=0;j<3;j++){
            cout<<sum[i][j]<<"   ";
        }
        cout<<endl;
    }


    return 0;
}
