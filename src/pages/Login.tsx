
import { Link } from 'react-router-dom';
import { cn } from '../lib/utility';
import { buttonVariants } from '../components/UI/Button';
import { LoginForm } from '../components/LoginForm';
import LoginImage from '../assets/images/Login.png';


export default function Login() {
  return (
    <>
      <div className="container relative hidden h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <Link
          to="/signup"
          className={cn(
            buttonVariants({ variant: 'ghost', size: 'sm' }),
            'absolute right-4 top-4 md:right-8 md:top-8'
          )}
        >
          Signup
        </Link>
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div
            className="absolute inset-0 bg-cover"
            
          ><img src={LoginImage} alt="" /></div>
          <div className="relative z-20 flex items-center text-lg font-medium">
            <img className="h-8" src={"logo"} alt="" />
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2"></blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Login to your account
              </h1> 
            </div>
            <LoginForm />
          </div>
        </div>
      </div>
    </>
  );
}
