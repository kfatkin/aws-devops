// This program calculates an employee's take home pay. 
#include <iostream>
using namespace std;
int main()
{
   double salary = 1250.00;
   // Calculate state tax here   
   double stateTax = .065;
   double stateWithholding = salary * stateTax;
   // Calculate federal tax here   
   double federalTax = .28;
   double federalWithholding = salary * federalTax;
   // Calculate dependent deduction here   
   double numDependents = 2;
   double dependentDeduction = (salary * .025) * numDependents; 
   // Calculate total withholding here   
   double totalWithholding = stateWithholding + federalWithholding  + dependentDeduction;
   // Calculate take-home pay here
   double takeHomePay = salary - totalWithholding;

   // Output variables and values 
   cout << "State Tax: $" << stateWithholding << endl;
   cout << "Federal Tax: $" << federalWithholding << endl;
   cout << "Dependents: $" << dependentDeduction << endl;
   cout << "Salary: $" << salary << endl;
   // Commented this line, used it to confirm totalWithholding had the appropriate value.
   //cout << "Total Withholding: $" << totalWithholding << endl;
   cout << "Take-Home Pay: $" << takeHomePay << endl;

   return 0;
}