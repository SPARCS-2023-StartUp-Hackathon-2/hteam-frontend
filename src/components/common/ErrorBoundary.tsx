import { Box, Text, Title } from "@mantine/core";
import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <Box>
          <Title order={2}>에러가 발생했습니다.</Title>
          {this.state.error && <Text>{this.state.error.message}</Text>}
        </Box>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
