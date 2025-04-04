/**
 * 1123. Lowest Common Ancestor of Deepest Leaves
 * how to solve this problem?
 * - get all nodes' depth to find the deepest nodes
 * - get LCA
 */

/**
 * Definition for a binary tree node.
 */
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function lcaDeepestLeaves(root: TreeNode | null): TreeNode | null {
  const visitedVal = Array(1000).fill(false);
  const needVisit: TreeNode[] = [];

  let maxDepth = 0;
  const parentOfVal: Record<number, TreeNode | null> = {};
  const depthOfVal: Record<number, number> = {};
  const nodesByDepth: Record<number, TreeNode[]> = {};

  if (root) {
    needVisit.push(root);
    depthOfVal[root.val] = 0;
    parentOfVal[root.val] = null;
  }

  while (needVisit.length !== 0) {
    const currentNode = needVisit.shift();
    if (visitedVal[currentNode!.val]) {
      continue;
    }

    const currentDepth = depthOfVal[currentNode!.val];
    maxDepth = Math.max(maxDepth, currentDepth);
    visitedVal[currentNode!.val] = true;

    if (currentDepth in nodesByDepth) {
      nodesByDepth[currentDepth].push(currentNode!);
    } else {
      nodesByDepth[currentDepth] = [currentNode!];
    }

    if (currentNode?.left) {
      needVisit.push(currentNode.left);
      parentOfVal[currentNode.left.val] = currentNode;
      depthOfVal[currentNode.left.val] = currentDepth + 1;
    }
    if (currentNode?.right) {
      needVisit.push(currentNode.right);
      parentOfVal[currentNode.right.val] = currentNode;
      depthOfVal[currentNode.right.val] = currentDepth + 1;
    }
  }

  const getLCA = (_nodeA: TreeNode, _nodeB: TreeNode) => {
    let nodeA: TreeNode = { ..._nodeA };
    let nodeB: TreeNode = { ..._nodeB };
    if (depthOfVal[nodeA.val] > depthOfVal[nodeB.val]) {
      while (depthOfVal[nodeA.val] !== depthOfVal[nodeB.val]) {
        nodeA = parentOfVal[nodeA.val]!;
      }
    } else if (depthOfVal[nodeA.val] < depthOfVal[nodeB.val]) {
      while (depthOfVal[nodeA.val] !== depthOfVal[nodeB.val]) {
        nodeB = parentOfVal[nodeB.val]!;
      }
    }

    while (nodeA.val !== nodeB.val) {
      nodeA = parentOfVal[nodeA.val]!;
      nodeB = parentOfVal[nodeB.val]!;
    }
    return nodeA;
  };

  let answer = root!;
  if (maxDepth > 0) {
    const maxDepthNodes = nodesByDepth[maxDepth];
    answer = maxDepthNodes[0];
    for (const nodeA of maxDepthNodes) {
      for (const nodeB of maxDepthNodes) {
        const lca = getLCA(nodeA, nodeB);
        console.log(nodeA.val, nodeB.val, answer, lca);
        if (depthOfVal[answer.val] > depthOfVal[lca.val]) answer = lca;
      }
    }
  }

  return answer;
}

// best practice
// function lcaDeepestLeaves(root: TreeNode | null): TreeNode | null {
//   let result: TreeNode = root;
//   let max: number = 0;

//   const dfs = (node: TreeNode, count: number): number => {
//       if (!node) {
//           return count;
//       }

//       let left: number = dfs(node.left, count + 1);
//       let right: number = dfs(node.right, count + 1);

//       if (left === right && max <= left) {
//           result = node;
//           max = left;
//       }

//       return left > right ? left : right;
//   }

//   dfs(root, 0);
//   return result;
// };
