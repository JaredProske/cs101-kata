export function sort(array) {

    sortSub(array, 0, array.length - 1);
}

function sortSub(array, start, end) {
    if (start < end) {

        const pivotIndex = partition(array, start, end);
        sortSub(array, start, pivotIndex - 1);
        sortSub(array, pivotIndex, end);
    }
}

export function partition(array, startIndex, endIndex) {
    const pivotValue = array[endIndex];
    let pivotIndex = startIndex;

    for (let i = pivotIndex; i < endIndex; i++) {
        if (array[i] < pivotValue) {
            swap(array, pivotIndex, i);
            pivotIndex++;
        }
    }
    swap(array, endIndex, pivotIndex);

    return pivotIndex;
}

export function swap(array, x, y) {
    const temp = array[x];

    array[x] = array[y];
    array[y] = temp;
}