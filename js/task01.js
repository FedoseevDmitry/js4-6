const filter = (arr1, arr2) => {
  const filteredStudents = [];

  for (let i = 0; i < arr1.length; i++) {

    if (!(arr1.includes(arr1[i]) && arr2.includes(arr1[i]))) {
      filteredStudents.push(arr1[i]);
    };
  };

  return filteredStudents;
};

const allStudents = ['Смирнов', 'Иванов', 'Кузнецов', 'Соколов', 'Попов',
'Лебедев', 'Козлов', 'Новиков'];

const failedStudents = ['Иванов', 'Попов'];

console.log(`Экзамен сдали: ${filter(allStudents, failedStudents)}`);