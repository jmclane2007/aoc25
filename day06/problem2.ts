import * as fs from 'fs';

function solve() {
    const input = fs.readFileSync("input.txt", "utf8");
    const lines: string[][] = input.split("\r\n").map(line => line.split(""));
    // MAKE SURE ALL LINES ARE EQUAL LENGTH TO MAKE THIS WORK

    let total = 0;
    let buffer: string[] = [];
    for(let i = lines[0].length - 1; i > -1; i--) {
        let curr = "";
        for(let j = 0; j < lines.length - 1; j++) {
            if(lines[j][i] !== " ") {
                curr += lines[j][i];
            }
        }
        buffer.push(curr);
        if(lines[lines.length-1][i] === "+") {
            buffer.forEach(buff => total += parseInt(buff));
            // Skip the next column since it will be blank
            i--;
            buffer = [];
        }
        else if(lines[lines.length-1][i] === "*") {
            let product = 1;
            buffer.forEach(buff => product *= parseInt(buff));
            total += product;
            i--;
            buffer = [];
        }
    }
    console.log(total);
}

solve();
