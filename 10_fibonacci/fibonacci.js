const fibonacci = function(choice) {
    let newNumber = 1;
    let oldNumber = 0;
    if (choice < 0) {
        return "OOPS"
    }
    else {  
     for (let count = 0; count < choice; count++){
        let temp = newNumber
        newNumber = newNumber+oldNumber
        oldNumber = temp
     }
     return oldNumber
    }
};

// Do not edit below this line
module.exports = fibonacci;
