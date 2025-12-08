const lyrics = [
  "Bana ke manzil mujhko",
  "kahin bhatak na jana tum",
  "Mileinge laakhon aashiq",
  "kahin behak na jana tum",
  "Bana ke manzil mujhko",
  "kahin bhatak na jana tum",
  "Mileinge laakhon aashiq",
  "kahin behak na jana tum",
  "Ye tera dil, hay, tera dil",
  "Tum isko dene se na ghabrana",
  "Saja ke khud ko, saja ke khud ko mere labon pe",
  "Kahin pighal na jana sanam",
];

const colorAndTime = [
  { color: "36m", speed: 100 },
  { color: "33m", speed: 150 },
  { color: "35m", speed: 100 },
  { color: "33m", speed: 150 },
  { color: "36m", speed: 100 },
  { color: "33m", speed: 150 },
  { color: "35m", speed: 100 },
  { color: "33m", speed: 100 },
  { color: "31m", speed: 200 },
  { color: "32m", speed: 100 },
  { color: "32m", speed: 160 },
  { color: "32m", speed: 180 },
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
