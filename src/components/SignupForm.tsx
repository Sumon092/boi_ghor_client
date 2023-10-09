import { useState } from "react";
import { cn } from "../lib/utility";
import { Input } from "./UI/Input";
import { Button } from "./UI/Button";
import { useSignupMutation } from "../redux/features/user/userApi";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function SignupForm({ className, ...props }: { className: any }) {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [signup] = useSignupMutation();
  const navigate = useNavigate();

  const onSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      if (password !== confirmPassword) {
        toast.error("password does not match");
        return;
      }

      await signup({ data: { email, password } });
      toast.success("Signup successful");
      navigate("/login");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      console.error("Signup failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              id="password"
              placeholder="your password"
              type="password"
              autoCapitalize="none"
              autoComplete="off"
              autoCorrect="off"
              disabled={isLoading}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              id="confirmPassword"
              placeholder="confirm password"
              type="password"
              autoCapitalize="none"
              autoComplete="off"
              autoCorrect="off"
              disabled={isLoading}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <Button
            className="bg-blue-400 font-bold text-white"
            disabled={isLoading}
          >
            {isLoading && <p>Loading</p>}
            CREATE ACCOUNT
          </Button>
        </div>
      </form>
    </div>
  );
}
