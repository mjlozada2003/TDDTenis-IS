class Tennis {
  
    getScorePlayer(puntos){
        if(puntos === 0)return "Love";
        if(puntos === 1)return "15";
        if(puntos === 2)return "30";
        if(puntos === 3)return "40";
    };
    getScore(player1Score, player2Score) {
        if(player1Score === 3 && player2Score === 3) return "Deuce";

        if(player1Score === 4) return "Game for player 1";
        if(player2Score === 4) return "Game for player 2";
       return this.getScorePlayer(player1Score) + " - " + this.getScorePlayer(player2Score)
    };
}


export default Tennis;
