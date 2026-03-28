//Write a function to find if there exists a pair whose sum is equal to the given target. You may need to consider edge cases where there are no valid pairs.
#include <iostream>
#include <vector>

using namespace std;
bool sum(const vector<int>& arr, int target) {
    int n = arr.size();
    for (int i = 0; i < n; i++) {
        for (int j = i + 1; j < n; j++) {
            if (arr[i] + arr[j] == target) {
                return true;
            }
        }
    }

    return false;
}

int main() {
    int n, target;
    cout << "Enter the size of the array: ";
    cin >> n;
    vector<int> arr(n);
    for (int i = 0; i < n; i++) {
        cout<<"Enter elements at ["<<i+1<<"] =";
        cin >>arr[i];
    }

    cout << "Enter the target sum: ";
    cin >> target;
    if (sum(arr, target)) {
        cout << "There exists a pair whose sum is =" << target << endl;
    } else {
        cout << "No such pair exists." << endl;
    }

    return 0;
}
