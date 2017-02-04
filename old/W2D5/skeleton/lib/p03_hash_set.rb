require_relative 'p02_hashing'

class HashSet
  attr_reader :count

  def initialize(num_buckets = 8)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end

  def insert(key)
    unless include?(key)
      self[key.hash] << key
      @count += 1
    end
    if num_buckets == count
      resize!
    end
  end

  def include?(key)
    self[key.hash].include?(key)
  end

  def remove(key)
    self[key.hash].delete(key)
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
    @store = Array.new(num_buckets*2) {Array.new}
    all_values.each do |value|
      self[value.hash] << value
    end
  end
end
