import { HashRouter, Routes, Route } from 'react-router-dom';
import DashboardLayout from '../dashboard/DashboardLayout';
import AppProviders from './AppProviders';

export default function AppRouter() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<AppProviders outlet />}>
          <Route index element={<DashboardLayout />}></Route>
        </Route>
      </Routes>
    </HashRouter>
  );
}
