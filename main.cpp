#include <iostream>
using namespace std;

// Function to check if the year is a leap year
bool isLeapYear(int year) {
    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0)
                return true;  // Divisible by 400: Leap year
            else
                return false; // Divisible by 100 but not 400: Not a leap year
        } else
            return true;      // Divisible by 4 but not 100: Leap year
    }
    return false;             // Not divisible by 4: Not a leap year
}

// Function to calculate the number of days in a month
int daysInMonth(int month, int year) {
    if (month == 2) {
        return isLeapYear(year) ? 29 : 28;  // February: 28 or 29 days
    } else if (month == 4 || month == 6 || month == 9 || month == 11) {
        return 30;  // April, June, September, November: 30 days
    } else {
        return 31;  // January, March, May, July, August, October, December: 31 days
    }
}

// Function to calculate age
void calculateAge(int birthDay, int birthMonth, int birthYear, int currentDay, int currentMonth, int currentYear) {
    int ageYears, ageMonths, ageDays;

    // Adjust for leap years and days in month
    if (currentDay < birthDay) {
        currentDay += daysInMonth(currentMonth - 1, currentYear);
        currentMonth--;
    }
    if (currentMonth < birthMonth) {
        currentYear--;
        currentMonth += 12;
    }

    ageYears = currentYear - birthYear;
    ageMonths = currentMonth - birthMonth;
    ageDays = currentDay - birthDay;

    cout << "Your age is: " << ageYears << " years, " << ageMonths << " months, and " << ageDays << " days." << endl;
}

int main() {
    int birthDay, birthMonth, birthYear;
    int currentDay, currentMonth, currentYear;

    // Input birth date
    cout << "Enter your birth date (day month year): ";
    cin >> birthDay >> birthMonth >> birthYear;

    // Input current date
    cout << "Enter the current date (day month year): ";
    cin >> currentDay >> currentMonth >> currentYear;

    // Calculate age
    calculateAge(birthDay, birthMonth, birthYear, currentDay, currentMonth, currentYear);

    return 0;
}
