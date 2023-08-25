# @param {String} s
# @return {Boolean}
def is_valid(s)
    stack = []

    s.each_char do |char|
        case char
        when "{" , "[", "("
            stack.push(char)
        when ")"
            if stack.pop() != "("
                return false
            end
        when "}"
            if stack.pop() != "{"
                return false
            end
        when "]"
            if stack.pop() != "["
                return false
            end
        end
    end

    return stack.length <= 0 ? true : false
end