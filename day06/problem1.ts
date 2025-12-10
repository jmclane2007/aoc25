import * as fs from 'fs';

function solve() {
    const input = fs.readFileSync("input.txt", "utf8");
    const lines: string[] = input.split("\r\n");
    const ops = [];
    for(let i = 0; i < lines.length; i++) {
        ops.push(lines[i].split(/\s+/));
    }
    let total = 0;
    for(let i = 0; i < ops[0].length; i++) {
        let curr = parseInt(ops[0][i]);
        let operand = ops[ops.length - 1][i];
        for(let j = 1; j < ops.length - 1; j++) {
            if(operand === "+") {
                curr += parseInt(ops[j][i]);
            } else {
                curr *= parseInt(ops[j][i]);
            }
        }
        total += curr;
    }
    console.log(total);
}

solve();
