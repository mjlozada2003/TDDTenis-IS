import Tennis from "./tennis.js";

describe("Tennis Score", () => {
    it ("Debería mostrar el inicio del Score", () => {
        let tennis = new Tennis();
        expect(tennis.getScore()).toEqual("Love - Love");
    });
});




