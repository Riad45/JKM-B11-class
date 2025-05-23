export default function BuyFood({ name, price }) {
  let balance = 100;

  if (balance > price) {
    return (
      <p className="priceStyle">
        Enjoy your {name} and your balance is {(balance = balance - price)}
      </p>
    );
  }

  return (
    <p className="priceStyle">
      Sorry can not buy {name} you need {price - balance} taka more{" "}
    </p>
  );
}
