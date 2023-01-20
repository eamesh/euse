import { LayoutDashboard } from '@euse/core';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Matting from '../ai/matting/Matting';
import DashboardSideBar from '../dashboard/DashboardSideBar';
import Square from '../dashboard/Square';
import SettingsPanel from '../settings/SettingsPanel';
import AppProviders from './AppProviders';

export default function AppRouter() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<AppProviders outlet />}>
          <Route index element={<Navigate to="/dashboard" />} />
          <Route element={<LayoutDashboard sidebar={<DashboardSideBar simple />} outlet />}>
            <Route path="dashboard" element={<Square />} />
            <Route path="dashboard/settings/*" element={<SettingsPanel />} />
            <Route path="dashboard/ai/matting" element={<Matting />} />
          </Route>
        </Route>
      </Routes>
    </HashRouter>
  );
}
