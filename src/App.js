import Header from "./components/Header";

function App() {
  const data = [
    {
      name: "Name: Mark",
      surname: "Surname: Smith",
      phone: "Phone:" + 9807985544,
      car: "Car: Tesla",
      age: "Age: 22",
      height: "Height: 187",
    },
    {
      name: "Name: Gergio",
      surname: "Surname: Loser",
      phone: "Phone" + 9807985544,
      car: "Car: BMW",
      age: "Age: 44",
      height: "Height: 167",
    },
    {
      name: "Name: Elwin",
      surname: "Surname: Duck",
      phone: "Phone" + 9807985544,
      car: "Car: Tesla",
      age: "Age: 22",
      height: "Height: 174",
    },
  ];

  return (
    <div className="header">
      <Header data={data}></Header>
    </div>
  );
}

export default App;
