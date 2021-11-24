import { Routes, Route, Link } from 'react-router-dom';
import Home from 'components/Home';
import Signup from 'components/Signup';
import Signin from 'components/Signin';
import Edit from 'components/Edit';
import NotFound from 'components/NotFound';

const App = () => {
  return (
    <>
      <header>
        <Link to="/">Home</Link> | <Link to="/signup">Signup</Link> |{' '}
        <Link to="/signin">Signin</Link> | <Link to="/edit/0">Edit</Link>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/edit/:todoId" element={<Edit />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
