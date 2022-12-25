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
  {
    soal: '$10 + 10 - 10 + 10 = $',
    a1: '10',
    a2: '20',
    a3: '30',
    a4: '40',
    ans: 'a2',
  },
  {
    soal: '$10 + 10 + 10 + 10 = $',
    a1: 'A. 10',
    a2: 'B. 20',
    a3: 'C. 30',
    a4: 'D. 40',
    ans: 'a4',
  },
  {
    soal: '$10 + 10 - 10 + 10 = $',
    a1: 'A. 10',
    a2: 'B. 20',
    a3: 'C. 30',
    a4: 'D. 40',
    ans: 'a2',
  },
  {
    soal: '$10 - 10 - 10 + 10 + 10 = $',
    a1: 'A. 10',
    a2: 'B. 20',
    a3: 'C. 30',
    a4: 'D. 40',
    ans: 'a1',
  },
  {
    soal: '$2 \\times 2 \\times 2 = $',
    a1: 'A. 6',
    a2: 'B. 8',
    a3: 'C. 10',
    a4: 'D. 12',
    ans: 'a2',
  },
  {
    soal: '$2 \\times 2 \\times 3 = $',
    a1: 'A. 6',
    a2: 'B. 12',
    a3: 'C. 18',
    a4: 'D. 10',
    ans: 'a2',
  },
]

let normal = [
  { soal: '2 x 3  = ...', a1: '1', a2: '2', a3: '3', a4: '6', ans: 'a4' },
  {
    soal: 'Bilangan prima pertama adalah',
    a1: 'A. 1',
    a2: 'B. 2',
    a3: 'C. 3',
    a4: 'D. 5',
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
