require 'byebug'

class MaxIntSet
  attr_reader :max, :store

  def initialize(max)
    @max = max
    @store = Array.new(max) { false }

  end

  def insert(num)
    raise "Out of bounds" if is_valid?(num)
    unless include?(num)
      validate!(num)
    end
  end

  def remove(num)
    validate!(num)
  end

  def include?(num)
    store[num] == true
  end

  private

  def is_valid?(num)
    num > max || num < 0
  end

  def validate!(num)
    store[num] = (store[num] ? false : true)
  end
end


class IntSet
  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
  end

  def insert(num)
    self[num] << num
  end

  def remove(num)
    self[num].delete(num)
  end

  def include?(num)
    self[num].include?(num) ? true : false
  end

  private

  def [](num)
    # optional but useful; return the bucket corresponding to `num`
    @store[num % 20]
  end

  def num_buckets
    @store.length
  end
end

class ResizingIntSet
  attr_reader :count

  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end

  def insert(num)
    self[num] << num
    @count += 1
    if @count == num_buckets
      resize!
    end
  end

  def remove(num)
    self[num].delete(num)
    @count -= 1
  end

  def include?(num)
    self[num].include?(num)
  end

  private

  def [](num)
    # optional but useful; return the bucket corresponding to `num`
    @store[num % num_buckets]
  end

  def num_buckets
    @store.length
  end

  def resize!
    all_values = @store.flatten
    @store = Array.new(num_buckets * 2) { Array.new }
    all_values.each do |num|
      self[num] << num
    end
  end
end
