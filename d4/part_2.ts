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

console.log(count);

function overlaps(q: string[], r: string[]) {
    const first = q.map((x) => Number(x));
    const second = r.map((x) => Number(x));
    if (first[0] < second[0] && first[1] < second[0]) return false;
    if (first[0] > second[1] && first[1] > second[1]) return false;
    return true;
}