function totalPrice(price, discount, amount, ship) {
  for (var i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] !== "number") {
      return "숫자를 입력해주세요.";
    }
  }

  if (discount > 1 || discount < 0) {
    return "할인율은 0 이상 1 이하입니다."
  }

  return price * (1 - discount) * amount + ship;
}


console.log(totalPrice(500000, 0.3, 10, 5000));

console.log(totalPrice(100300, 0.3, 12, 1000));
