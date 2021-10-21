const num = prompt("Введите число, пожалуйста");
 
if (num === null) {
    alert("Вы отменили");
} else if (num.trim() === "") {
    alert("Пустая строка");
} else if (isNaN( +num )) {
    alert("Вы ввели не число");
} else if (+num === 0) {
    alert("Ноль не бывает четным или нечетным");
} else if (num % 2 === 0) {
    alert("Число " + num + " четное");
} else if (num % 2 === 1){
    alert("Число " + num + " нечетное");
} else alert("Ошибка!");
