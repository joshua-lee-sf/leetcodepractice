# @param {Integer[]} students
# @param {Integer[]} sandwiches
# @return {Integer}
# 0 = circular
# 1 = square sandwiches
def count_students(students, sandwiches)
    
    while sandwiches.length > 0 do
        if students[0] == sandwiches[0]
            students.shift
            sandwiches.shift
        else
            if students.all? {|student| student != sandwiches[0]}
                return students.length
            else
                student = students.shift
                students.push(student)
            end
        end
    end

    return 0
end