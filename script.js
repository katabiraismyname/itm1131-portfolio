const modules = [
  { name: "Teaching learning and assessment", hours: 12 },
  { name: "Discrete math", hours: 14 },
  { name: "Web development", hours: 12 },
  { name: "Computer literacy", hours: 10 },
  { name: "Foundations of information systems", hours: 9 },
  { name: "Computer repair and assembly", hours: 5 },
];

const longModules = modules.filter(m => m.hours > 10);

console.log("Modules over 10 hours:");
longModules.forEach(m => {
  console.log(`${m.name}: ${m.hours} hours`);
});

modules.push({ name: "Information technology", hours: 11 });

const updatedLong = modules.filter(m => m.hours > 10);

console.log("After adding a seventh module:");
updatedLong.forEach(m => {
  console.log(`${m.name}: ${m.hours} hours`);
});