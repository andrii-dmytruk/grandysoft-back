function swap(arr, xp, yp){
  const temp = arr[xp];
  arr[xp] = arr[yp];
  arr[yp] = temp;
}

function bubbleSort(arr, n, k){
  let i, j;
  for (i = 0; i < k; i++) {
    for (j = 0; j < n - i - 1; j++) {
      const length1 = arr[j].following.length;
      const length2 = arr[j + 1].following.length;
      if (length1 > length2) {
        swap(arr, j, j + 1);
      }
    }
  }

  return arr;
}

export function getTopFollowing(users, k = 5) {
  return bubbleSort(users, users.length, k).slice(-k).reverse();
}
