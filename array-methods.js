let students = [
  { name: 'Juan', grade: 88, section: 'A' },
  { name: 'Maria', grade: 72, section: 'B' },
  { name: 'Pedro', grade: 95, section: 'A' },
  { name: 'Anna', grade: 60, section: 'B' },
  { name: 'Mike', grade: 85, section: 'A' }
];

const sectionA = students.filter(({section}) => section === 'A');
const names = sectionA.map(({name}) => name);                 
const total = students.reduce((acc, total) => (acc + total.grade), 0);
const avgTotal = total / students.length;

console.log(sectionA);
console.log(names);
console.log(avgTotal);
