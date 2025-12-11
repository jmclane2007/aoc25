import * as fs from 'fs';

interface Junc {
    a: string;
    b: string;
    dist: number;
}

function solve() {
    const input = fs.readFileSync("input.txt", "utf8");
    const lines: string[] = input.split("\r\n");
    const points = lines.map(line => line.split(",").map(num => parseInt(num)));
    let area = 0;
    for(let i = 0; i < points.length; i++) {
        for(let j = i + 1; j < points.length; j++) {
            area = Math.max(area, Math.abs(points[i][0] - points[j][0] + 1) * Math.abs(points[i][1] - points[j][1] + 1));
        }
    }
    console.log(area);
}

solve();
