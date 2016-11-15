import * as graphs from '../src/graphs.js';

describe('graph problems', () => {
    let directedEdges = [{ from: 'a', to: 'e' },
    { from: 'e', to: 'a' },
    { from: 'a', to: 'c' },
    { from: 'a', to: 'd' },
    { from: 'b', to: 'a' },
    { from: 'c', to: 'd' },
    { from: 'd', to: 'b' }
    ];
    const distances = [{ value: 1, exists: true },
    { value: 2, exists: true },
    { value: 3, exists: true },
    { value: 4, exists: true },
    { value: 5, exists: true },
    { value: 6, exists: false },
    { value: 7, exists: true },
    { value: 8, exists: false }];

    distances.forEach(d => {
        it('checks for correct distance between a and d: ' + d.value, () => {
            const result = graphs.doesPathExist(directedEdges, d.value, {from:'a', to:'d'});
            expect(result).toEqual(d.exists);
        });
    });

    it('converts to adjacency list', () => {
        directedEdges = [{ from: 'a', to: 'e' }
            , { from: 'a', to: 'c' }
            , { from: 'a', to: 'd' }
            , { from: 'b', to: 'a' }
            , { from: 'c', to: 'e' }
        ];

        let actual = graphs.toAdjacencyList(directedEdges);

        expect(actual).toEqual({
            a: ['e', 'c', 'd']
            , b: ['a']
            , c: ['e']
        });
    });
});