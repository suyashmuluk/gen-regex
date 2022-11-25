function regexpattern(str) {
    if (str) {
        if (str === 'mail') {
            return '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,10}$';
        } else if (str === 'pan') {
            return '^[a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}$'
        } else if(str === 'aadhar') {
            return '^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$'
        }
    } else {
        throw console.error('function regexpattern() requires 1 parameter');
    }

}

module.exports = regexpattern;