"use strict";
// 4. Create a generic class called `Container` that stores a value of any type.
// Add methods to `getValue` and `setValue`.
// Initialize it with "Initial Value", update it to "Updated Value", and log the new value.
class Container {
    constructor(value) {
        this.value = value;
    }
    getValue() {
        return this.value;
    }
    setValue(value) {
        this.value = value;
    }
}
const stringContainer = new Container("Initial Value");
s;
stringContainer.setValue("Updated Value");
console.log(stringContainer.getValue()); // Expected output: "Updated Value"
