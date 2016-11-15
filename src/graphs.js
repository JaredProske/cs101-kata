
export function doesPathExist(directedEdges, distance, path) {

    if (directedEdges.length < distance || distance == 0) {
        return false;
    }

    let nextEdges = directedEdges.filter(de => de.from === path.from);

    if (distance === 1) {
        return nextEdges.some(e => e.to === path.to);
    }
    for (var i = 0; i < nextEdges.length; i++) {
        let next = nextEdges[i];
       
        const remainingEdges = directedEdges
            .map(de => Object.assign({}, de));

        const indexToRemove = remainingEdges
            .findIndex(e => e.from === next.from && e.to === next.to);

        remainingEdges.splice(indexToRemove, 1);

        const nextPath = { from: next.to, to: path.to };
        if (doesPathExist(remainingEdges, distance - 1, nextPath)) {
            return true;
        }
    }
}


export function toAdjacencyList(directedEdges) {
    const adjacencyList = {};

    directedEdges.forEach(de => {
        let node = adjacencyList[de.from];
        if (node === undefined || node === null) {
            adjacencyList[de.from] = [de.to];
        }
        else {
            adjacencyList[de.from].push(de.to);
        }
    });
    return adjacencyList;
}