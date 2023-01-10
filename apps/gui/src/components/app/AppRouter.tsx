import { LayoutDashboard } from '@euse/core';
import { HashRouter, Routes, Route } from 'react-router-dom';
import DashboardLayout from '../dashboard/DashboardLayout';
import DashboardSideBar from '../dashboard/DashboardSideBar';
import AppProviders from './AppProviders';

export default function AppRouter() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<AppProviders outlet />}>
          <Route element={<LayoutDashboard sidebar={<DashboardSideBar simple />} outlet />}>
            <Route index element={<DashboardLayout />}></Route>
          </Route>
        </Route>
      </Routes>
    </HashRouter>
  );
}
