$(document).ready(function () {

    var xTurn = 1;
    var allowMove = true;
    var boxes = $("#game-table tr td");
    var playerOneText = $("#player1");
    var playerTwoText = $("#player2");
    var winner = $("#winner");
    var newGame = $("#restart-game");

    boxes.click(function () {
        if ($(this).text() == "" && allowMove) {
            if ((xTurn % 2) == 1) {
                $(this).append("X");
                playerOneText.hide();
                playerTwoText.show();
            }
            else {
                $(this).append("O");
                playerTwoText.hide();
                playerOneText.show();
            }

            xTurn++;

            if (calculateWinner() != null && calculateWinner() != "") {
                if (calculateWinner() == "X") {
                    playerOneText.hide();
                    playerTwoText.hide();
                    winner.append("Player 1 wins!");
                    newGame.text("");
                    newGame.append("New game?");
                }
                else {
                    playerOneText.hide();
                    playerTwoText.hide();
                    winner.append("Player 2 wins!");
                    newGame.text("");
                    newGame.append("New game?");
                }
                allowMove = false;
            }
        }
    });

    function calculateWinner() {

        var tr1td1 = $("#game-table tr:nth-child(1) td:nth-child(1)").text();
        var tr1td2 = $("#game-table tr:nth-child(1) td:nth-child(2)").text();
        var tr1td3 = $("#game-table tr:nth-child(1) td:nth-child(3)").text();
        var tr2td1 = $("#game-table tr:nth-child(2) td:nth-child(1)").text();
        var tr2td2 = $("#game-table tr:nth-child(2) td:nth-child(2)").text();
        var tr2td3 = $("#game-table tr:nth-child(2) td:nth-child(3)").text();
        var tr3td1 = $("#game-table tr:nth-child(3) td:nth-child(1)").text();
        var tr3td2 = $("#game-table tr:nth-child(3) td:nth-child(2)").text();
        var tr3td3 = $("#game-table tr:nth-child(3) td:nth-child(3)").text();

        if ((tr1td1 == tr1td2) && (tr1td2 == tr1td3)) {
            return tr1td3;
        }

        if ((tr2td1 == tr2td2) && (tr2td2 == tr2td3)) {
            return tr2td3;
        }

        if ((tr3td1 == tr3td2) && (tr3td2 == tr3td3)) {
            return tr3td3;
        }

        if ((tr1td1 == tr2td1) && (tr2td1 == tr3td1)) {
            return tr3td1;
        }

        if ((tr1td2 == tr2td2) && (tr2td2 == tr3td2)) {
            return tr3td2;
        }

        if ((tr1td3 == tr2td3) && (tr2td3 == tr3td3)) {
            return tr3td3;
        }

        if ((tr1td1 == tr2td2) && (tr2td2 == tr3td3)) {
            return tr3td3;
        }

        if ((tr1td3 == tr2td2) && (tr2td2 == tr3td1)) {
            return tr3td1;
        }

        else {
        return null;
        }
    }
});