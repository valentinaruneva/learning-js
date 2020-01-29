// let age = 14;

// if (age > 10 && age < 15) {
//   console.log('Возраст от 10 до 15 лет');
// }if (age > 10 && age < 15) {
//   console.log('Возраст от 10 до 15 лет');
// } else {
//   console.log('Фиг пойми какой возраст');
// }

let b = 'catt'
let a = (b === 'cat' && !'dog');

function c() {
  if ((b === 'cat') === true) {
    if (!'dog' === true) {
      return 'dog';
    } else {
      console.log('второе условие false');
      return false;
    }
  } else {
    console.log('первое условие false');
    return false;
  }
}

let g = c();


console.log(b === 'cat')
console.log(b === 'dog')
console.log(a)
console.log(g)

// let b = null;
// console.log(!!b);