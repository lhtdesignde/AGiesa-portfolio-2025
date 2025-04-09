import { render } from '@testing-library/react';
import { expect, it, describe } from 'vitest';
import Loading from './Loading';

describe('Loading', () => {
  it('renders loading component with default height', () => {
    const { getByLabelText } = render(<Loading height={50} />);
    const svgElement = getByLabelText('Loading');

    expect(svgElement).toBeDefined();
    expect(svgElement.tagName).toBe('svg');
    expect(svgElement.getAttribute('height')).toBe('50');
  });

  it('renders loading component with custom height', () => {
    const { getByLabelText } = render(<Loading height={100} />);
    const svgElement = getByLabelText('Loading');

    expect(svgElement).toBeDefined();
    expect(svgElement.getAttribute('height')).toBe('100');
  });

  it('renders loading component with custom message', () => {
    const { getByText } = render(<Loading height={50} message="Loading data..." />);
    const messageElement = getByText('Loading data...');

    expect(messageElement).toBeDefined();
  });

  it('does not render message paragraph when message is not provided', () => {
    const { queryByText } = render(<Loading height={50} />);

    expect(queryByText('Loading data...')).toBe(null);
  });

  it('applies additional class when extensionClass is provided', () => {
    const { container } = render(<Loading height={50} extensionClass="custom-class" />);
    const articleElement = container.querySelector('article');

    expect(articleElement?.getAttribute('class')).toContain('custom-class');
  });
});
