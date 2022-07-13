const addPrefix = (arr, prefix) => {
  const namesPrefix = [];

  for (let i = 0; i < arr.length; i++) {
    let addedPrefix = prefix + ' ' + arr[i];

    namesPrefix.push(addedPrefix);
  }

  return namesPrefix.join(', ');
};

const names = ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan',
'Michael', 'Alexander'];

console.log(`После обработки: ${addPrefix(names, 'Mr')}`);