import Tennis from "./tennis.js";

describe("Tennis Score", () => {
    //test player 1
    it ("Debería mostrar el inicio del Score", () => {
        let tennis = new Tennis();
        expect(tennis.getScore(0, 0)).toEqual("Love - Love");
    });
    it ("Debería mostrar el marcador cuando el jugador 1 marca 1 vez", () => {
        let tennis = new Tennis();
        expect(tennis.getScore(1, 0)).toEqual("15 - Love");
    });
    it ("Debería mostrar el marcador cuando el jugador 1 marca 2 veces", () => {
        let tennis = new Tennis();
        expect(tennis.getScore(2, 0)).toEqual("30 - Love");
    });
    it ("Debería mostrar el marcador cuando el jugador 1 marca 3 veces", () => {
        let tennis = new Tennis();
        expect(tennis.getScore(3, 0)).toEqual("40 - Love");
    });
    it ("Debería mostrar el ganador cuando el jugador 1 marca 4 veces", () => {
        let tennis = new Tennis();
        expect(tennis.getScore(4, 0)).toEqual("Game for player 1");
    });
    //test player 2
    it ("Debería mostrar el marcador cuando el jugador 2 marca 1 vez", () => {
        let tennis = new Tennis();
        expect(tennis.getScore(0, 1)).toEqual("Love - 15");
    });
    it ("Debería mostrar el marcador cuando el jugador 2 marca 2 veces", () => {
        let tennis = new Tennis();
        expect(tennis.getScore(0, 2)).toEqual("Love - 30");
    });
    it ("Debería mostrar el marcador cuando el jugador 2 marca 3 veces", () => {
        let tennis = new Tennis();
        expect(tennis.getScore(0, 3)).toEqual("Love - 40");
    });
    it ("Debería mostrar el ganador cuando el jugador 2 marca 4 veces", () => {
        let tennis = new Tennis();
        expect(tennis.getScore(0, 4)).toEqual("Game for player 2");
    });
    //intercalado
    it ("Debería mostrar el marcador cuando el jugador 1 marca 2 veces y el jugador 2 marca 1 vez", () => {
        let tennis = new Tennis();
        expect(tennis.getScore(2, 1)).toEqual("30 - 15");
    });
    it ("Debería mostrar el marcador cuando el jugador 1 marca 1 veces y el jugador 2 marca 2 vez", () => {
        let tennis = new Tennis();
        expect(tennis.getScore(1, 2)).toEqual("15 - 30");
    });
    it ("Debería mostrar Advantage for player 1 cuando el jugador 1 marca 4 veces y el jugador 2 marca 3 vez", () => {
        let tennis = new Tennis();
        expect(tennis.getScore(4, 3)).toEqual("Advantage player 1");
    });
    it ("Debería mostrar Advantage for player 2 cuando el jugador 1 marca 3 veces y el jugador 2 marca 4 veces", () => {
        let tennis = new Tennis();
        expect(tennis.getScore(3, 4)).toEqual("Advantage player 2");
    });
    //empate
    it ("Debería mostrar el marcador cuando estén empates por 2 puntos", () => {
        let tennis = new Tennis();
        expect(tennis.getScore(2, 2)).toEqual("30 - 30");
    });
    it ("Debería mostrar Deuce cuando el jugador 1 y el jugador 2 marca 3 veces", () => {
        let tennis = new Tennis();
        expect(tennis.getScore(3, 3)).toEqual("Deuce");
    });
});




