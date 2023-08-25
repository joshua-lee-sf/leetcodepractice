# @param {Integer[]} nums
# @param {Integer} val
# @return {Integer}
def remove_element(nums, val)
    k = 0
    i = nums.length

    (0...i).each do |i|
        if nums[i] != val
            nums[k] = nums[i]
            k += 1
        end
    end

    return k
end