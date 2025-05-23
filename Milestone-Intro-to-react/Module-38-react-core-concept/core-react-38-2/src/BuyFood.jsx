export default function BuyFood({ name, price }) {
  let balance = 100;

  if (balance > price) {
    return (
      <p>
        Enjoy your {name} and your balance is {(balance = balance - price)}
      </p>
    );
  }

  return (
    <p>
      Sorry can not buy {name} you need {price - balance} taka more{" "}
    </p>
  );
}
