import Tennis from "./tennis.js";

describe("Tennis Score", () => {
    it ("Debería mostrar el inicio del Score", () => {
        let tennis = new Tennis();
        expect(tennis.getScore(0, 0)).toEqual("Love - Love");
    });
    it ("Debería mostrar el marcador cuando el jugador 1 marca", () => {
        let tennis = new Tennis();
        expect(tennis.getScore(1, 0)).toEqual("15 - Love");
    });
});




