type Graph = {
    [key: number]: number[];
};

export function bfsStack(graph: Graph, node: number) {
    const stack: number[] = [node];
    const visited: number[] = [];

    while (!!stack.length) {
        const currentNode = stack.shift();

        visited.push(currentNode as number);

        for (const adjacentNode of graph[currentNode as number]) {
            if (!visited.some((visitedNode) => visitedNode === adjacentNode)) {
                stack.push(adjacentNode);
            }
        }
    }

    return visited;
}
