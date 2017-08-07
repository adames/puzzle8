class Game < ApplicationRecord
  belongs_to :image
  belongs_to :user

  def randomize_tiles()
    #self.tiles_order = (1..9).to_a.reverse
    self.tiles_order = (1..9).to_a.shuffle
  end

  # require 'pry'
# require 'measurable'
#
# arr2solve = [2, 9, 5,
#             8, 7, 6,
#             4, 1, 3]

# arr2solve = [1, 2, 3,
#             4, 5, 6,
#             7, 9, 8]

def new_pos(x)
  up = x - 3
  down = x + 3
  left = nil
  if x % 3 != 0
    left = x - 1
  end
  right = nil
  if x % 3 != 2
    right = x + 1
  end
  return [up, left, down, right]
end


def manhattan_distance(arr2solve)
  manhut = 0
  sol = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  # Measurable.minkowski

  arr2solve.each do |x|
    solIndex = sol.index(x) + 1
    arrIndex = arr2solve.index(x) + 1
    arr_distance = (solIndex - arrIndex).abs
    remainder = arr_distance % 3

    if solIndex != arrIndex && x != 9
      #p"final = #{(arr_distance / 3) + (arr_distance % 3)},for #{x}"
      manhut += (arr_distance / 3) + (arr_distance % 3)
    else
      #p 'same pos or nine'
    end
  end
  return manhut
end



def possible_boards(arr2solve)
  blank_tile_index = arr2solve.index(9)
  pos_to_check = new_pos(blank_tile_index).compact.select{|n| n >= 0 && n < 9}

  ret = []
  pos_to_check.each do |x|
    ret_arr = arr2solve.clone
    ret_arr[blank_tile_index] = ret_arr[x]
    ret_arr[x] = 9
    ret << ret_arr
  end
  return ret
end



def order_boards(arr2solve)
  boards = possible_boards(arr2solve)
  #updated_boards = boards.select{|board| !previous_boards.include?(board)}
  man_boards = boards.map{|board| manhattan_distance(board)}
  lowest_board = boards[man_boards.index(man_boards.min)]
  sorted_board = boards.each_with_index.map{|board, i| [board, man_boards[i]]}
  sorted_board.sort_by!{|arr| arr[1]}
  return sorted_board
end

def check_board(board, arr, manhattan_distance, hold_tree)
  if board != [1, 2, 3, 4, 5, 6, 7, 8, 9] && arr.include?(board) == false && arr.include?([1, 2, 3, 4, 5, 6, 7, 8, 9]) == false
    new_set = order_boards(board).select{|b, m| !arr.include?(b)}
    sorted_board = new_set.sort_by!{|b, m| m}
    #make_sure_all_man_dis_same = sorted_board.map{|b, m| m}.uniq
    sorted_board.each do |b, m|
      if m >= manhattan_distance
        hold_tree << [b, m]
      elsif m <= manhattan_distance #|| make_sure_all_man_dis_same.length == 1
        if b != [1, 2, 3, 4, 5, 6, 7, 8, 9]
          arr << board
          #p board
          check_board(b, arr, m, hold_tree)
        elsif b == [1, 2, 3, 4, 5, 6, 7, 8, 9]
          #binding.pry
        end
      end
    end
  end
end


def start(arr2solve)
  arr = []
  hold_tree = []
  answer = check_board(arr2solve, arr, 13, hold_tree)
  #counter has no purpose just looks nice
  counter = 0


  if hold_tree.length > 0
    hold_tree.each do |b, m|
      if arr.include?(b) == false
        if b != [1, 2, 3, 4, 5, 6, 7, 8, 9]
          check_board(b, arr, m, hold_tree)
          hold_tree.delete([b, m])
          counter += 1
          #p counter
        elsif b == [1, 2, 3, 4, 5, 6, 7, 8, 9]
          # binding.pry
          byebug
          return true
        end
      elsif b == [1, 2, 3, 4, 5, 6, 7, 8, 9]
        # binding.pry
        byebug
        return true
      end
    end
  end

  byebug
end

# start(arr2solve)

  #
  # def new_pos(x)
  #   up = x - 3
  #   down = x + 3
  #   left = x - 1
  #   right = x + 1
  #   return [up, down, left, right]
  # end
  #
  # def algo
  #   arr2solve = [2, 9, 5, 8, 7, 6, 4, 1, 3]
  #
  #   arr2solve.each do |x|
  #     new_pos(x).each do |y|
  #       p "#{x}is x"
  #       p "#{y}is y"
  #     end
  #   end
  # end

end
