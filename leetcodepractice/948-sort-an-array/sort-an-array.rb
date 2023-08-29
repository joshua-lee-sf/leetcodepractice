# @param {Integer[]} nums
# @return {Integer[]}
def sort_array(nums)
    return nums if nums.length <= 1

    mid = nums.length / 2

    left = nums[0...mid]
    right = nums[mid...nums.length]

    sorted_left = sort_array(left)
    sorted_right = sort_array(right)

    return merged(sorted_left, sorted_right)
end

def merged(left, right)
    merged = []

    while left.length > 0 && right.length > 0 do
        case
        when left[0] < right[0]
            merged.push(left.shift)
        when left[0] == right[0]
            merged.push(left.shift)
        else
            merged.push(right.shift)
        end
    end

    return merged.concat(left, right)
end