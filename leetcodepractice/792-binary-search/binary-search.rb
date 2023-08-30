# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer}
def search(nums, target)
    return -1 if nums.empty?

    mid = nums.length / 2
    comparator = nums[mid]

    if comparator > target
        return search(nums[0...mid], target)
    elsif comparator < target
        result = search(nums[mid + 1..-1], target)
        return result == -1 ? -1 : result + mid + 1
    else
        return mid
    end
end