export default function Mobile({ phone }) {
  return (
    <div className="phone">
      <h3>
        Mobile phone name : {phone.name} Brand : {phone.brand}
      </h3>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between"
        }}
      >
        {" "}
        <p>Color: {phone.color} </p>
        <p>price: {phone.price}</p>
      </div>
    </div>
  );
}
