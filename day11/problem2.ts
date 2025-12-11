import * as fs from 'fs';

function solve() {
    const input = fs.readFileSync("input.txt", "utf8");
    const lines: string[] = input.split("\r\n");
    const map = new Map<string, Set<string>>();
    for(const line of lines) {
        const reactors = line.split(/[:\s]+/);
        map.set(reactors[0], new Set(reactors.slice(1)));
    }
    console.log(countPaths("svr", "fft", map) * countPaths("fft", "dac", map) * countPaths("dac", "out", map));
}

function countPaths(curr: string, target: string, map: Map<string, Set<string>>, memo = new Map<string, number>()) {
    if(target === curr) {
        return 1;
    }
    const memCount = memo.get(curr);
    if(memCount || memCount === 0) {
        return memCount;
    }

    let count = 0;
    const conns = map.get(curr) || [];
    for(const conn of conns) {
        count += countPaths(conn, target, map, memo);
    }
    memo.set(curr, count);
    return count;
}

solve();
