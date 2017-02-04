class Array
  # Write an Array method that returns a bubble-sorted copy of an array.
  # Do NOT call the built-in Array#sort method in your implementation.
  def bubble_sort(&prc)
    return self if empty?
    arr = self.dup
    arr.bubble_sort!(&prc)
  end

  # You are not required to implement this; it's here as a suggestion :-)
  def bubble_sort!(&prc)
    prc ||= Proc.new {|a,b| a<=>b}
    not_sorted = true
    while not_sorted

      self.length.times do |i|
        not_sorted = false
        ii = i + 1
        while ii < self.length
          case prc.call(self[i],self[ii])
          when 1
            self[i], self[ii] = self[ii], self[i]
            not_sorted = true
          end
          ii += 1
        end
      end
    end
    self
  end
end

# Write a method that will transpose a rectangular matrix (array of arrays)
def transpose(matrix)
  n = matrix.first.length
  transposed = []
  n.times do |i|
    hold = []
    matrix.each do |arr|
      hold << arr[i]
    end
    transposed << hold
  end
  transposed 
end

# Write a method called 'sum_rec' that
# recursively calculates the sum of an array of values
def sum_rec(nums)
  return 0 if nums.empty?
  return nums[0] if nums.length == 1
  nums[0] + sum_rec(nums[1..-1])
end

class String
  # This method returns true if the string can be rearranged to form the
  # sentence passed as an argument.

  # Example:
  # "cats are cool".shuffled_sentence_detector("dogs are cool") => false
  # "cool cats are".shuffled_sentence_detector("cats are cool") => true

  def shuffled_sentence_detector(other)
    arr = self.split(" ").sort
    arr2 = other.split(" ").sort
    arr == arr2
  end
end

# Write a method that returns the largest prime factor of a number
def largest_prime_factor(num)
  return nil if num <= 1
  i = num
  while i > 1
    return i if num % i == 0 && prime?(i)
    i -= 1
  end
  nil
end

# You are not required to implement this; it's here as a suggestion :-)
def prime?(num)
  (2..num-1).each do |i|
    return false if num % i == 0
  end
  true
end

class Array
  # Write a method that calls a passed block for each element of the array
  def my_each(&prc)
    self.length.times do |i|
      prc.call(self[i])
    end
    self
  end
end

class Array
  # Write an array method that returns an array made up of the
  # elements in the array that return `true` from the given block
  def my_select(&prc)
    selected = []
    self.length.times do |i|
        selected << self[i] if prc.call(self[i])
    end
    selected
  end
end
#
#












#
#
#
