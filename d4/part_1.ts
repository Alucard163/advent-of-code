const values = Deno.readTextFileSync('./inputs/day_4.txt').split(
    '\r\n',
);
let count = 0;

for (let i = 0; i < values.length; i++) {
    const [p1, p2] = values[i].split(',');

    const left = p1.split('-');
    const right = p2.split('-');

    if (overlaps(left, right)) count++;
}

function overlaps(left: string[], right: string[]) {
    const first = left.map((x: string) => Number(x));
    const second = right.map((x:string) => Number(x));
    if (first[0] <= second[0] && first[1] >= second[1]) return true;
    if (second[0] <= first[0] && second[1] >= first[1]) return true;
    return false;
}

console.log(count);

