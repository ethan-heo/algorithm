export const sortBubble = (numbers: number[]) => {
    const len = numbers.length;

    // n ^ 2
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - i; j++) {
            if (numbers[j] > numbers[j + 1]) {
                [numbers[j], numbers[j + 1]] = [numbers[j + 1], numbers[j]];
            }
        }
    }

    return numbers;
};

// const arr = [1, 3, 5, 2, 6];

// 1. 1 > 3 , [1, 3, 5, 2, 6];
// 2. 3 > 5 , [1, 3, 5, 2, 6];
// 3. 5 > 2 , [1, 3, 2, 5, 6];
// 4. 5 > 6 , [1, 3, 2, 5, 6];

// 5. 1 > 3 , [1, 3, 2, 5, 6];
// 6. 3 > 2 , [1, 2, 3, 5, 6];
// 7. 3 > 5 , [1, 2, 3, 5, 6];

// 8. 1 > 2 , [1, 2, 3, 5, 6];
// 9. 2 > 3 , [1, 2, 3, 5, 6];

// 9. 1 > 2 , [1, 2, 3, 5, 6];
