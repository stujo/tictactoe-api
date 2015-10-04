var TicTacToe = require('tictactoe-agent');
var express = require('express');
var app = express();


app.set('port', (process.env.PORT || 5000));


function validGame(game) {
    if (!game || game.length != 9) {
        return false;
    } else {
        for (var i = 0; i < game.length; i++) {
            var char = game.charAt(i);
            if (char != '-' && char != 'X' && char != 'O') {
                return false;
            }
        }
    }
    return true;
}

app.get('/', function(req,res){
  res.redirect('https://github.com/stujo/tictactoe-api');
});

app.get('/api/v1/:game/:player', function(req, res) {

    var game = req.params.game;
    var player = req.params.player;

    if (player != 'X' && player != 'O') {
        res.status(404).json({
            error: 'player must be X or O'
        });
    } else if (!validGame(game)) {
        res.status(404).json({
            error: 'game must be nine X,O or -'
        });
    } else {
        var model = new TicTacToe.Model(game, player);

        try {
            var summary = model.boardSummary();

            res.json({
                game: game,
                player: player,
                score: summary.score,
                recommendation: summary.recommendation.index,
                strength: summary.recommendation.score
            });
        } catch (err) {
            res.status(500).json({
                error: err.message
            });
        }
    }
});

var server = app.listen(app.get('port'), function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
