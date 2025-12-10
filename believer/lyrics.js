const lyrics = [
  "First things first",
  "I'ma say all the words inside my head",
  "I'm fired up and tired of the way",
  "that things have been, oh-ooh",
  "The way that things have been, oh-ooh",
  "Second things second",
  "Don't you tell me what:",
  "you think that I could be",
  "I'm the one at the sail",
  "I'm the master of my sea, oh-ooh",
  "The master of my sea, oh-ooh",
  "",
  "I was broken from a young age",
  "Taking my sulking to the masses",
  "Writing my poems for the few",
  "That look to me, took to me",
  "shook to me, feeling me",
  "Singing from heartache from the pain",
  "Taking my message from the veins",
  "Speaking my lesson from the brain",
  "Seeing the beauty through the...",
  "",
  "Pain!",
  "You made me a, you made me a believer, believer",
  "Pain!",
  "You break me down and build me up, believer, believer",
  "Pain!",
];

const colorAndTime = [
  { color: "31m", speed: 70 },
  { color: "32m", speed: 70 },
  { color: "33m", speed: 70 },
  { color: "34m", speed: 70 },
  { color: "35m", speed: 120 },
  { color: "36m", speed: 100 },
  { color: "37m", speed: 70 },
  { color: "32m", speed: 70 },
  { color: "31m", speed: 70 },
  { color: "33m", speed: 130 },
  { color: "34m", speed: 100 },
  { color: "35m", speed: 70 },
  { color: "36m", speed: 50 },
  { color: "37m", speed: 50 },
  { color: "31m", speed: 50 },
  { color: "32m", speed: 50 },
  { color: "33m", speed: 50 },
  { color: "34m", speed: 50 },
  { color: "35m", speed: 50 },
  { color: "36m", speed: 50 },
  { color: "37m", speed: 50 },
  { color: "32m", speed: 50 },
  { color: "33m", speed: 100 },
  { color: "34m", speed: 120 },
  { color: "35m", speed: 90 },
  { color: "36m", speed: 120 },
  { color: "37m", speed: 80 },
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
