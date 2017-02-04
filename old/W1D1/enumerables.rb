class Array
  def my_each(&prc)
    for i in 0...self.length
      prc.call(self[i])
    end
    self
  end

  def my_select(&prc)
    selected = []

    my_each do |el|
      selected << el if prc.call(el)
    end

    selected
  end

  def my_reject(&prc)
    selected = []

    my_each do |el|
      selected << el unless prc.call(el)
    end

    selected
  end

  def my_any?(&prc)
    returns = false
    my_each do |el|
      returns = true if prc.call(el)
    end
    returns
  end

  def my_all?(&prc)
    returns = true
    my_each do |el|
      returns = false unless prc.call(el)
    end
    returns
  end

  def my_flatten
    flattened = []
    my_each do |el|
      el.class == Array ? flattened << el.my_flatten : flattened << el
    end
    flattened
  end

  def my_zip(*arg)
    zipped = []

    idx = 0
    my_each do |el|
      temp = []

      temp << el
      arg.my_each do |other_el|
        temp << other_el[idx]
      end

      zipped << temp
      idx += 1
    end

    zipped
  end

  def my_rotate(shift=1)
    rotated = self.dup

    shift.times do
      rotated << rotated.shift
    end

    rotated
  end

  def my_join(char = "")
    str = ""
    my_each do |el|
      str << el + char
    end
    str[0...str.length - 1]
  end

  def my_reverse
    reversed_array = []
    dup_arr = self.dup
    until dup_arr.empty?
      reversed_array << dup_arr.pop
    end
    reversed_array
  end
end

p [ "a", "b", "c" ].my_reverse   #=> ["c", "b", "a"]
p [ 1 ].my_reverse               #=> [1]
