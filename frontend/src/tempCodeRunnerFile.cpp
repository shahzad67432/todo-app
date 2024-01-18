#include <iostream>
using namespace std;

int main() {
    int numStudents;
    cout << "Enter the number of students: ";
    cin >> numStudents;

    for (int student = 1; student <= numStudents; ++student) {
        int subject1, subject2, subject3;

        cout << "Enter marks for student " << student << " in three subjects:" << endl;
        cout << "Subject 1: ";
        cin >> subject1;

        cout << "Subject 2: ";
        cin >> subject2;

        cout << "Subject 3: ";
        cin >> subject3;

        double average = (subject1 + subject2 + subject3) / 3.0;

        cout << "Average score for student " << student << ": " << average << endl;
    }

    return 0;
}
