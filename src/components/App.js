import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const contacts = [
    {
      id: 1,
      name: "contact1",
      email: "contact1@example.com",
    },
    {
      id: 2,
      name: "contact2",
      email: "contact2@example.com",
    },
    {
      id: 3,
      name: "contact3",
      email: "contact3@example.com",
    },
    {
      id: 4,
      name: "contact4",
      email: "contact4@example.com",
    },
  ];

  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
