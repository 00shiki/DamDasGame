class GameViewModel {
  private diff: number = 1

  constructor() {
    this.diff = 1
  }

  setDiff(diff: number) {
    this.diff = diff
  }

  get getDiff() {
    return this.diff
  }
}

export default GameViewModel
