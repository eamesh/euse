import { Outlet } from 'react-router-dom';

export default function AppProviders() {
  return (
    <div>
      app provider
      <Outlet />
    </div>
  );
}
