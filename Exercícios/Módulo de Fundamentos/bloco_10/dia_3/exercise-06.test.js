const fetchJoke = require("./exercise-06")
const fetch = require('node-fetch');

jest.mock('node-fetch');

describe('Testing fetchJoke function', () => {
  
  it('should return a object', async () => {
    expect.assertions(1);
    
    fetch.mockImplementation( async () => {
      return {
        json: async () => {
          return {
            id: '7h3oGtrOfxc',
            joke: 'Whiteboards ... are remarkable.',
            status: 200
          }
        }
      }
    });

    const result = await fetchJoke();
    expect(result).toBe('Whiteboards ... are remarkable.');
  });
});