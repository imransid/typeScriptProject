import React, { Fragment } from 'react';


import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import AuthPage from './@pages/AuthPage';
import AuthWelcome from './@components/auth-welcome/AuthWelcome';

import { Provider } from "react-redux";
import store from "./@config/Store";


function App() {
  return (
<Provider store={store}>
    <BrowserRouter>
    <Fragment>
      <Switch>
      <Route exact path='/'   render={() => <AuthPage/>}  />
      <Route exact path='/welcome'render={() => <AuthWelcome/>} />
      {/* <AuthWelcome/> */}
      </Switch>
     
    </Fragment>

    </BrowserRouter>

    </Provider>
  );
}

export default App;



// import React from "react";
// import Nav from "./app/router/nav";
// import { Provider } from "react-redux";
// import store from "./app/config/store";

// function App() {
//   return (
//     <Provider store={store}>
//       <div className="App">
//         <Nav />
//       </div>
//     </Provider>
//   );
// }

// export default App;