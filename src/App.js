import Card from "./components/Card";
import Chart from "./components/Chart";
import Header from "./components/Header";

function App() {
  return (
    <div className="w-[90%] mx-auto">
      <Header />
      <div className="w-full flex justify-between">
        <Card
          bgColor="rgb(176, 215, 253)"
          border="10px solid rgb(87, 107, 254)"
          title="Infected"
          value="1"
        />
        <Card
          bgColor="rgb(221, 246, 226)"
          border="10px solid rgb(110, 250, 112)"
          title="Recovered"
          value="3"
        />
        <Card
          bgColor="rgb(244, 214, 214)"
          border="10px solid rgb(249, 106, 106)"
          title="Deaths"
          value="0"
        />
        <Card
          bgColor="rgb(244, 225, 201)"
          border="10px solid rgb(242, 229, 100)"
          title="Active"
          value="2"
        />
      </div>
      <Chart />
    </div>
  );
}

export default App;
