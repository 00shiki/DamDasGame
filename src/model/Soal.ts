export class Soal {
  soal: String
  a1: String
  a2: String
  a3: String
  a4: String
  ans: String

  constructor(
    soal: String,
    a1: String,
    a2: String,
    a3: String,
    a4: String,
    ans: String
  ) {
    this.soal = soal
    this.a1 = a1
    this.a2 = a2
    this.a3 = a3
    this.a4 = a4
    this.ans = ans
  }
}

function getMultipleRandom(arr: Array<Soal>, num: number) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random())

  return shuffled.slice(0, num)
}

let easy = [
  { soal: '1 + 1  = ...', a1: '1', a2: '2', a3: '3', a4: '4', ans: 'a2' },
  {
    soal: 'Bilangan setelah 2 adalah',
    a1: '1',
    a2: '3',
    a3: '4',
    a4: 'Tidak ada',
    ans: 'a2',
  },
]

let normal = [
  { soal: '2 x 3  = ...', a1: '1', a2: '2', a3: '3', a4: '6', ans: 'a4' },
  {
    soal: 'Bilangan prima pertama adalah',
    a1: '1',
    a2: '2',
    a3: '3',
    a4: '5',
    ans: 'a2',
  },
]

let hard = [
  {
    soal: '2(5+2) - 7  = ...',
    a1: '5',
    a2: '7',
    a3: '11',
    a4: '13',
    ans: 'a4',
  },
  { soal: '12 - 7 x 2', a1: '-2', a2: '10', a3: '3', a4: '6', ans: 'a1' },
]

export const soal = [easy, normal, hard]
