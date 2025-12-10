import * as fs from 'fs';

function solve() {
    const input = fs.readFileSync("input.txt", "utf8");
    const lines: string[][] = input.split("\r\n").map(line => line.split(""));
    let lasers = new Map<number,number>();
    lasers.set(lines[0].indexOf("S"), 1);
    for(let i = 2; i < lines.length; i += 2) {
        const newLasers = new Map<number,number>();
        for(const laser of lasers) {
            if(lines[i][laser[0]] === "^") {
                const left = newLasers.get(laser[0] - 1);
                if(left) {
                    newLasers.set(laser[0] - 1, left + laser[1]);
                } else {
                    newLasers.set(laser[0] - 1, laser[1]);
                }
                const right = newLasers.get(laser[0] + 1);
                if(right) {
                    newLasers.set(laser[0] + 1, right + laser[1]);
                } else {
                    newLasers.set(laser[0] + 1, laser[1]);
                }
            } else {
                const miss = newLasers.get(laser[0]);
                if(miss) {
                    newLasers.set(laser[0], miss + laser[1]);
                } else {
                    newLasers.set(laser[0], laser[1]);
                }
            }
        }
        lasers = newLasers;
    }
    
    let total = 0;
    lasers.forEach(laser => total += laser)
    console.log(total);
}

solve();
