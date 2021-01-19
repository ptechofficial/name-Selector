var nameSelected = '';
var reply = '';
var val1 = ['A', 'I', 'J', 'Q', 'Y'];
var val2 = ['B', 'K', 'R'];
var val3 = ['C', 'G', 'L', 'S'];
var val4 = ['D', 'M', 'T'];
var val5 = ['E', 'H', 'N', 'X'];
var val6 = ['U', 'V', 'W'];
var val7 = ['O', 'Z'];
var val8 = ['F', 'P'];
var luckyNum = [10, 14, 15, 17, 19, 20, 21, 23, 27, 30, 33, 37, 39, 41, 45, 46, 50, 51, 54, 58, 61, 65, 66, 69, 70];

function checkName() {
    nameSelected = document.getElementById('inputArea').value;
    nameSelected = nameSelected.toUpperCase();
    console.log(nameSelected);

    var sumOfNumbers = 0;
    for (var i = 0; i < nameSelected.length; i++) {
        if (val1.includes(nameSelected[i])) {
            sumOfNumbers += 1;
        }
        else if (val2.includes(nameSelected[i])) {
            sumOfNumbers += 2;
        }
        else if (val3.includes(nameSelected[i])) {
            sumOfNumbers += 3;
        }
        else if (val4.includes(nameSelected[i])) {
            sumOfNumbers += 4;
        }
        else if (val5.includes(nameSelected[i])) {
            sumOfNumbers += 5;
        }
        else if (val6.includes(nameSelected[i])) {
            sumOfNumbers += 6;
        }
        else if (val7.includes(nameSelected[i])) {
            sumOfNumbers += 7;
        }
        else if (val8.includes(nameSelected[i])) {
            sumOfNumbers += 8;
        }
        else {
            sumOfNumbers += 0;
            console.log(nameSelected[i]);
        }
    }
    console.log(sumOfNumbers);

    if (luckyNum.includes(sumOfNumbers)) {
        reply = 'OK';
    }
    else {
        reply = 'Not OK';
    }

    document.getElementById('state').innerHTML = reply;
    document.getElementById('number').innerHTML = sumOfNumbers;
}
function clearArea() {
    document.getElementById('inputArea').value = null;
}