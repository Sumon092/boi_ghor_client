import { Link } from "react-router-dom";
import { Button } from "../components/UI/Button";
import logo from '../assets/logo.png'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../components/UI/DropdownMenu";
import { HiBookOpen ,HiHeart} from "react-icons/hi";
import { Avatar, AvatarFallback, AvatarImage } from "../components/UI/Avatar";


const NavBar = () => {
    return (
        <nav className="w-full h-16 fixed top backdrop-blur-lg shadow-md z-10">
      <div className="h-full w-full bg-white/5">
        <div className="flex items-center justify-between w-full md:max-w-7xl h-full mx-auto p-8">
          <div className="flex justify-between font-bold items-center">
            <div className="mr-5"><img className="h-8" src={logo} alt="log" /></div>
            <div><p>Booi Ghor</p></div>
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
                <Button variant="link" asChild>
                  <Link to="/checkout">Checkout</Link>
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
              {/* <li>
                <Cart />
              </li> */}
              <li className="ml-5">
                <DropdownMenu>
                  <DropdownMenuTrigger className="outline-none">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="cursor-pointer">
                      Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer">
                      Billing
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer">
                      Team
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer">
                      Subscription
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    );
};

export default NavBar;