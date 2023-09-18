interface IGameController {
  changePathButtonClicked(): void;
  cardClicked(cardId: number): void;
  gameInitialized(): void;
}

interface ICard {
  id: number;
  title: string;
  pairId: number;
  active: boolean;
  isGuessed: boolean;
}
interface IGameStore {
  cards: ICard[];
  cardsFetching: boolean;
}

interface IGameService {
  changePath(): void;
  flipCard(cardId: number): void;
  fetchCards(): Promise<void>;
}

interface IGameApiService {
  getCards(): Promise<ICard[]>;
}
