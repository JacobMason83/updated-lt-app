
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Footer from './components/footer/footer';
import Dashboard from './components/hero/dashboard';
import ShowMessagesTable from './components/hero/showMessages';
import NavBar from './components/nav/nav';
import Login from './helpers/Login';


function App() {
const username = ''
  return (
  
<div className="App">
<Router>
    <NavBar/>
    <Routes>
    <Route
           path='/'
            render={routeProps => (
              <Login
                {...routeProps}
                user={username}
              />
            )}
          />
       <Route path='/dashboard' element={<Dashboard />} />
       <Route path='/showMessages' element={<ShowMessagesTable />} />
    </Routes>
  <Footer />
</Router>
</div>
  );
}

export default App;
