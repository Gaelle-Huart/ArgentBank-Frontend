import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import SignIn from './pages/SignIn.jsx';
import User from './pages/User.jsx';
import Error from './pages/Error.jsx';


function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/user" element={<User />} />
          <Route path="/*" element={<Error />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App;