import Layout from '../components/Layout';
import axios from 'axios';
import { useState } from 'react';

const getContacts = () =>
  axios
    .get('https://contacts-api.comicscrip.duckdns.org/contacts')
    .then((res) => res.data);

export default function ContactList({ initialContactList = [] }) {
  const [contacts, setContacts] = useState(initialContactList);
  const handleReload = () => getContacts().then(setContacts);

  return (
    <Layout pageTitle='Dynamic content'>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>{contact.name}</li>
        ))}
      </ul>
      <button onClick={handleReload}>Reload</button>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      initialContactList: await getContacts(),
    },
  };
}
