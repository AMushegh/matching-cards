interface IGameController {
  addButtonClicked(): void;
  changePathButtonClicked(): void;
}

interface ICard {
  id: number;
  title: string;
  pairId: number;
}
interface IGameStore {
  cards: ICard[];
}

interface IGameService {
  addCard(): void;
  changePath(): void;
}
