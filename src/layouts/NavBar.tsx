import { Link } from "react-router-dom";
import { Button } from "../components/UI/Button";
import logo from "../assets/logo.png";
import { HiBookOpen, HiHeart } from "react-icons/hi";
import { useAppDispatch } from "../redux/hook";
import { logout } from "../redux/features/user/userSlice";
import useAuth from "../hooks/useAuth";
import "../styles/Card.css";
import { useState } from "react";
import ReadingLists from "../components/ReadingLists";
import WishLists from "../components/WishLists";

const NavBar = () => {
  const [hideTimeout, setHideTimeout] = useState<number | null>(null);
  const [cardContent, setCardContent] = useState<string>("");

  const hideCardAfterDelay = (buttonType: string) => {
    const card = document.querySelector(".card") as HTMLElement;
    if (card) {
      const timeout = window.setTimeout(() => {
        card.style.display = "none";
        setCardContent("");
      }, 1000);
      setHideTimeout(timeout);

      if (buttonType === "wishlists") {
        setCardContent("wishlists");
      }
      if (buttonType === "reading") {
        setCardContent("reading");
      }
    }
  };
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
                <Button
                  variant="ghost"
                  className="reading text-red-500"
                  onMouseEnter={() => {
                    const card = document.querySelector(".card") as HTMLElement;
                    if (card) {
                      card.style.display = "block";
                    }
                  }}
                  onMouseLeave={() => hideCardAfterDelay("reading")}
                >
                  <HiBookOpen size="25" />
                  <div
                    className="card"
                    onMouseEnter={() => {
                      if (hideTimeout) {
                        window.clearTimeout(hideTimeout);
                        setHideTimeout(null);
                      }
                    }}
                    onMouseLeave={() => hideCardAfterDelay("reading")}
                  >
                    <div className="card-content">
                      {cardContent === "reading" && <ReadingLists />}
                    </div>
                  </div>
                </Button>
              </li>

              <li>
                <Button
                  variant="ghost"
                  className="wishlists text-red-500"
                  onMouseEnter={() => {
                    const card = document.querySelector(".card") as HTMLElement;
                    if (card) {
                      card.style.display = "block";
                    }
                  }}
                  onMouseLeave={() => hideCardAfterDelay("wishlists")}
                >
                  <HiHeart size="25" />
                  <div
                    className="card"
                    onMouseEnter={() => {
                      if (hideTimeout) {
                        window.clearTimeout(hideTimeout);
                        setHideTimeout(null);
                      }
                    }}
                    onMouseLeave={() => hideCardAfterDelay("wishlists")}
                  >
                    <div className="card-content">
                      {cardContent === "wishlists" && <WishLists />}
                    </div>
                  </div>
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
