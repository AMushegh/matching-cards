interface IGameController {
  addButtonClicked(): void;
}

interface IGameStore {
  cards: number[];
}

interface IGameService {
  addCard(): void;
}
