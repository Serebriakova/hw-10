let num1 = prompt("Введите первое число");
let num2 = prompt("Введите второе число");
let num3 = prompt("Введите третье число");

if ((num1 === null) || (num2 === null) || (num3 === null)) {
    alert("Вы отменили");
} else if ((num1.trim() === "") || (num2.trim() === "") || (num3.trim() === "")) {
    alert("Вы не ввели число");
    } else if ((+num1 > +num2) && (+num1 > +num3)) {
        alert(`Первое число ${num1} самое большое`);
    } else if ((+num2 > +num1) && (+num2 > +num3)) {
        alert(`Второе число ${num2} самое большое`);
    } else if ((+num3 > +num1) && (+num3 > +num2)) {
        alert(`Третье число ${num3} самое большое`);
    } else if ((+num1 === +num2) && (+num2 === +num3)) {
        alert("Вы ввели одинаковые числа");
} else  {
    alert("Вы ввели не число");
}

