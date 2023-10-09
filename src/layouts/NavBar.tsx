import { Link } from "react-router-dom";
import { Button } from "../components/UI/Button";
import logo from "../assets/logo.png";
import { HiBookOpen, HiHeart } from "react-icons/hi";
import { useAppDispatch } from "../redux/hook";
import { logout } from "../redux/features/user/userSlice";
import useAuth from "../hooks/useAuth";

const NavBar = () => {
  const { auth } = useAuth();
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("token");
    window.location.href = "/";
  };
  return (
    <nav className="w-full h-16 fixed top backdrop-blur-lg shadow-md z-10">
      <div className="h-full w-full bg-white/5">
        <div className="flex items-center justify-between w-full md:max-w-7xl h-full mx-auto p-8">
          <div className="flex justify-between font-bold items-center">
            <Link to="/">
              <div className="mr-5">
                <img className="h-8" src={logo} alt="log" />
              </div>
            </Link>
            <div>
              <Link to="/">Boi Ghor</Link>
            </div>
          </div>
          <div>
            <ul className="flex items-center">
              <li>
                <Button variant="link" asChild>
                  <Link to="/">Home</Link>
                </Button>
              </li>
              <li>
                <Button variant="link" asChild>
                  <Link to="/">Books</Link>
                </Button>
              </li>
              <li>
                <Button variant="ghost">
                  <HiBookOpen size="25" />
                </Button>
              </li>
              <li>
                <Button variant="ghost">
                  <HiHeart size="25" />
                </Button>
              </li>
              {auth ? (
                <li className="ml-5">
                  <Button
                    variant="link"
                    className="btn-primary"
                    asChild
                    onClick={handleLogout}
                  >
                    <Link to="/">Logout</Link>
                  </Button>
                </li>
              ) : (
                <li className="ml-5">
                  <Button variant="link" className="btn-primary" asChild>
                    <Link to="/login">Login</Link>
                  </Button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
