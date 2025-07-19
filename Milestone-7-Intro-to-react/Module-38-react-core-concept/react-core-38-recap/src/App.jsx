import reactLogo from "./assets/react.svg";

import Welcome from "./38-recap";

import "./App.css";

function App() {
  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <Welcome />

      <Devoloper name="Rofiq" tech="Java" />
      <Devoloper name="Salam" tech ="Python" />

      <Person></Person>
    </>
  );
}

export default App;

function Devoloper(props) {


  return (
    <>
      <div className="devStyle">
        <h3>Dev Details</h3>
        <h4>Name: {props.name} </h4>
        <h4>Tech: {props.tech} </h4>
      </div>
    </>
  );
}

function Person() {
  const personName = "Riad";

  const personStyle = {
    color: "blue",
    borderRadius: "10px",
    border: "3px solid green",
    padding: "20px",
    marginBottom: "10px",
  };
  return (

    <div style={personStyle}>
      <p >Hi my name is : {personName}</p>

      <p style={{
        color: 'red',
        fontSize: '30px'
      }}>hey there </p>
    </div>
  );
}



