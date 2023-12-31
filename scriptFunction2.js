            // 2
// Написать функцию, которая принимает на входе любое число (но не больше 1 000), 
// определяет, является ли оно простым, и выводит простое число или нет. 
// Если введено больше 1 000, то выводится сообщение, что данные неверны. 
// Обратите внимание на числа 0 и 1.
// ==========================================================================================
function isPrime(num) {
    if(num > 1000){
        return 'Данные неверны';
    }else if(num === 0 || num === 1){
        return 'Составное число';
    }else if(num < 0) {
        return 'Введите число больше';
    }else{
        for(let i = 2; i < num; i++){
            if(num % i === 0){
                return 'Составное число';
        }
    }
        return 'Простое число';
    }
}
console.log(isPrime(-1));
console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(5));
console.log(isPrime(8));
console.log(isPrime(11));
console.log(isPrime(1001));
// ==========================================================================================