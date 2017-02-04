class Fixnum
  # Fixnum#hash already implemented for you
end

class Array
  def hash
    value = 0
    self.each_with_index do |el, idx|
      value ^= el.hash + idx.hash
    end
    value
  end
end

class String
  def hash
    a_arr = ("a".."z").to_a
    value = 0
    self.split("").each_with_index do |el, idx|
      value ^= el.ord.hash + idx.hash if el.is_a? String
    end

    value
  end
end

class Hash
  # This returns 0 because rspec will break if it returns nil
  # Make sure to implement an actual Hash#hash method
  def hash
    self.to_a.sort.hash
  end
end
