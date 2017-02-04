require "byebug"

class Link
  attr_accessor :key, :val, :next, :prev

  def initialize(key = nil, val = nil)
    @key = key
    @val = val
    @next = nil
    @prev = nil
  end

  def to_s
    "#{@key}: #{@val}"
  end

  def remove
    # optional but useful, connects previous link to next link
    # and removes self from list.
    @key, @val = nil, nil
    @next.prev = @prev unless @next.nil?
    @prev.next = @next unless @prev.nil?
  end
end

class LinkedList
  include Enumerable

  def initialize
    @linked_list = []
  end

  def [](index)
    # debugger
    each_with_index { |link, j| return link if index == j }
    nil
  end

  def first
    unless empty?
      current = @linked_list.first.first
      until current.prev.nil?
        current = current.prev
      end

      current
    end
  end

  def last
    unless empty?
      current = @linked_list.first.first
      until current.next.nil?
        current = current.next
      end

      current
    end
  end

  def empty?
    @linked_list.empty?
  end

  def get(key)
    self[key].val unless self[key].nil?
  end

  def include?(key)
    self[key].nil? ? false : true
  end

  def append(key, val)
    next_element = Link.new(key, val)

    unless last.nil?
      last.next = next_element
      next_element.prev = last
    end

    @linked_list << [next_element, key]
  end

  def update(key, val)
    self[key].val = val unless self[key].nil?
  end

  def remove(key)
    self[key].remove
  end

  def each
    current = first
    until current == last
      yield [current, current.key]
      current = current.next
    end

    yield [current, current.key]
  end

  # uncomment when you have `each` working and `Enumerable` included
  # def to_s
  #   inject([]) { |acc, link| acc << "[#{link.key}, #{link.val}]" }.join(", ")
  # end
end
