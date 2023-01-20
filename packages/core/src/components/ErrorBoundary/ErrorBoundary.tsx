import { Trans } from '@lingui/macro';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import qs from 'query-string';
import { Component, type ReactNode } from 'react';
import StackTrace from 'stacktrace-js';

import Button from '../Button';
import Flex from '../Flex';
import LayoutHero from '../LayoutHero';
import Link from '../Link';

const StyledPre = styled(Typography)(() => ({
  whiteSpace: 'pre-wrap',
}));

function formatStackTrace(stack: []) {
  const stackTrace = stack.map(
    ({ fileName, columnNumber, lineNumber, functionName }) =>
      `at ${fileName}:${lineNumber}:${columnNumber} ${functionName}`
  );
  return stackTrace.join('\n');
}

type ErrorBoundaryProps = {
  children?: ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
  error: Error | null;
  stacktrace: string;
};

export default class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      stacktrace: '',
    };
  }

  static getDerivedStateFromError(error: any) {
    // Update state so the next render will show the fallback UI.
    return {
      hasError: true,
      error,
    };
  }

  async componentDidUpdate(_prevProps: ErrorBoundaryProps, prevState: ErrorBoundaryState) {
    if (this.state.error && prevState.error !== this.state.error) {
      this.setState({
        stacktrace: formatStackTrace((await StackTrace.fromError(this.state.error)) as []),
      });
    }
  }

  handleReload = () => {
    window.location.hash = '#/';
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      const { stacktrace, error } = this.state;
      const issueLink = `https://github.com/eamesh/euse/issues/new?${qs.stringify({
        labels: 'bug',
        template: 'bug_report.yaml',
        title: `[BUG] ${error?.message}`,
        ui: 'GUI',
        logs: `${error?.message}\n\nURL\n${window.location.hash}\n\nStacktrace\n${stacktrace}`,
      })}`;
      // You can render any custom fallback UI
      return (
        <LayoutHero>
          <Flex flexDirection="column" gap={4}>
            <Typography variant="h5" textAlign="center" color="danger">
              <Trans>Something went wrong</Trans>
            </Typography>

            <Flex flexDirection="column">
              <Typography variant="h6">
                <Trans>Error:</Trans> {error?.message}
              </Typography>
              <StyledPre variant="body2">{stacktrace}</StyledPre>
            </Flex>

            <Flex justifyContent="center">
              <Link target="_blank" href={issueLink}>
                <Button nowrap={false} selected={false}>
                  <Trans>Report an Issue</Trans>
                </Button>
              </Link>
              &nbsp;
              <Button onClick={this.handleReload} color="primary">
                <Trans>Reload Application</Trans>
              </Button>
            </Flex>
          </Flex>
        </LayoutHero>
      );
    }

    return this.props.children;
  }
}