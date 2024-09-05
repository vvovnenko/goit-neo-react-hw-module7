import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "./redux/contactsOps.js";
import { selectError, selectLoading } from "./redux/contactsSlice.js";

function App() {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1>Phone book</h1>
      <ContactForm />
      <SearchBox />
      {loading && (
        <div>
          <b>Request in progress...</b>
        </div>
      )}
      {error && <div>`Error: ${error} `</div>}
      <ContactList />
    </>
  );
}

export default App;
