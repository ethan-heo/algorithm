function upperTolower(new_id: string) {
    return new_id.toLowerCase();
}

function filterChar(new_id: string) {
    return new_id.replace(/([^a-z0-9-_\.])/g, "");
}

function replaceChar(new_id: string) {
    return new_id.replace(/[.]{2,}/g, ".");
}

function removeFirstLastDot(new_id: string) {
    return new_id.replace(/(^\.)|(\.$)/g, "");
}

function replaceSpace(new_id: string) {
    return new_id.length === 0 ? "a" : new_id;
}

function sliceStr(new_id: string) {
    return new_id.length > 15 ? new_id.substring(0, 15) : new_id;
}

function padStr(new_id: string) {
    return new_id.length < 3
        ? new_id.padEnd(3, new_id[new_id.length - 1] || " ")
        : new_id;
}

export default function 신규_아이디_추천(new_id: string) {
    return [
        upperTolower,
        filterChar,
        replaceChar,
        removeFirstLastDot,
        replaceSpace,
        sliceStr,
        removeFirstLastDot,
        padStr,
    ].reduce((acc, fn) => fn(acc), new_id);
}
