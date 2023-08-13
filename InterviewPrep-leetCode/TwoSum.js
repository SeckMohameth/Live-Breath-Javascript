
let nums = [2, 7, 4, 8]
let target = 9

function twoSum(nums, target) {

  //array to store the pair of indexes
    let pair = []

  
   for(let i = 0; i < nums.length; i++){
       let firstPair = target - nums[i];

       if(nums.includes(firstPair)) {
        pair.append(indexOf(firstPair))
       } else {
           continue;
       }

       return pair;
   }
      
};

twoSum()