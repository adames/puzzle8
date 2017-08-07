class Game < ApplicationRecord
  belongs_to :image
  belongs_to :user

  def randomize_tiles()
    self.tiles_order = (1..9).to_a.shuffle
  end

  # finds path to correct tiles order
  def a_star_search(tiles_order)
    tree = []
    leaves = []
    solution = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    leaf = build_leaf(tiles_order, {tiles_order: nil, branch: []})

    i = 0
    while i < 10000 && leaf[:tiles_order] != solution
      i += 1
      tree << leaf[:tiles_order]
      new_buds = neighbor_boards(leaf[:tiles_order])
      new_buds.each do |bud|
        leaves << build_leaf(bud, leaf) unless tree.include? bud
      end
      leaf = pop_cheapest_leaf(leaves)

      p "iterations = #{i}"
      p "depth = #{leaf[:branch].length}"
      p "manhattan distance = #{leaf[:m_distance]}"
      p "tiles_order = #{leaf[:tiles_order]}"

      return leaf[:branch] if leaf[:tiles_order] == solution
    end
  end

  # underestimates depth of solution using current tiles order
  def manhattan_distance(tiles_order)
    manhattan_distance = 0
    tiles_order.each_with_index do |x, i|
      next if x == 9 # this skips the blank square.
      array_steps = ((i + 1) - x).abs
      puzzle_steps = (array_steps / 3) + (array_steps % 3)
      manhattan_distance += puzzle_steps
    end
    return manhattan_distance
  end

  # returns possible moves based on position of blank tile
  def legal_moves(index)
    legal_moves = []
    legal_moves << index - 1 if index % 3 != 0  #left
    legal_moves << index + 1 if index % 3 != 2  #right
    legal_moves << index + 3 if index + 3 < 9   #up
    legal_moves << index - 3 if index - 3 > -1  #down
    return legal_moves
  end

  # returns boards with possible moves made
  def neighbor_boards(tiles_order)
    blank_tile_index = tiles_order.index(9)
    return legal_moves(blank_tile_index).map do |legal_move|
      ret_arr = tiles_order.clone
      ret_arr[blank_tile_index] = tiles_order[legal_move]
      ret_arr[legal_move] = 9
      ret_arr
    end
  end

  # creates node with tiles order and distance estimates
  def build_leaf(tiles_order, prev_board)
    template = {tiles_order: nil, branch: [], m_distance: nil}
    template[:tiles_order] = tiles_order
    template[:branch] += prev_board[:branch]
    template[:branch] << tiles_order
    template[:m_distance] = manhattan_distance(tiles_order) + prev_board[:branch].length
    return template
  end

  # returns node with shortest estimated path to solution
  def pop_cheapest_leaf(leaves)
    cheapest_leaf = nil
    cheapest_index = nil
    leaves.each_with_index do |leaf, i|
      if cheapest_leaf.nil? || leaf[:m_distance] < cheapest_leaf[:m_distance]
        cheapest_leaf = leaf
        cheapest_index = i
      end
    end
    leaves.delete_at(cheapest_index)
    return cheapest_leaf
  end

end
