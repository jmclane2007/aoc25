import * as fs from 'fs';

function solve() {
    const input = fs.readFileSync("input.txt", "utf8");
    const splitInput: string[] = input.split(/\s+/);
    let total = 0;
    const floor = [];
    for(const line of splitInput) {
        floor.push(line.split(""));
    }
    let curr = -1;
    while(curr !== total) {
        curr = total;
        for(let i = 0; i < floor.length; i++) {
            for(let j = 0; j < floor[0].length; j++) {
                if(floor[i][j] === "@" && isCellRemovable(floor, i, j)) {
                    total++;
                    floor[i][j] = "."
                }
            }
        }
    }
    
    console.log(total);
}

function isCellRemovable(floor: string[][], row: number, col: number) {
    let count = 0;
    for(let i = -1; i < 2; i++) {
        for(let j = -1; j < 2; j++) {
            if(i === 0 && j === 0) {
                continue;
            }
            if(checkCell(floor, row + i, col + j)) {
                count++;
            }
        }
    }
    return count < 4;
}

function checkCell(floor: string[][], row: number, col: number): boolean {
    if(row < 0 || col < 0 || row >= floor.length || col >= floor.length) {
        return false;
    } else {
        return floor[row][col] === "@";
    }
}

solve();
