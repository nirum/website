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

const mockedUseRouter = jest.fn();

jest.mock('next/router', () => ({
  useRouter: () => mockedUseRouter(),
}));

beforeAll(() => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
});

describe('ActiveLink', () => {
  beforeEach(() => {
    mockedUseRouter.mockReset();
  });

  it('appends the active class when href matches the current route', () => {
    mockedUseRouter.mockReturnValue({ asPath: '/about' });
    const ActiveLink = require('../components/active-link').default;

    const { container } = render(
      <ActiveLink href="/about" activeClassName="is-active">
        <span className="nav-item">About</span>
      </ActiveLink>
    );

    const span = container.querySelector('span');
    expect(span?.className).toBe('nav-item is-active');
  });

  it('leaves classes untouched when href does not match', () => {
    mockedUseRouter.mockReturnValue({ asPath: '/code' });
    const ActiveLink = require('../components/active-link').default;

    const { container } = render(
      <ActiveLink href="/about" activeClassName="is-active">
        <span className="nav-item">About</span>
      </ActiveLink>
    );

    const span = container.querySelector('span');
    expect(span?.className).toBe('nav-item');
  });
});

describe('Header', () => {
  beforeEach(() => {
    mockedUseRouter.mockReset();
  });

  it('renders navigation links and marks the active route', () => {
    mockedUseRouter.mockReturnValue({ asPath: '/about' });
    const Header = require('../components/header').default;

    render(<Header />);

    expect(screen.getByText('About').className).toContain('border-b-2');
    expect(screen.getByText('Research').className).not.toContain('border-b-2');
    expect(screen.getByText('Code').className).not.toContain('border-b-2');
  });
});
