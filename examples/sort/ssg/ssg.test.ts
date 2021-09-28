import { ssg } from "./ssg";

describe("ssg", () => {
    test("prices: [30000, 2000, 1500000], discountRates: [20, 40]", () => {
        const prices = [30000, 2000, 1500000];
        const discountRates = [20, 40];

        expect(ssg(prices, discountRates)).toEqual(926000);
    });
});
