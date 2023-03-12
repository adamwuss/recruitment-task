import "./App.css";
import { Table } from "./components/Table";
import { TotalPoints } from "./components/TotalPoints";
import transactionsData from "./consts/transactions.json";

const App = () => {
  return (
    <div className="App">
      <h1>Transactions:</h1>
      <Table transactions={transactionsData} />
      <TotalPoints transactions={transactionsData} />
    </div>
  );
};

export default App;
