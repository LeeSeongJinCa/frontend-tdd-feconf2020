const tree = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

function solution(target) {
  let left = 0;
  let mid = ~~(tree.length / 2);
  let right = tree.length;

  while (true) {
    console.log("mid:", mid, "tree[mid]:", tree[mid]);

    if (tree[mid] === target) {
      return mid;
    }

    if (tree[mid] > target) {
      right = mid;
      mid = ~~((right + left) / 2);
    }

    if (tree[mid] < target) {
      left = mid;
      mid = ~~((right + left) / 2);
    }
  }
}

console.log("target index is", solution(11));
