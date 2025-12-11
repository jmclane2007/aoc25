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
    const dists = [];
    for(let i = 0; i < points.length; i++) {
        for(let j = i + 1; j < points.length; j++) {
            const conn = {
                a: lines[i],
                b: lines[j],
                dist: Math.sqrt(Math.pow(points[i][0] - points[j][0], 2) + Math.pow(points[i][1] - points[j][1], 2) + Math.pow(points[i][2] - points[j][2], 2))
            }
            dists.push(conn);
        }
    }
    dists.sort((a,b) => a.dist - b.dist);
    // Our adjacencies are now in dists
    const connections = new Map();
    for(let i = 0; i < 1000; i++) {
        const first = connections.get(dists[i].a);
        const second = connections.get(dists[i].b);
        if(first) {

        }
    }
}

solve();
