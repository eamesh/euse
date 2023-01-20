import { ReactNode, useEffect } from 'react';

type AppProps = {
  children: ReactNode;
};

export default function AppState(props: AppProps) {
  const { children } = props;

  return <>{children}</>;
}
