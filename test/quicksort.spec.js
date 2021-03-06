// import withTestCases from './testcases.js';
import * as quicksort from '../src/quicksort.js';

describe('Quicksort', () => {
    // const testCases = [{ input: [1], expected: [2] },{ input: [1], expected: [2] } ];
    // withTestCases(testCases, (values) => {
    it('partitions [9, 7, 5, 11, 12, 2, 14, 3, 10, 4, 6]', () => {
        const array = [9, 7, 5, 11, 12, 2, 14, 3, 10, 4, 6];
        let q = quicksort.partition(array, 0, array.length - 1);

        expect(q).toEqual(4);
        expect(array).toEqual([5, 2, 3, 4, 6, 7, 14, 9, 10, 11, 12]);
    });

    it('partitions [1,3,2]', () => {
        const array = [1, 3, 2];
        var q = quicksort.partition(array, 0, array.length - 1);
        expect(q).toEqual(1);
        expect(array).toEqual([1, 2, 3]);
    });

    it('can swap', () => {
        const array = [1, 3, 2];

        quicksort.swap(array, 1, 2);
        expect(array).toEqual([1, 2, 3]);
    });

    it('sorts [9, 7, 5, 11, 12, 2, 14, 3, 10, 4, 6]', () => {
        const array = [9, 7, 5, 11, 12, 2, 14, 3, 10, 4, 6];
        const copy = array.slice();
        quicksort.sort(array);
        copy.sort((a, b) => a - b);
        expect(array).toEqual(copy);
    });
});