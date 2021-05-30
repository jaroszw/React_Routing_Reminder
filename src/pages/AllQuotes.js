import React from 'react';
import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Wojtek', text: 'Lerning React is fun' },
  { id: 'q2', author: 'Seba', text: 'JavaScript is complicated' },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES}>All quotes</QuoteList>;
};

export default AllQuotes;
