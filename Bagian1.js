// Bagian 1
// No 1

let arr1 = [1, 2, 3];
let arr2 = [x, y, z];
console.log(arr1.concat(arr2));

// No. 2

//No. 3

//No. 4

//No. 5

function mapArr(arrObj) {
  let newArr;
  for (let obj in arrObj) {
    obj.customer = `${obj.code} - ${obj.name}`;
    newArr.push(obj);
  }
  return newArr;
}
