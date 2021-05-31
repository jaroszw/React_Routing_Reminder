import { Fragment } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const QuoteList = (props) => {
  const history = useHistory();
  const location = useLocation();
  // const match = useRouteMatch();

  const searchParams = new URLSearchParams(location.search);
  const isSortAsc = searchParams.get('sort') === 'asc';

  const changeSortingHandler = () => {
    // or useRouteMatch with .path
    // history.push(`${match.path}?sort=` + (isSortAsc ? 'des' : 'asc'));

    // or useLocation with .patname
    history.push(`${location.pathname}?sort=${isSortAsc ? 'des' : 'asc'}`);

    // insetad of string we can add object as below
    // history.push({
    //   pathname: location.pathname,
    //   search: `?sort=${isSortAsc ? 'des' : 'asc'}`,
    // });
  };

  const sortedQuotes = sortQuotes(props.quotes, isSortAsc);

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>
          Sort {isSortAsc ? 'descending' : 'Ascending'}
        </button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
