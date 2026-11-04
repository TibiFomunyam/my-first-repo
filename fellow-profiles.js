let fellows = [
    {
        name: "Ada",
        role: "Developer",
        points: 120
    },
    {
        name: "John",
        role: "Designer",
        points: 100
    },
    {
    name: "Mary",
    role: "Frontend Developer",
    points: 150
},
{
    name: "Peterr",
    role: "Backend Developer",
    points: 90
},
{
    name: "Sarah",
    role: "Software Engineer",
    points: 180
}  
];

console.log(fellows);
console.log(fellows.length);
for (let fellow of fellows) {
    console.log(`${fellow.name} - ${fellow.role} - ${fellow.points} points`);
}