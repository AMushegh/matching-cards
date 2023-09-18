export class GameApiService implements IGameApiService {
  public async getCards(): Promise<ICard[]> {
    return Promise.resolve<ICard[]>([
      {
        active: true,
        id: 1,
        isGuessed: false,
        pairId: 2,
        title: "title1",
      },
    ]);
  }
}
