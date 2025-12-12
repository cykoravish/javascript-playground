const lyrics = [
  "Baby show me you can calm down",
  "calm down",
  "Dance with me and take the lead now",
  "lead now (Lead now)",
  "Got you so high that",
  "you can't come down, come down",
  "Don't you ask,",
  "you know you're allowed,",
  "allowed (Oh, no)",
];

const colorAndTime = [
  { color: "36m", speed: 80 },
  { color: "33m", speed: 80 },
  { color: "35m", speed: 80 },
  { color: "33m", speed: 80 },
  { color: "36m", speed: 80 },
  { color: "33m", speed: 80 },
  { color: "35m", speed: 80 },
  { color: "33m", speed: 80 },
  { color: "31m", speed: 80 },
];

let count = 0;
for (let line of lyrics) {
  console.log("");
  for (let char of line) {
    await new Promise((resolve) =>
      setTimeout(resolve, colorAndTime[count].speed)
    );
    process.stdout.write(`\x1b[${colorAndTime[count].color}${char}\x1b[0m`);
  }
  count++;
}
console.log("");
