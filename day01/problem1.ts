import * as fs from 'fs';

function solve() {
    const LOCK_SIZE = 100;
    let dialPos = 50;
    const input = fs.readFileSync("input.txt", "utf8");
    const splitInput: string[] = input.split(/\s+/);
    let zeroCount = 0;
    for(let i = 0; i < splitInput.length; i++) {
        if(splitInput[i][0] === "L") {
            dialPos = (dialPos - parseInt(splitInput[i].substring(1))) % LOCK_SIZE;
        } else {
            dialPos = (dialPos + parseInt(splitInput[i].substring(1))) % LOCK_SIZE;
        }
        if(dialPos === 0) {
            zeroCount++;
        }
    }
    console.log(zeroCount);
}

solve();
