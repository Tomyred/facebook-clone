import { Fragment } from 'react';
import './App.css';
import Feed from './Components/Feed/Feed';
import Header from './Components/header/Header';
import Login from './Components/Login/Login';
import Sidebar from './Components/Sidebar/Sidebar';
import Widgets from './Components/Widgets/Widgets';
import { useStateValue } from './StateProvider';


function App() {
  const [{ user }] = useStateValue();
   
  return (
    // BEN naming convention - npm install firebase - npm install -g firebase-tools
    <div className="app">
      {!user ? (<Login/>) : (
        <Fragment>
          <Header/>
      <div className="app__body">
        <Sidebar/>
        <Feed/>
      <Widgets/>
      </div>
        </Fragment>
      )}
      
      

    </div>
  );
}

export default App;


