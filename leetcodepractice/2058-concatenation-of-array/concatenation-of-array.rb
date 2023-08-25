# @param {Integer[]} nums
# @return {Integer[]}
def get_concatenation(nums)
    nums_clone = nums.dup;
    
    nums.each do |n|
        nums_clone.push(n)
    end

    return nums_clone
end