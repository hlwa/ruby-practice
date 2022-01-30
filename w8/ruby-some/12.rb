print "Give me a number:"
number = gets.chomp.to_i

bigger = number * 100

puts "A bigger number is #{bigger}"

another = gets.chomp

number = another.to_i

smaller = number / 100

puts "A smaller number is #{smaller}."
