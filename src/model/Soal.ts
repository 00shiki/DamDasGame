export class Soal{
    soal: String;
    a1: String;
    a2: String;
    a3: String;
    a4: String;
    ans: String;

    constructor(soal: String, a1: String, a2: String, a3: String, a4: String, ans: String) {
        this.soal = soal;
        this.a1 = a1;
        this.a2 = a2;
        this.a3 = a3;
        this.a4 = a4;
        this.ans = ans;
    }
}

let easy = [
    {'soal':'2 x 2  = ...',
    'a1':'1',
    'a2':'2',
    'a3':'3',
    'a4':'4',
    'ans':'a4'
    },
    {'soal':'Apel itu warna apa?',
    'a1':'Biru',
    'a2':'Merah',
    'a3':'Kuning',
    'a4':'Hitam',
    'ans':'a2'
    },
]

let normal = [
    {'soal':'2 x 3  = ...',
    'a1':'1',
    'a2':'2',
    'a3':'3',
    'a4':'6',
    'ans':'a4'
    },
    {'soal':'Lemon itu warna apa?',
    'a1':'Biru',
    'a2':'Merah',
    'a3':'Kuning',
    'a4':'Hitam',
    'ans':'a3e'
    },
]

let hard = [
    {'soal':'2 x 4  = ...',
    'a1':'1',
    'a2':'2',
    'a3':'6',
    'a4':'8',
    'ans':'a4'
    },
    {'soal':'Blueberry itu warna apa?',
    'a1':'Biru',
    'a2':'Merah',
    'a3':'Kuning',
    'a4':'Hitam',
    'ans':'a1'
    },
]

export const soal = [easy, normal, hard];