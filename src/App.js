import "./App.css";
import InvoicesListContainer from "./components/InvoicesList/InvoicesListContainer";

function App() {
  return (
    <div className="App">
      <h1>Invoices</h1>
      <section className="action_bar">
        <h2>Actions</h2>
        <button id="add_new_button">Add new</button>
      </section>
      <InvoicesListContainer />
    </div>
  );
}

export default App;
