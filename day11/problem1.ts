import * as fs from 'fs';

function solve() {
    const input = fs.readFileSync("input.txt", "utf8");
    const lines: string[] = input.split("\r\n");
    const map = new Map<string, Set<string>>();
    for(const line of lines) {
        const reactors = line.split(/[:\s]+/);
        map.set(reactors[0], new Set(reactors.slice(1)));
    }
    const stack: string[] = ["you"];
    let count = 0;
    while(stack.length > 0) {
        const curr = stack.pop();
        if(curr === "out") {
            count++;
        } else {
            stack.push(...Array.from(map.get(curr || "") || ""));
        }
    }
    console.log(count);
}

solve();
