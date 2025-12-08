import * as fs from 'fs';

function solve() {
    const LOCK_SIZE = 100;
    let dialPos = 50;
    const input = fs.readFileSync("input.txt", "utf8");
    const splitInput: string[] = input.split(/\s+/);
    let zeroCount = 0;
    for(let i = 0; i < splitInput.length; i++) {
        const isZero = dialPos == 0;
        const move = parseInt(splitInput[i].substring(1));
        if(splitInput[i][0] === "L") {
            dialPos -= (move % LOCK_SIZE);
        } else {
            dialPos += (move % LOCK_SIZE);
        }
        zeroCount += Math.floor(move / LOCK_SIZE);
        if(!isZero && (dialPos >= LOCK_SIZE || dialPos <= 0)) {
            zeroCount++;
        }
        dialPos = (dialPos + LOCK_SIZE) % LOCK_SIZE;
    }
    console.log(zeroCount);
}

solve();
