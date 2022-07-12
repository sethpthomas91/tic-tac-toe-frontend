type BestScoreMove = {
  best_score: number,
  best_move: number
}

type Board = {
  1: string,
  2: string,
  3: string,
  4: string,
  5: string,
  6: string,
  7: string,
  8: string,
  9: string
}

type Game = {
  available_moves: number[],
  win: boolean,
  winner: number,
  player_1_moves: number[],
  player_2_moves: number[],
  player_1_mark: string,
  player_2_mark: string,
  current_player: number,
  player_1_type: string,
  player_2_type: string,
  maximizer: number,
  best_score_move: BestScoreMove
  board: Board
}

export {
  Game,
  Board,
  BestScoreMove
}