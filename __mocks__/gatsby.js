// __mocks__/gatsby.js
const gatsby = jest.requireActual('gatsby');
module.exports = { ...gatsby, graphql: jest.fn() };
