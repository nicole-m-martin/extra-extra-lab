import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NewsArticles from './NewsArticles';

// need this to pass tests with API key in env file
require('dotenv').config();

describe('News Article Container', () => {
  it('displays a list of Articles and search them', async () => {
    render(<NewsArticles />);

    screen.getByText('Loading...');

    const ul = await screen.findByRole('list', { name: 'articles' });
    expect(ul).not.toBeEmptyDOMElement();

    const input = await screen.findByLabelText('keyword-input');
    userEvent.type(input, 'beach');

    const submitButtonClick = await screen.findByRole('button', {
      name: 'find-articles',
    });
    userEvent.click(submitButtonClick);

    return waitFor(() => {
      const articles = screen.getAllByText('beach', { exact: false });
      expect(articles).toHaveLength(22);
    });
  });
});
