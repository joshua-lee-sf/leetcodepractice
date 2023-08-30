# @param {Integer[][]} matrix
# @param {Integer} target
# @return {Boolean}
# def search_matrix(matrix, target)
#     return false if matrix.length == 0

#     matrix_length = matrix.length

#     mid = matrix_length / 2
#     last_num_of_mid_matrix = matrix[mid][-1]
#     first_num_of_mid_matrix = matrix[mid][0]
    
#     if last_num_of_mid_matrix > target
#         if  first_num_of_mid_matrix <= target
#             return search(matrix[mid], target)
#         else 
#             return search_matrix(matrix[0...mid], target)
#         end
#     elsif last_num_of_mid_matrix <= target
#         if  first_num_of_mid_matrix <= target
#             return search(matrix[mid], target)
#         else 
#             return search_matrix(matrix[mid + 1..-1], target)
#         end
#     else
#         return true
#     end
# end

# def search(matrix, target)
#     return false if matrix.length == 0
    
#     mid = matrix.length / 2
#     comparator = matrix[mid]

#     if comparator > target
#         return search(matrix[0...mid], target)
#     elsif comparator < target
#         return search(matrix[mid + 1..-1], target)
#     elsif comparator == target
#         return true
#     end
# end

def search_matrix(matrix, target)
    return false if matrix.empty? || matrix[0].empty?

    rows = matrix.length
    cols = matrix[0].length

    left = 0
    right = rows * cols - 1

    while left <= right
        mid = (left + right) / 2
        mid_value = matrix[mid / cols][mid % cols]

        if mid_value == target
            return true
        elsif mid_value < target
            left = mid + 1
        else
            right = mid - 1
        end
    end

    return false
end