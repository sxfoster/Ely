import React from 'react';
import { render, screen } from '@testing-library/react';
import ServicesCarousel from './ServicesCarousel';

describe('ServicesCarousel', () => {
  it('renders service titles', () => {
    const services = [
      { slug: 'a', image: '/a.png', alt: 'a', title: 'Title A', description: 'Desc' },
    ];
    render(<ServicesCarousel services={services} />);
    expect(screen.getByText('Title A')).toBeInTheDocument();
  });
});
