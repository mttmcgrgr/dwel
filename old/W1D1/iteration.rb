def factors(num)
  factors = []

  (1..num).to_a.each do |el|
    factors << el if num % el == 0
  end

  factors
end

class Array
  def bubble_sort!(&prc)
    (self.length - 1).times do
      (0...self.length - 1).to_a.each do |idx|
        if prc.call(self[idx], self[idx + 1]) == 1
          temp = self[idx]
          self[idx] = self[idx + 1]
          self[idx + 1] = temp
        end
      end
    end

    self
  end

  def bubble_sort(&prc)
    duped = self.dup
    duped.bubble_sort!(&prc)
  end
end

def substring(string)
  substrings = []
  (0..string.length - 1).to_a.each do |index1|
    (index1..string.length - 1).to_a.each do |index2|
      substrings << string[index1..index2]
    end
  end
  substrings
end

def subwords(word,dictionary)
  final = []
  substrings = substring(word)
  substrings.each do |substring|
    final << substring if dictionary.include?(substring)
  end
  final
end
