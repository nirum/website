/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { repositories } from '../components/metadata';

const fetchMock = jest.fn();

jest.mock('node-fetch', () => ({
  __esModule: true,
  default: fetchMock,
}));

const fetch = require('node-fetch').default;

describe('pages/code getStaticProps', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    fetch.mockReset();
  });

  it('requests each repository and returns data payloads', async () => {
    const responses = repositories.map((full_name, index) => ({
      full_name,
      stargazers_count: index,
      forks_count: index + 1,
      description: `Repo ${index}`,
      html_url: `https://github.com/${full_name}`,
    }));
    const queue = [...responses];
    fetch.mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(queue.shift()),
      })
    );

    const { getStaticProps } = await import('../pages/code');
    const result = await getStaticProps();

    expect(fetch).toHaveBeenCalledTimes(repositories.length);
    repositories.forEach((repo, index) => {
      const callArg = fetch.mock.calls[index][0];
      expect(callArg.toString()).toBe(
        `https://api.github.com/repos/${repo}`
      );
    });
    expect(result.props.repos).toEqual(responses);
  });
});

describe('CodePage component', () => {
  it('renders pluralized counts and descriptions', () => {
    const { default: CodePage } = require('../pages/code');
    render(
      <CodePage
        repos={[
          {
            full_name: 'nirum/example',
            stargazers_count: 1,
            forks_count: 0,
            html_url: 'https://github.com/nirum/example',
            description: 'Great :sparkles:',
          },
        ]}
      />
    );

    expect(screen.getByText('nirum/example')).toBeInTheDocument();
    expect(screen.getByText('1 star')).toBeInTheDocument();
    expect(screen.getByText('0 forks')).toBeInTheDocument();
    expect(screen.getByText('Great ✨')).toBeInTheDocument();
  });
});
