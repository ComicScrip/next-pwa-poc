import axios from 'axios';
import { useState } from 'react';
import Layout from '../components/Layout';

const getPosts = () =>
  axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.data);

export default function ContactList({ initialContactList = [] }) {
  const [posts, setPosts] = useState(initialContactList);
  const handleReload = () => getPosts().then(setPosts);

  return (
    <Layout pageTitle="Dynamic content">
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <button type="button" onClick={handleReload}>
        Reload
      </button>
    </Layout>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      initialContactList: await getPosts(),
    },
  };
}
