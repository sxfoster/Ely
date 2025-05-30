import React from 'react';
import { render, screen } from '@testing-library/react';
import Nav from '../Nav'; // Adjust the import path as needed

// Mock next/navigation
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    pathname: '/',
    push: jest.fn(),
  }),
  usePathname: ()_ => '/'
}));

describe('Nav Component', () => {
  it('renders navigation links', () => {
    render(<Nav />);

    // Check for a few links by their text content
    // Adjust these texts if your Nav component has different link names
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Services')).toBeInTheDocument();
    // You might have a booking link or button
    // expect(screen.getByText(/book now/i)).toBeInTheDocument();
  });

  it('renders the logo or brand name', () => {
    render(<Nav />);
    // Assuming your logo is an image with alt text or you have a brand name text
    // Adjust if your logo is identified differently
    const logo = screen.queryByAltText('Elysian Beauty Studio Logo'); // Or screen.getByText('Your Brand Name');
    if (logo) {
      expect(logo).toBeInTheDocument();
    } else {
      // If no specific logo/brand text, maybe check for a link to home
      expect(screen.getByRole('link', { name: /home/i })).toHaveAttribute('href', '/');
    }
  });
});
