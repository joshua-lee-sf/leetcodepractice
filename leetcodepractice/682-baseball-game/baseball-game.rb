# @param {String[]} operations
# @return {Integer}
def cal_points(operations)
    stack = []
    nums = "1234567890"

    operations.each do |n|
        case n
        when '+'
            stack.push(stack[-1].to_i + stack[-2].to_i)
        when "D"
            stack.push(stack[-1].to_i * 2)
        when "C"
            stack.pop()
        else
            stack.push(n.to_i)
        end
        p stack
    end

    return stack.length >= 1 ? stack.reduce(:+) : 0
end