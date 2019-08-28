import React from 'react';
import HeaderBar from './components/navbar'
import {BrowserRouter, Route} from 'react-router-dom';
import SearchPage from './pages/Search-page';
import SavedPage from './pages/Saved-page';


function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <HeaderBar />
        <Route exact path='/' component={SearchPage} />
        <Route path='/saved' component={SavedPage} />


      </div>
    </BrowserRouter>
  );
}

export default App;
