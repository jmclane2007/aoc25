import * as fs from 'fs';

function solve() {
    const input = fs.readFileSync("input.txt", "utf8");
    const splitInput: string[] = input.split(/\s+/);
    let total = 0;
    for(const line of splitInput) {
        // find the largest digit between length - current length and the previous index
        let sum = 0;
        let prevIndex = -1;
        for(let i = 12; i > 0; i--) {
            let max = "0";
            let curr = line.length - i;
            for(let j = line.length - i; j > prevIndex; j--) {
                if(line[j] >= max) {
                    curr = j;
                    max = line[j];
                }
            }
            prevIndex = curr;
            sum = (sum * 10) + parseInt(max);
        }
        total += sum;
    }
    console.log(total);
}

solve();
