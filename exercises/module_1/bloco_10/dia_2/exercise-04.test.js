const getRepos = require('./exercise-04');

describe('Test getRepos funstion', () => {
  
  // With async.
  it('should contain two specific info', async () => {
    expect.assertions(2);

    const result = await getRepos('https://api.github.com/orgs/tryber/repos');
    expect(result).toContain('sd-01-week4-5-project-todo-list');
    expect(result).toContain('sd-01-week4-5-project-meme-generator');
  });

  // With then.
  it('should contain two specific info', () => {
    expect.assertions(2);

    return getRepos('https://api.github.com/orgs/tryber/repos').then((result) => {
      expect(result).toContain('sd-01-week4-5-project-todo-list');
      expect(result).toContain('sd-01-week4-5-project-meme-generator');
    });
  });

});