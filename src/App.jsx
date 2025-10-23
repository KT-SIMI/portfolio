import { useState } from "react";
import "./App.css";

import ErrorBoundary from "../utils/ErrorBoundary";
import { usePageReady } from "../utils/PageReady";
import Loading from "./components/Loading";
import Homepage from "./components/pages/homepage";

function App() {
  const pageReady = usePageReady()

  if (!pageReady) return <Loading />
  return (
    <ErrorBoundary>
    <Homepage />
    </ErrorBoundary>
  );
}

export default App;
