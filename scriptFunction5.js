            //5
// Напишите функцию, которая принимает два натуральных числа X и N и возвращает X в степени N. 
// Иначе говоря, умножает X на себя N раз и возвращает результат.
// Используйте Arrow Function синтаксис.
// ==========================================================================================
const exponentiate = (x, n) => {
    const sumNum = x ** n
    console.log(sumNum);
}
exponentiate(6, 8);
exponentiate(2, 2);
exponentiate(3, 8);
exponentiate(0, 1);
exponentiate(1, 0);
// ==========================================================================================