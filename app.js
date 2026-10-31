function greet(name) {
    return `hello, ${name}!`;
}

const names = [
    'Olivia', 'Liam', 'Emma', 'Noah', 'Amelia',
    'Oliver', 'Charlotte', 'Elijah', 'Sophia', 'Mateo',
    'Isabella', 'Lucas', 'Mia', 'Levi', 'Evelyn',
    'James', 'Luna', 'Ethan', 'Harper', 'Asher',
    'Camila', 'Leo', 'Ellie', 'Mason', 'Gianna',
    'Logan', 'Layla', 'Aiden', 'Aria', 'Jackson',
    'Nora', 'Grayson', 'Chloe', 'Ezra', 'Lily',
    'Hudson', 'Eleanor', 'Luca', 'Violet', 'Sebastian',
    'Aurora', 'Muhammad', 'Hazel', 'Jack', 'Penelope',
    'Owen', 'Zoe', 'Theodore', 'Riley', 'David'
];

names.forEach(name => console.log(greet(name)));