// Write your solution in this file!
const employee = {
    name: 'Ben',
    streetAddress: '6 North Street'
};

function updateEmployeeWithKeyAndValue(){
    const updatedEmployee = {...employee};
    updatedEmployee.name= "Sam";
    updatedEmployee.streetAddress = "11 Broadway";
    return updatedEmployee;

};

function destructivelyUpdateEmployeeWithKeyAndValue (obj, key, value){
    obj [key] = value;
    return obj;
};

function deleteFromEmployeeByKey (obj, key, value) {
    return {
        ...obj,
        [key]: value,
    };
    delete obj[key];
    
};

function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj[key];
    return obj;
};
