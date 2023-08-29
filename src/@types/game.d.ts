interface IGameController {
  addButtonClicked(): void;
  changePathButtonClicked(): void;
}

interface IGameStore {
  cards: number[];
}

interface IGameService {
  addCard(): void;
  changePath(): void;
}
