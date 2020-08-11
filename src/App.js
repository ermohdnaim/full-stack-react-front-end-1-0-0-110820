import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import HeaderComponent from './components/headerComponent';
import FooterComponent from './components/footerComponent';
import ShowEmployeeComponent from './components/showEmployeeComponent';
import AddEmployeeComponent from './components/addEmployeeComponent';
import UpdateEmployeeComponent from './components/updateUserComponent';


function App() {
  return (
    <div className="App">
        <Router>
            <>
            <HeaderComponent />
              <Switch>
                <Route path="/" exact component={ShowEmployeeComponent}/>
                <Route path="/show-employees" exact component={ShowEmployeeComponent}/>
                <Route path="/add-employee" exact component={AddEmployeeComponent}/>
                <Route path="/add-employee/:id" exact component={UpdateEmployeeComponent}/>
                <Route path="/add-employee" exact component={AddEmployeeComponent}/>


              </Switch>
            <FooterComponent />
            
            </>


        </Router>
    </div>
  );
}

export default App;
