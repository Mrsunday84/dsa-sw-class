function greet(name) {
    return `hello, ${name}!`;
}

const names = [
    'Olivia', 'Liam', 'Emma', 'Noah', 'Amelia',
    'Oliver', 'Charlotte', 'Elijah', 'Sophia', 'Mateo',
];

names.forEach(name => console.log(greet(name)));