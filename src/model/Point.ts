export class point {
  neighbor: point[]; // Neighboring points
  isAnswered: boolean; // point state

  constructor(neighbor: point[], isAnswered: boolean) {
    this.neighbor = neighbor;
    this.isAnswered = isAnswered;
  }
}