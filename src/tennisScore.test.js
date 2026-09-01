import Tennis from "./tennis.js";

describe("Tennis Score", () => {
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
});




