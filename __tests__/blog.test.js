/**
 * @jest-environment jsdom
 */
import path from 'path';
import React from 'react';
import { render, screen } from '@testing-library/react';

jest.mock('date-fns/formatDistance', () => ({
  __esModule: true,
  default: jest.fn(() => 'relative time'),
}));

jest.mock('fs', () => ({
  readdirSync: jest.fn(),
  readFileSync: jest.fn(),
}));

const fs = require('fs');
const realFs = jest.requireActual('fs');

describe('pages/blog getStaticProps', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    fs.readdirSync.mockReset();
    fs.readFileSync.mockReset();
  });

  it('filters drafts, normalizes fields, and sorts newest first', async () => {
    fs.readdirSync.mockReturnValue([
      'hello-world.md',
      'draft-post.md',
      'older-post.md',
    ]);
    fs.readFileSync.mockImplementation((filepath) => {
      const filename = path.basename(filepath);
      return realFs.readFileSync(
        path.join(__dirname, 'fixtures/posts', filename),
        'utf-8'
      );
    });
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

    const { getStaticProps } = await import('../pages/blog/index');
    const result = await getStaticProps();

    expect(result.props.posts).toHaveLength(2);
    expect(result.props.posts[0]).toMatchObject({
      slug: 'hello-world',
      title: 'Hello World',
    });
    expect(new Date(result.props.posts[0].date).toISOString()).toBe(
      '2023-03-02T00:00:00.000Z'
    );
    expect(result.props.posts[1]).toMatchObject({
      slug: 'older-post',
    });
    const dates = result.props.posts.map((p) => new Date(p.date).getTime());
    expect(dates).toEqual([...dates].sort((a, b) => b - a));

    expect(consoleSpy.mock.calls).toEqual([[false], [true], [false]]);
    consoleSpy.mockRestore();
  });
});

describe('BlogPage component', () => {
  it('renders links with relative publish dates', () => {
    const { default: BlogPage } = require('../pages/blog/index');

    render(
      <BlogPage
        posts={[
          {
            slug: 'hello-world',
            title: 'Hello World',
            date: new Date('2023-12-31T00:00:00Z').toISOString(),
          },
        ]}
      />
    );

    expect(
      screen.getByRole('link', { name: 'Hello World' })
    ).toHaveAttribute('href', 'blog/hello-world');
    expect(screen.getByText('relative time')).toBeInTheDocument();
  });
});
