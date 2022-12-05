export class point {
  neighbor: point[]; // Neighboring points
  isAnswered: boolean; // point state
  isOccupied: string; // is available or not

  constructor(neighbor: point[], isAnswered: boolean, isOccupied: string) {
    this.neighbor = neighbor;
    this.isAnswered = isAnswered;
    this.isOccupied = isOccupied;
  }
}