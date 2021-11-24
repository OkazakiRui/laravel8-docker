import { VFC } from 'react';
import axios from 'axios';

const Home: VFC = () => {
  axios.get('http://127.0.0.1:8000/api/todos').then((res) => console.log(res));
  return (
    <>
      <h2>home</h2>
      <p>home des</p>
    </>
  );
};
export default Home;
