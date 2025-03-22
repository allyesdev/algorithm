function countCompleteComponents(n: number, edges: number[][]): number {
  const edgeNeighbors: number[][] = Array(n)
    .fill(null)
    .map(() => []);
  const visited = Array(n).fill(false);
  edges.forEach((edge) => {
    edgeNeighbors[edge[0]].push(edge[1]);
    edgeNeighbors[edge[1]].push(edge[0]);
  });

  const bfs = (node: number) => {
    const queue: number[] = [node];
    visited[node] = true;
    const graph: number[] = [];
    while (!!queue.length) {
      const current = queue.shift();
      graph.push(current!);
      edgeNeighbors[current!].forEach((neighbor: number) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    return graph;
  };

  let completeGraphCount = 0;
  console.log(edgeNeighbors);
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      const graph = bfs(i);
      const hasSameNeighborSize = (node: number) =>
        edgeNeighbors[node].length === graph.length - 1;
      if (
        edgeNeighbors[i].every(hasSameNeighborSize) &&
        hasSameNeighborSize(i)
      ) {
        completeGraphCount++;
      }
    }
  }

  return completeGraphCount;
}

console.log(
  countCompleteComponents(3, [
    [1, 0],
    [2, 1],
  ])
);
