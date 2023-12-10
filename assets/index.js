

//1. Створити функцію, яка може приймати необмежену кількість вхідних значень, та буде повертати кількість рядків, які будуть серед переданих даних. При рішенні використати стрілочні функції.

//1варіант. (для себе)
function numberRows(...value) {
  const strings = value.filter(function (element) {
    return typeof element === "string";
  });
  return strings.length;
}

console.log(numberRows(8, 7, "jhghg"));

//2 варіант. (для себе)
const numberRowsArr = (...value) => {
  const string = value.filter((element) => typeof element === "string").length;
  return string;
};
console.log(numberRowsArr(8, 7, "jhghg", "hgj"));

//3 варіант.
const numberRowsArr2 = (...value) =>
  value.filter((element) => typeof element === "string").length;

console.log(numberRowsArr2(8, 7, "jhghg", true, NaN));



// Маючи масив з числами, отримайте найбільше число серед них. При рішенні не користуватися циклами або методами перебору масиву.

const arr = [10, 5, 8, 20, 3];

const maxValue = Math.max(...arr);

console.log(`maxValue from ${arr} - `, maxValue);

// Створити функцію просунутого калькулятора. Функція приймає спочатку знак, а потім необмежену кількість чисел, над якими буде виконана вказана операція.

function calc(sing, ...num) {
  let result = 0;

  switch (sing) {
    case "+":
      result = num.reduce((acc, value) => acc + value);
      return result;
    case "-":
      result = num.reduce((acc, value) => acc - value);
      return result;
    case "*":
      result = num.reduce((acc, value) => acc * value);
      return result;
    case "/":
      result = num.reduce((acc, value) => acc / value);
      return result;
    default:
      throw new Error(`unknown symbol, please use +,-,*,/`);
      
  }
}
console.log(`9+2=`, calc("+", 9, 2));
console.log(`9-2=`, calc("-", 9, 2));
console.log(`9*2=`, calc("*", 9, 2));
console.log(`9/2=`, calc("/", 9, 2));
calc("?", 9, 2);
