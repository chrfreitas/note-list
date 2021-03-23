import faker from 'faker';

const DataSource = {
  get: () => [
    {
      title: faker.random.words(),
      subtitle: faker.random.words(),
      date: faker.date.past(),
      tags: [
        faker.random.word(),
        faker.random.word(),
        faker.random.word(),
        faker.random.word(),
        faker.random.word(),
      ],
    },
  ],
};

export default DataSource;
