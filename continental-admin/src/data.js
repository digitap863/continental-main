// // * fake data's
// import { faker } from '@faker-js/faker';

// export function createRandomUser() {
//   return {
//     profile: faker.image.avatar(),
//     firstName: faker.person.firstName(),
//     lastName: faker.person.lastName(),
//     age: faker.datatype.number(40),
//     visits: faker.datatype.number(1000),
//     progress: faker.datatype.number(100),
//   };
// }

// export const USERS = faker.helpers.multiple(createRandomUser, {
//   count: 30,
// });


import { faker } from '@faker-js/faker';

export function createRandomUser() {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();

  return {
    fullName: `${firstName} ${lastName}`,
    mobileNumber: faker.phone.number(),
    email: faker.internet.email(),
    course: faker.random.word(),
    country: faker.address.country(),
  };
}

export const USERS = faker.helpers.multiple(createRandomUser, {
  count: 30,
});

