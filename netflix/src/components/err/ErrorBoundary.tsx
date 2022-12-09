import { Component, ErrorInfo } from "react";

class ErrorBoundary extends Component<
  {},
  { error: Error | null; errorInfo: any; props: any }
> {
  constructor(props: any) {
    super(props);
    this.state = { error: null, errorInfo: null, props };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    this.setState({
      error,
      errorInfo,
    });
    console.log(errorInfo);
  }

  render() {
    if (this.state.errorInfo) {
      // Error path
      return (
        <div>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: "pre-wrap" }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }
    const { children } = this.state.props;
    return children;
  }
}

export default ErrorBoundary;
