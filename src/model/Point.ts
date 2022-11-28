export class point {
  neighbor: point[]; // Neighboring points
  isAnswered: boolean; // point state
  isOccupied: boolean; // is available or not

  constructor(neighbor: point[], isAnswered: boolean, isOccupied: boolean) {
    this.neighbor = neighbor;
    this.isAnswered = isAnswered;
    this.isOccupied = isOccupied;
  }
}