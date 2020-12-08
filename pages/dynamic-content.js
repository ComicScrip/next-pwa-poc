import { Container } from '../components/Container';
import axios from 'axios';
import { useState } from 'react';

const getContacts = async () =>
  (await axios.get('https://contacts-api.comicscrip.duckdns.org/contacts'))
    .data;

export default function ContactList({ initialContactList = [] }) {
  const [contacts, setContacts] = useState(initialContactList);
  const handleReload = () => getContacts().then(setContacts);

  return (
    <Container>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>{contact.name}</li>
        ))}
      </ul>
      <button onClick={handleReload}>Reload</button>
    </Container>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      initialContactList: await getContacts(),
    },
  };
}
