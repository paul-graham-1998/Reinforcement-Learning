function randomInteger(lower, upper) { //This function is end-exclusive
    let random_int = Math.floor(Math.random() * (upper - lower)) + lower;
    return random_int;
}
class randomOpponent {
    
  constructor(squares) {
    this.squares = squares;
  }

  getName() {
    let Name = "Random Move Opponent";
    return Name;
  }

  getDescription() {
    let description = "This opponent will make a random move from the remaining available squares";
    return description;
  }

  playOpponent() {
    let openSquares = [];
    for (let i = 0; i < 9; i++) {
      if (!this.squares[i]){
        openSquares.push(i);
      }
    }
    let moveIndex = randomInteger(0,openSquares.length);
    let move = openSquares[moveIndex];
    return move;
  }
}
// eslint-disable-next-line
class fixedOpponent {
    
  constructor(squares) {
    this.squares = squares;
  }

  getName() {
    let name = "Fixed Move Opponent";
    return name;
  }

  getDescription() {
    let description = "This opponent has a fixed square selection order and will select the first that is available";
    return description;
  }

  fixedOpponent() {
    for (let move = 0; move < 9; move++) {
      if (!this.squares[move]){
        return move;
      }
    }
  }
}
