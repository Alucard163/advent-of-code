const values = Deno.readTextFileSync('./inputs/day_2.txt').split(
    '\r\n',
);

enum item {
    ROCK = 1,
    PAPER = 2,
    SCISSORS = 3,
    A = 1,
    B = 2,
    C = 3,
    X = 'LOSE',
    Y = 'DRAW',
    Z = 'WIN',
    DRAW = 3,
    WIN = 6,
}

let score = 0;

for (let i = 0; i < values.length; i++) {
    const current = values[i].split(' ');
    const opponent = Number(item[current[0]]), me = item[current[1]];

    switch (me) {
        case 'DRAW': {
            score += opponent + item.DRAW;
            break;
        }
        case 'LOSE': {
            if (opponent === item.ROCK) score += item.SCISSORS;
            else if (opponent === item.PAPER) score += item.ROCK;
            else if (opponent === item.SCISSORS) score += item.PAPER;
            break;
        }
        case 'WIN': {
            score += item.WIN;
            if (opponent === item.ROCK) score += item.PAPER;
            else if (opponent === item.PAPER) score += item.SCISSORS;
            else if (opponent === item.SCISSORS) score += item.ROCK;
            break;
        }
    }
}

console.log(score);