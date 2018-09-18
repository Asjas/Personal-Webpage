// __mocks__/gatsby-link.js
jest.unmock('gatsby');
module.exports = jest.requireActual('gatsby-link');
