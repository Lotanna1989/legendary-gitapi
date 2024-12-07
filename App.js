import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RepoList from "./Components/RepoList";
import RepoDetails from "./Components/RepoDetails";
import NotFoundPage from "./pages/NotFoundPage";
import ErrorBoundary from "./pages/ErrorBoundary";

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<RepoList />} />
          <Route path="/repo/:repoName" element={<RepoDetails />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
