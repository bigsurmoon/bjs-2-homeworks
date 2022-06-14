"use strict";

function solveEquation(a, b, c) {
  let arr;
  let D = Math.pow(b, 2) - 4 * a * c;
  if (a == 0) {
    return false;
  }
  if (D < 0) {
    let tmp = [];
    tmp.push();
    arr = tmp;
  }
  if (D == 0) {
    let tmp = [];
    tmp.push(-b / (2 * a));
    arr = tmp;
  }
  if (D > 0) {
    let tmp = [];
    tmp.push((-b + Math.sqrt(D)) / (2 * a));
    tmp.push((-b - Math.sqrt(D)) / (2 * a));
    arr = tmp;
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
	"use strict";
  let totalAmount;
	let perc = Number(percent);
	if (Number.isNaN(perc)) {
		return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
	}
	let initial = Number(contribution);
	if (Number.isNaN(initial)) {
		return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
	}
	let loan = Number(amount);
	if (Number.isNaN(loan)) {
		return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
	}
	
	let S = loan - initial;
	let n = Math.trunc((date - Date.now())/(30*24*60*60*1000));
	let P = perc / 12 / 100;
	let everyMonth = S * (P + (P / (((1 + P) ** n) - 1)));
	totalAmount = Number((everyMonth * n).toFixed(2));
	console.log(totalAmount);

  return totalAmount;
}