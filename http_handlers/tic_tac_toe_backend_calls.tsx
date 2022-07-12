const BASE_URL = 'http://192.168.86.26:4000/api/games/'

async function getGame(gameID: number) {
  const url = BASE_URL + gameID;
  try {
    const response = await fetch(url, {
    method: 'GET',
    mode: 'no-cors'
    });
  let new_response = await response.json();
  return new_response.data;
  } catch (error) {
    console.log(error);
  };
}

async function createGame() {
  const url = BASE_URL;

  const data = {
    "game": {
        "available_moves" : [1, 2, 3, 4, 5, 6, 7, 8, 9],
        "won": false,
        "tied": false,
        "winner": 0,
        "player_1_moves" : [],
        "player_2_moves" : [],
        "player_1_mark" : "X",
        "player_2_mark" : "O",
        "current_player" : 1,
        "player_1_type" : ":human",
        "player_2_type" : ":human",
        "maximizer" : 1,
        "best_score_move" : {
            "best_score" : -100,
            "best_move" : 0
        },
        "board" : {
            "1" : "1",
            "2" : "2",
            "3" : "3",
            "4" : "4",
            "5" : "5",
            "6" : "6",
            "7" : "7",
            "8" : "8",
            "9" : "9"
        }
    }
}

  try {
    const response = await fetch(url, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
    });
  let new_response = await response.json();
  return new_response.data;
  } catch (error) {
    console.log(error);
  };
}

async function updateGame(gameID: number, move: number) {
  const url = BASE_URL + gameID;

  const data = {
    "move": move
  }
  
  try {
    const response = await fetch(url, {
    method: 'PATCH',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
    });

  let new_response = await response.json();

  return new_response.data;
  } catch (error) {
    console.log(error);
  };
}

export {
  getGame,
  createGame,
  updateGame
}