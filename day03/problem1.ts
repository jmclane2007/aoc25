import * as fs from 'fs';

function solve() {
    const input = fs.readFileSync("input.txt", "utf8");
    const splitInput: string[] = input.split(/\s+/);
    let total = 0;
    for(const line of splitInput) {
        let i = line.length - 2;
        let max = line[i];
        for(let j = i - 1; j > -1; j--) {
            if(line[j] >= max) {
                i = j;
                max = line[j];
            }
        }
        let max2 = line[i+1];
        for(let j = i + 2; j < line.length; j++) {
            if(line[j] > max2) {
                max2 = line[j]
            }
        }
        total += parseInt(max + max2);
    }
    console.log(total);
}

solve();
