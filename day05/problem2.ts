import * as fs from 'fs';

function solve() {
    const input = fs.readFileSync("input.txt", "utf8");
    const data = input.split("\r\n\r\n");
    const splitInput: string[] = data[0].split(/\s+/);
    const ranges: number[][] = [];
    for(const line of splitInput) {
        const arr = line.split("-");
        ranges.push([parseInt(arr[0]), parseInt(arr[1])]);
    }
    ranges.sort((a, b) => a[0] - b[0]);
    const newRanges = [ranges[0]];
    let j = 0;
    for(let i = 1; i < ranges.length; i++) {
        if(ranges[i][0] <= newRanges[j][1]) {
            newRanges[j][1] = Math.max(newRanges[j][1], ranges[i][1]);
        } else {
            newRanges.push(ranges[i]);
            j++;
        }
    }
    let total = 0;
    for(let i = 0; i < newRanges.length; i++) {
        total += (newRanges[i][1] - newRanges[i][0]) + 1;
    }
    console.log(total);
}

solve();
