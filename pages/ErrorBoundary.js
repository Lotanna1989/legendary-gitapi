import React from "react";
import "./ErrorBoundary.css"; // Import the CSS file

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught an error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="errorboundary-container">
          <div className="errorboundary-content">
            <h1>Something went wrong!</h1>
            <p>Please try refreshing the page or contact support.</p>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
