const arr = [1, 2, 3, 4, 5, 6, 7];

// result [3,4,5,6,7,1,2]

function rotate(arr, rotateBy) {
  const sliceRotatBy = arr.slice(0, rotateBy);
  const sliceRestOfRotateBy = arr.slice(rotateBy, arr.length);

  const rotatedArr = [...sliceRestOfRotateBy, ...sliceRotatBy];

  console.log(rotatedArr)
}

rotate(arr,2)
