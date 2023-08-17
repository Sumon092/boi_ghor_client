import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';


export default function MainLayout() {
  return (
    <div>
      <NavBar />
      <div className="pt-16 pl-8 pr-8">
        <Outlet />
      </div>
    </div>
  );
}
