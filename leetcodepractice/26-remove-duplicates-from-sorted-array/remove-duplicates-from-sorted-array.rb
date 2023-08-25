# @param {Integer[]} nums
# @return {Integer}
def remove_duplicates(nums)
    count = 1
    i = 1

    while i < nums.length do 
        if nums[i - 1] == nums[i]
            nums.delete_at(i)
        else
            count += 1
            i += 1
        end
    end

    return count
end