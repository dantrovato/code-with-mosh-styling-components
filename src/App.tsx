import ListGroup from "./components/ListGroup";
// import "bootstrap/dist/css/bootstrap.css";
const countries = ["Japan", "Brazil", "Costa Rica"];
const App = () => {
  return (
    <div>
      <ListGroup countries={countries} />
    </div>
  );
};

export default App;
