import { mellon } from "./mellon";

describe("mellon", () => {
    test('genres: ["classic", "pop", "classic", "classic", "pop"], plays: [500, 600, 150, 800, 2500]', () => {
        const genres = ["classic", "pop", "classic", "classic", "pop"];
        const plays = [500, 600, 150, 800, 2500];

        expect(mellon(genres, plays)).toEqual([4, 1, 3, 0]);
    });
});
