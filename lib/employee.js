"use strict"
const fs = require("fs");
const inquirer = require("inquirer");

//main class
class Employee {
    constructor( name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
      
    }

    getName(){
       return this.name
    }

    getId(){
        return this.id
    }

    getEmail(){
        return this.email
    }
    getRole(){
        return "Employee"
    }
     //returns Employee
};

module.exports = Employee;