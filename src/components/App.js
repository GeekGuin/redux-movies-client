import React, { Component } from 'react';
import MoviesHome from '../containers/movies_home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SearchBar from '../containers/search_bar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <SearchBar />
            <Switch>
              <Route path="/" component={MoviesHome} />
              {/* <Route path="/posts/new" component={PostsNew} /> */}
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
