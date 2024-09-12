//hashing using map which is optimizd approach than using arrays

const hashMap = (arr, target) => {
    const map = new Map();

    arr.forEach(num => {
        map.set(num,( map.get(num)||0) + 1)
    });

    target.forEach(t => {
        console.log(map.get(t) || 0)
    })
}

const arr = [1,2,3,1,1,2,5];
const target = [1,2,5,4];
hashMap(arr,target);