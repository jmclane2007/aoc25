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
    let total = 0;
    const ingredients = data[1].split(/\s+/);
    for(const ing of ingredients) {
        const num = parseInt(ing);
        for(const range of ranges) {
            if(num >= range[0] && num <= range[1]) {
                total++;
                break;
            }
        }
    } 
    
    console.log(total);
}

solve();
