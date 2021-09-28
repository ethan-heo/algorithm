type Graph = {
    [key: number]: number[];
};

export function dfsRecursion(graph: Graph, visited: number[], node: number) {
    visited.push(node);

    for (const adjacentNode of graph[node]) {
        if (!visited.some((visitedNode) => visitedNode === adjacentNode)) {
            dfsRecursion(graph, visited, adjacentNode);
        }
    }

    return visited;
}

export function dfsStack(graph: Graph, node: number) {
    const stack: number[] = [node];
    const visited: number[] = [];

    while (!!stack.length) {
        const currentNode = stack.pop();

        visited.push(currentNode as number);

        for (const adjacentNode of graph[currentNode as number]) {
            if (!visited.some((visitedNode) => visitedNode === adjacentNode)) {
                stack.push(adjacentNode);
            }
        }
    }

    return visited;
}
