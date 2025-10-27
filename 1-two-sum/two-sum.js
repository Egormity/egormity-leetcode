/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const dic = {};
  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i];
    const complimetary = dic[target - cur];
    if (complimetary !== undefined) return [complimetary, i];
    dic[cur] = i;
  };
  return [];
};