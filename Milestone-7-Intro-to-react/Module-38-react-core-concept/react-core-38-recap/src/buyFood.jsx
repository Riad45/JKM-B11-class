export default function BuyFood({ foodName, price }) {
  let pocketMoney = 200;

  if (price < pocketMoney) {
    return (
      <p style={{color: "green"}}>
        You can Buy : {foodName} and will remain : {pocketMoney - price} TAKA
      </p>
    );
  }

  return (
    <p style={{color: "red"}}>
      You can't buy : {foodName} you need : {price - pocketMoney} TAKA more
    </p>
  );
}
