import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import AllQuotes from "./pages/AllQuotes";

import Layout from "./components/layout/Layout";

// React Lazy
// import NoFound from "./pages/NoFound";
// import NewQuote from "./pages/NewQuote";

import LoadingSpinner from "./components/UI/LoadingSpinner";

const NewQuote = React.lazy(() => import("./pages/NewQuote"));
const QuoteDetail = React.lazy(() => import("./pages/QuoteDetail"));
const NoFound = React.lazy(() => import("./pages/NoFound"));

function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes" />
          </Route>
          <Route path="/quotes" exact>
            <AllQuotes />
          </Route>
          <Route path="/quotes/:quoteId">
            <QuoteDetail />
          </Route>
          <Route path="/new-quote">
            <NewQuote />
          </Route>
          <Route path="*">
            <NoFound />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
