"use strict";

/*
 Problem 4:

 Background:
 At present, currency notes in India are issued in the denomination of Rs.5, Rs.10, Rs.20, Rs.50, Rs.100, Rs.500 and
 Rs.1000.
 http://www.rbi.org.in/currency/faqs.html

 Problem statement:
 Write a program that will enable counting of money given in the form of Indian currency notes. The program must take
 a variable number of arguments. These arguments must be summed and the total must be displayed. For any input number
 that does not match a valid currency denomination, ignore the value and stop counting further, displaying the sum
 counted so far.

 Examples:

 Given Rs 10, 20, 100 notes
 When I count the money
 Then my total is Rs 130

 Given Rs 20, 50, 10, 20, 13, 500 notes
 When I count the money
 Then my total is Rs 100

*/

// Write your JavaScript here
function changeElementText(element, answer) {
    $(element).text(answer);
}

function countMoney(...currencyStrings){
    var sum = 0;
    for(var index in currencyStrings){
        var currencyString = currencyStrings[index];
        var currencyNote = new CurrencyNote(currencyString);
        if (currencyNote.isValidCurrency()){
            sum+= currencyNote.getAmount();
        }
        else {
            break;
        }
    }
    changeElementText("#problemFourAnswer", sum);
}

class CurrencyNote {
    constructor(currencyString){
        this.isValidCurrency = this.isValidCurrency.bind(this);
        this.getAmount = this.getAmount.bind(this);
        this.setAmount = this.setAmount.bind(this);
        this.setAmount(currencyString);
    }
    isValidCurrency() {
        const validAmounts = [5,10,20,50,100,500,1000];
        return validAmounts.indexOf(this.getAmount())>=0;
    }

    setAmount(currencyString){
        var amountString = currencyString.substring(3);
        this.amount = parseInt(amountString);
    }
    getAmount(){
        return this.amount;
    }

}