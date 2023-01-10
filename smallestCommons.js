function* findMultiples(num) {
    for (let i = 1; ; i++) {
        yield num * i;
    }
}

function* findCommon(arr) {
    let [start, end] = arr;

    for (let endMultiple of findMultiples(end)) {
        for (let startMultiple of findMultiples(start)) {
            if (startMultiple == endMultiple) {
                yield endMultiple;
            } else if (startMultiple > endMultiple) break;
        }
    }
}

function divisibleByRange(start, end, commonMultiple) {
    for (let i = start + 1; i < end; i++) {
        if (commonMultiple % i !== 0) return false;
    }
    return true;
}

function smallestCommons(arr) {
    let [start, end] = arr.sort((a, b) => a - b);

    for (let common of findCommon([start, end])) {
        if (divisibleByRange(start, end, common)) {
            return common;
        }
    }
}

console.log(smallestCommons([1, 13]));
