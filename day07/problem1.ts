import * as fs from 'fs';

function solve() {
    const input = fs.readFileSync("input.txt", "utf8");
    const lines: string[][] = input.split("\r\n").map(line => line.split(""));
    let lasers = new Set<number>();
    lasers.add(lines[0].indexOf("S"));
    let total = 0;
    for(let i = 2; i < lines.length; i += 2) {
        const newLasers = new Set<number>();
        for(const laser of lasers) {
            if(lines[i][laser] === "^") {
                newLasers.add(laser+1);
                newLasers.add(laser-1);
                total++;
            } else {
                newLasers.add(laser);
            }
        }
        lasers = newLasers;
    }
    console.log(total);
}

solve();
