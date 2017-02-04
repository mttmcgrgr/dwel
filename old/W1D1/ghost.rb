
class Game
  attr_accessor :fragment, :dictionary, :player_one, :player_two,
                :current_player, :previous_player, :loses

  def initialize(player_one, player_two)
    @fragment = ""
    @dictionary = File.readlines("dictionary.txt").map(&:chomp)
    @player_one = player_one
    @player_two = player_two
    @current_player = player_one
    @previous_player = player_two
    @loses = {player_one => 0, player_two => 0}
  end

  def play_round
    until @dictionary.include?(@fragment)
      take_turn(current_player)
      next_player!
      puts "The last guess was #{@fragment}"
    end
    @loses[@previous_player] += 1
    puts "Game is over" if @dictionary.include?(@fragment)
    puts "#{player_one.name} has a #{record(player_one)}"
    puts "#{player_two.name} has a #{record(player_two)}"
  end

  def record(player)
    losing = "GHOST"
    loses = @loses[player]
    losing[0...loses]
  end

  def next_player!
    temp = current_player
    @current_player = @previous_player
    @previous_player = temp
  end

  def take_turn(player)
    guess = player.guess
    until valid_play?(guess)
      player.alert_invalid_guess
      guess = player.guess
    end
    @fragment << guess

  end

  def valid_play?(string)
    guess = @fragment + string
    @dictionary.any? {|word| word[0...guess.length] == guess}
  end

  def run
    until @loses.values.include?(5)
      @fragment = ""
      play_round
    end
  end
end

class Player
  attr_accessor :name

  def initialize(name)
    @name = name
  end

  def guess
    puts "What is your next letter #{name}?"
    gets.chomp
  end

  def alert_invalid_guess
    puts "The guess you entered is not valid"
  end
end
nico = Player.new("nico")
sam = Player.new("sam")
game = Game.new(nico,sam)
game.run
