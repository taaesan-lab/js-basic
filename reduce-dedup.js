
// const dedup = function(items){
//     return items.reduce((prev, curr, index) => {
//         if(prev.includes(curr)){
//             return prev;
//         }else{
//             return prev.concat(curr);
//         }
//     }, []);

// }
// let items = dedup([1,3,3,5,]);
// console.log(items);
// let sortedItems = items.sort((a,b)=> b-a);
// console.log(sortedItems);
nums = [3,2,2,5,5,7];
let uniqueNums = nums.reduce((p,c) => p.includes(c)? p : p.concat(c),[]);
let sortedNums = uniqueNums.sort((a,b)=> b-a);
console.log(sortedNums[1]);