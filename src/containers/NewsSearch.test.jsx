import React from 'react';
import { render, screen } from '@testing-library/react';
import NewsSearch from './NewsSearch';

describe('News Article Container', () => {
  it('displays a list of Articles and search them', async () => {
    render(<NewsSearch />);

    screen.getByText('Loading...');
  });
});
