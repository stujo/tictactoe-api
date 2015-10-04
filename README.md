# tictactoe-api
An API to provide good moves in TicTacToe using the tictactoe-agent npm package

Here's an example of the deployed API:

[http://tttapi.herokuapp.com/api/v1/---O---X-/O](http://tttapi.herokuapp.com/api/v1/---O---X-/O)

The API requires two url path parameters :

```
                              a) 9 digit game state
                                       |
                                   VVVVVVVVV
http://tttapi.herokuapp.com/api/v1/---O---X-/O
                                             ^
                                             |
                                        b) Player
```

a) 9 digit game state each a O,X or -
  The - represent empty squares
  The digits map to the tic-tac-toe board as follows:

```
012345678
```

```
012
345
678
```

b) Player - The player whose turn it is, and for whom we want a recommendation

