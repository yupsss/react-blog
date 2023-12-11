import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Switch , Route} from 'react-router-dom';
import Create from './Create';
import Blogdetails from './Blogdetail';
import Notfound from './Notfound';
import { useState } from 'react';

function App() {


  const [flag, setFlag] = useState(false);

  function oncall() {
    console.log("hello");
    setFlag(true);
  }
 

  return (
    <Router>
      <div className="App">

        <Navbar/>

        <div className="container-main">
          <div className="content">
            <div className="content-child">
              <Switch>
                <Route exact path = "/">
                  <Home/> 
                </Route>
                <Route path = "/create">
                  <Create/>
                </Route>
                <Route path="/blogs/:id">
                    <Home props={oncall}/>
                </Route>
                <Route path = "*">
                  <Notfound />
                </Route>
              </Switch>
            </div>
          </div>
          {flag && <div className="display">
            <div className="display-child">
              <Switch>
              <Route exact path = "/">
                  <Notfound/> 
                </Route>
                <Route path = "/create">
                  <Create/>
                </Route>
                <Route path="/blogs/:id">
                    <Blogdetails />
                </Route>
                <Route path = "*">
                  <Notfound />
                </Route>
              </Switch>
            </div>
          </div>
        }
        </div>
          
      </div>
    </Router>
  );
}

export default App;
