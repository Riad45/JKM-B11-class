import reactLogo from "./assets/react.svg";

import Welcome from "./38-recap";
import BuyFood from "./buyFood";
import ToDo from "./ToDo";

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

      <Student name="Riad" id="911" cgpa="3.72"></Student>
      <Student name="Prokash" id="911" cgpa="3.92"></Student>
      <Student name="Hasan" id="911" cgpa="3.67"></Student>

      <BuyFood foodName="Burger" price={150}></BuyFood>
      <BuyFood foodName="Pizza" price={350}></BuyFood>
      <BuyFood foodName="Fuchka" price={60}></BuyFood>

      <ToDo task="Shower" isDone={true} time={20}></ToDo>
      <ToDo task="Dinner" isDone={false} ></ToDo>
      <ToDo task="Web Course" isDone={true} time={120}></ToDo>
  
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
 function Student ({name,id,cgpa}){

  return(
    <div className="devStyle">

      <h3>Student Details: </h3>
      <p>Student Name: {name}</p>
      <p>Student ID: {id}</p>
      <p>CGPA: {cgpa}</p>


    </div>
  )
 }


