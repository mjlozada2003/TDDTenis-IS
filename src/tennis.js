class Tennis {
        getScorePlayer(puntos){
        if(puntos === 0)return "Love";
        if(puntos === 1)return "15";
        if(puntos === 2)return "30";
    };
    getScore(player1Score, player2Score) {
        return this.getScorePlayer(player1Score) + " - " + this.getScorePlayer(player2Score)
    };
}


export default Tennis;