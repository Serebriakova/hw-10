let number = +prompt("Введите целое число");

if (Number.isInteger(number)) {
    const sign = Math.sign(number);
    number = String(number);
    const length = number.length;
    if ((sign === 0) || (sign === -0)) {
        alert("Ноль вводить нельзя");
    } else if ((sign === 1) && (length === 1)) {
        alert("Число " + number + " однозначное положительное.");
    } else if ((sign === 1) && (length === 2)) {
        alert("Число " + number + " двузначное положительное.");
    } else if ((sign === 1) && (length === 3)) {
        alert("Число " + number + " трехзначное положительное."); 
    } else if ((sign === 1) && (length > 3)) {
        alert("Число " + number + " многозначное положительное."); 
    } else if ((sign === -1) && ((length - 1) === 1)) {
        alert("Число " + number + " однозначное отрицательное.");
    } else if ((sign === -1) && ((length - 1) === 2)) {
        alert("Число " + number + " двузначное отрицательное.");
    } else if ((sign === -1) && ((length - 1) === 3)) {
        alert("Число " + number + " трехзначное отрицательное.");
    } else if ((sign === -1) && ((length - 1) > 3)) {
        alert("Число " + number + " многозначное отрицательное.");
    }
} else {
    alert("Вы ввели не то, что нужно");
}