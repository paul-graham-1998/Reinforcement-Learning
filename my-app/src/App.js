import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/pages/Header';
import TicTacToe from './components/pages/TicTacToe'
import Home from './components/pages/Home'
import Game from './components/tictactoe/Game'
import opponentSelect from './components/tictactoe/opponentSelect'
import './App.css';

class App extends Component {

	render() {
    return  (
      <Router>
        <div className="App">
          <div className='container'>
            <Header />
            <Route exact path='/'
              component={Home}
            />
            <Route path='/tictactoe' 
              render={(props) => (
                <React.Fragment>
                  <TicTacToe />
                  <opponentSelect />
                  <Game />
                </React.Fragment>
              )}
            />
          </div>
        </div>
      </Router>
		);
	}
}

export default App;