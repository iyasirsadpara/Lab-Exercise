#include <iostream>
#include <vector>
#include <set>
using namespace std;

vector<int> find_common_elements(const vector<int>& arr1, const vector<int>& arr2) {
    set<int> set1(arr1.begin(), arr1.end());
    set<int> set2(arr2.begin(), arr2.end());
    vector<int> common_elements;

    for (int num : set1) {
        if (set2.find(num) != set2.end()) {
            common_elements.push_back(num);
        }
    }
    return common_elements;
}

int main() {
    vector<int> array1 = {1, 2, 3, 4, 5};
    vector<int> array2 = {4, 5, 6, 7, 8};

    vector<int> common_elements = find_common_elements(array1, array2);

    cout << "Common elements: ";
    for (int num : common_elements) {
        cout << num << " ";
    }
    cout << endl;

    return 0;
}
