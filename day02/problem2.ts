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
            for(let k  = 1; k <= str.length / 2; k++) {
                if(str.length % k == 0 && str.substring(0, k).repeat(str.length / k) === str) {
                    sum += j;
                    break;
                }
            }
        }
    }
    console.log(sum);
}

solve();
