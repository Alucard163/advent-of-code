const val = Deno.readTextFileSync('./inputs/day_2.txt').split('\r\n');

enum items {
    ROCK = 1,
    PAPER = 2,
    SCISSOR = 3,
    A = 1,
    B = 2,
    C = 3,
    X = 1,
    Y = 2,
    Z = 3,
}

const grade = {
    LOSE: 0,
    DRAW: 3,
    WIN: 6,
};

let score = 0;

for (let i = 0; i < val.length; i++) {
    const current = val[i].split(' ');
    const opponent = Number(items[current[0]]);
    const me = Number(items[current[1]]);

    if (opponent === me) {
        score += me + grade.DRAW;
        continue;
    }

    if (opponent === items.ROCK) {
        score += me;
        score += me === items.PAPER ? grade.WIN : grade.LOSE;
    }

    if (opponent === items.PAPER) {
        score += me;
        score += me === items.SCISSOR ? grade.WIN : grade.LOSE;
    }

    if (opponent === items.SCISSOR) {
        score += me;
        score += me === items.ROCK ? grade.WIN : grade.LOSE;
    }
}

console.log(score);