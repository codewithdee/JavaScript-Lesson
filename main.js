// RETURNING BOOLEAN VALUES FROM FUNCTIONS
function isLess(a, b) {
    
    return a < b;
}

console.log(isLess(5, 10));

/* function isGreater(c, d) {
    if (c > d) {
        return true;
    } else {
        return false;
    }
}
console.log(isGreater(5, 9)) */


//RETURNING EARLY PATTERN FROM FUNCTIONS
function abTest(a, b) {
    
    if (a < 0 || b < 0) {
        return undefined;
    }

    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

console.log(abTest(2, 3));


//COUNTING CARDS
var count = 0;

function cc(card) {
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break;
    }

    var holdbet = 'Hold';
    if (count > 0) {
        holdbet = 'Bet'
    }

    return count + " " + holdbet;

}


cc(2); cc('K'); cc(10); cc('K'); cc('A');
console.log(cc(4)); 


// BUILD JAVASCRIPT OBJECTS
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};


//ACCESSING OBJECT PROPERTIES WITH DOT NOTATION
var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};

var hatvalue = testObj.hat;
var shirtValue = testObj.shirt

console.log(hatvalue);
console.log(shirtValue);


