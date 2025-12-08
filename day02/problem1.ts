import * as fs from 'fs';

function solve() {
    const input = fs.readFileSync("input.txt", "utf8");
    const splitInput: string[] = input.split(",");
    let sum = 0;
    for(let i = 0; i < splitInput.length; i++) {
        const line = splitInput[i].split("-");
        const left = parseInt(line[0]);
        const right = parseInt(line[1]);
        for(let j = left; j < right + 1; j++) {
            const str = j + "";
            if(str.substring(0, str.length / 2) === str.substring(str.length / 2)) {
                sum += j;
            }
        }
    }
    console.log(sum);
}

solve();
