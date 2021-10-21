let sideA = prompt("Введите длину стороны А треугольника");
let sideB = prompt("Введите длину стороны B треугольника");
let sideC = prompt("Введите длину стороны C треугольника");

if ((sideA === null) || (sideB === null) || (sideC === null)) {
    alert("Вы отменили");
    } else if ((sideA.trim() === "") || (sideB.trim() === "") || (sideC.trim() === "")) {
    alert("Вы не ввели число");
    } else if ((isNaN(+sideA)) || (isNaN(+sideA)) || (isNaN(+sideA))) {
        alert("Вы ввели не число");
    } else if ((Math.sign(+sideA) === 1) && (Math.sign(+sideB) === 1) && (Math.sign(+sideC) === 1)) {
        if ( ((Number(sideA) + Number(sideB)) > Number(sideC)) || (((Number(sideA) + Number(sideC)) > Number(sideB)) || ((Number(sideB) + Number(sideC)) > Number(sideA)))) {
           alert("Такой треугольник может существовать");
        } else {
    alert("Такой треугольник не может существовать");
    }
} else {
    alert("Вы ошиблись с данными")
}
