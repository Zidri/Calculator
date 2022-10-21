//displayed number
var displayNum = "";

//math numbers
var num1 = "";
var num2 = "";
// var total;

//var to switch between math nums
var numCnt = 0;

//operand
var operand = "";

function setDisplay(input) {
    console.log(num1 + operand + num2);
    //set display
    displayNum = displayNum + input;

    //display
    document.getElementById("calcText").value = displayNum;
}

//show as typed
function changeCalc(input) {
    if (input != "clear") {
        if (input != '/' && input != '*' && input != '-' && input != '+') {
            if (numCnt == 0) {
                num1 = num1 + input;
                setDisplay(input);
            }
            else {
                num2 = num2 + input;
                setDisplay(input);
            }
        }
        else {
            if (num1 != "" && operand == "") {
                operand = input;
                numCnt = 1;
                setDisplay(input);
            }
        }
    }
    else {
        //clear display
        displayNum = "";
        //display
        document.getElementById("calcText").value = displayNum;
    }

}

//run calculator
function calculate() {
    var total;
    if (operand != "" && num1 != "" && num2 != "") {
        switch (operand) {
            case '+':
                total = Number(num1) + Number(num2);
                break;
            case '-':
                total = Number(num1) - Number(num2);
                break;
            case '*':
                total = Number(num1) * Number(num2);
                break;
            case '/':
                total = Number(num1) / Number(num2);
                break;
        }
        console.log(total);

        //display
        document.getElementById("calcText").value = total;
    }
    //reset math numbers
    numCnt = 0;
    displayNum = "";
    num1 = "";
    num2 = "";
    operand = "";


}