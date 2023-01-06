import { ReactNode } from 'react';

type AppStateProps = {
  children: ReactNode;
};

export default function AppState(props: AppStateProps) {
  const { children } = props;

  return <div>{children}</div>;
}
