// Write your solution in this file!

    const employee = {name:"Lana", streetAddress:"Burney Way"};
    
function updateEmployeeWithKeyAndValue(employee, key, value) {
    console.log (employee);
    const newEmployee = {...employee, name:"Sam", streetAddress:"11 Broadway"}
return newEmployee};
function destructivelyUpdateEmployeeWithKeyAndValue (employee, key, value) {
    employee.name= "Sam";
    employee.streetAddress= "12 Broadway"
        return employee; 
}
function deleteFromEmployeeByKey(employee, key) {
    const deleteEmpl = {...employee}
    delete deleteEmpl.name;
    return deleteEmpl;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    console.log(employee);
    delete employee.name;
    return employee;

}

/*
    const newEmployee = {...employee,  [name]:"Sam", [streetAddress]:"11 Broadway"};

    return employees;
    return newEmployee;
        return updateEmployeeWithKeyAndValue;
}
function employees(employee, key, object){}
*/