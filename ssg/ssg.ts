import { mergeSort } from "./../sort/merge/merge";
/*
    Q. 다음과 같이 숫자로 이루어진 배열이 두 개가 있다. 하나는 상품의 가격을 담은 배열이고, 하나는 쿠폰을 담은 배열이다. 쿠폰의 할인율에 
        따라 상품의 가격을 할인 받을 수 있다. 
        이 때, 최대한 할인을 많이 받는다면 얼마를 내야 하는가?
        단, 할인쿠폰은 한 제품에 한 번씩만 적용 가능하다.

*/

const asc = (a: number, b: number) => b - a;

export const ssg = (prices: number[], discountRates: number[]) => {
    const sortedPrices = prices.sort(asc);
    const sortedDiscountRates = discountRates.sort(asc);

    return sortedPrices
        .map((price, idx) =>
            sortedDiscountRates[idx]
                ? (price * (100 - sortedDiscountRates[idx])) / 100
                : price
        )
        .reduce((acc, price) => ((acc += price), acc), 0);
};
