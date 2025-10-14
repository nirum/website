/**
 * @jest-environment node
 */
import path from 'path';

jest.mock('fs', () => ({
  readdirSync: jest.fn(),
  readFileSync: jest.fn(),
}));

const fs = require('fs');
const realFs = jest.requireActual('fs');

describe('pages/research getStaticProps', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    fs.readdirSync.mockReset();
    fs.readFileSync.mockReset();
  });

  it('loads publication metadata, injects images, and sorts by date desc', async () => {
    fs.readdirSync.mockReturnValue(['first-paper.yml', 'older-paper.yml']);
    fs.readFileSync.mockImplementation((filepath) => {
      const filename = path.basename(filepath);
      return realFs.readFileSync(
        path.join(__dirname, 'fixtures/publications', filename),
        'utf-8'
      );
    });

    const { getStaticProps } = await import('../pages/research');
    const result = await getStaticProps();

    expect(result.props.pubs).toHaveLength(2);
    expect(result.props.pubs[0]).toMatchObject({
      title: 'Future Interfaces',
      image: '/pubs/first-paper.png',
    });
    expect(new Date(result.props.pubs[0].date).toISOString()).toBe(
      '2024-09-15T00:00:00.000Z'
    );
    expect(result.props.pubs[1]).toMatchObject({
      title: 'Early Vision Systems',
      image: '/pubs/older-paper.png',
    });
    const dates = result.props.pubs.map((pub) =>
      new Date(pub.date).getTime()
    );
    expect(dates).toEqual([...dates].sort((a, b) => b - a));
  });
});
