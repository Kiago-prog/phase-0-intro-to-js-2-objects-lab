// Write your solution in this file!

// Initialize the employee object
let employee = {
  name: 'Sam',
  streetAddress: ''
};

// Function to update employee non-destructively
function updateEmployeeWithKeyAndValue(employee, key, value) {
  return { ...employee, [key]: value };
}

// Function to update employee destructively
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

// Function to delete from employee non-destructively
function deleteFromEmployeeByKey(employee, key) {
  let newEmployee = { ...employee };
  delete newEmployee[key];
  return newEmployee;
}

// Function to delete from employee destructively
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}
