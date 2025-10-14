/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';

jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ href, children, ...props }) => (
    <a href={typeof href === 'string' ? href : href?.pathname} {...props}>
      {children}
    </a>
  ),
}));

describe('PubCard', () => {
  it('shows publication year, location, and resource links', () => {
    const PubCard = require('../components/pub-card').default;
    render(
      <PubCard
        title="Long Short-Term Science"
        authors={['Jane Doe', 'Niru Maheswaranathan']}
        date="2024-02-01T00:00:00.000Z"
        location="ExampleConf"
        image="/pubs/example.png"
        url="https://example.com/paper"
        pdf="https://example.com/paper.pdf"
        code="https://github.com/example/paper"
      />
    );

    expect(screen.getByText(/2024/)).toHaveTextContent('2024');
    expect(screen.getByText(/ExampleConf/)).toBeInTheDocument();
    expect(screen.getByText('Long Short-Term Science')).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', '/pubs/example.png');
    expect(
      screen.getByRole('link', { name: /URL$/ })
    ).toHaveAttribute('href', 'https://example.com/paper');
    expect(
      screen.getByRole('link', { name: /PDF$/ })
    ).toHaveAttribute('href', 'https://example.com/paper.pdf');
    expect(
      screen.getByRole('link', { name: /CODE$/ })
    ).toHaveAttribute('href', 'https://github.com/example/paper');
  });

  it('hides optional pills when data is missing', () => {
    const PubCard = require('../components/pub-card').default;
    render(
      <PubCard
        title="Minimal Study"
        authors={['Jane Doe']}
        date="2021-05-20T00:00:00.000Z"
        location="ICML"
        image="/pubs/minimal.png"
      />
    );

    expect(screen.queryByText(/PDF$/)).not.toBeInTheDocument();
    expect(screen.queryByText(/CODE$/)).not.toBeInTheDocument();
    expect(screen.getByText('Minimal Study')).toBeInTheDocument();
  });
});
