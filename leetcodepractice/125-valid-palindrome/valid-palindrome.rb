# @param {String} s
# @return {Boolean}
def is_palindrome(s)
    s = s.downcase.delete("^a-z0-9")
    alphabet = ("a".."z").to_a.join("")

    l = 0
    r = s.length - 1

    print alphabet.include?(" ")

    while (l < r) do
        if s[l] == " "
            l += 1
        elsif s[r] == " "
            r -= 1
        elsif s[l] != s[r]
            return false
        elsif s[l] == s[r]
            l += 1
            r -= 1
        end
    end

    return true
end