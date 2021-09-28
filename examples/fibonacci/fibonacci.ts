export function fibonacci(number: number): number {
    if (number === 1 || number === 2) {
        return 1;
    }

    return fibonacci(number - 1) + fibonacci(number - 2);
}

type Memo = {
    [key: number]: number;
};

export function fibonacciMemoization(number: number, memo: Memo): number {
    if (memo[number]) {
        return memo[number];
    }

    const fibo =
        fibonacciMemoization(number - 1, memo) +
        fibonacciMemoization(number - 2, memo);

    memo[number] = fibo;

    return fibo;
}
