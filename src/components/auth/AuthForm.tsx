
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/sonner";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export default function AuthForm() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const navigate = useNavigate();

  const validateForm = () => {
    if (isSignUp && !fullName.trim()) {
      setErrorMessage("Full name is required");
      return false;
    }
    
    if (!email.trim()) {
      setErrorMessage("Email is required");
      return false;
    }
    
    if (!password.trim()) {
      setErrorMessage("Password is required");
      return false;
    }
    
    if (password.length < 6) {
      setErrorMessage("Password must be at least 6 characters");
      return false;
    }
    
    return true;
  };

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    
    if (!validateForm()) {
      return;
    }
    
    setLoading(true);

    try {
      if (isSignUp) {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              full_name: fullName,
            },
          },
        });
        
        if (error) throw error;
        
        toast.success("Registration successful! Please check your email for verification.");
        // Clear form
        setFullName("");
        setEmail("");
        setPassword("");
        // Automatically switch to sign in mode after successful registration
        setIsSignUp(false);
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        
        if (error) throw error;
        
        toast.success("Sign in successful!");
        navigate("/control-system/dashboard");
      }
    } catch (error: any) {
      let message = error.message;
      
      // Handle specific error cases
      if (message.includes("Database error saving new user")) {
        message = "Registration failed. Please try again later or contact support.";
      } else if (message.includes("Invalid login credentials")) {
        message = "Invalid email or password. Please try again.";
      } else if (message.includes("Email not confirmed")) {
        message = "Please check your email and confirm your account before signing in.";
      }
      
      setErrorMessage(message);
      toast.error(message);
      console.error("Authentication error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleAnonymousLogin = async () => {
    setLoading(true);
    setErrorMessage(null);
    
    try {
      const { error } = await supabase.auth.signInAnonymously();
      
      if (error) throw error;
      
      toast.success("Logged in anonymously!");
      navigate("/control-system/dashboard");
    } catch (error: any) {
      setErrorMessage("Anonymous login failed. Please try again.");
      toast.error("Anonymous login failed. Please try again.");
      console.error("Anonymous login error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>{isSignUp ? "Create Account" : "Sign In"}</CardTitle>
        <CardDescription>
          {isSignUp
            ? "Create your account to access the control system"
            : "Sign in to your account to continue"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {errorMessage && (
          <Alert variant="destructive" className="mb-4">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{errorMessage}</AlertDescription>
          </Alert>
        )}
        
        <form onSubmit={handleAuth} className="space-y-4">
          {isSignUp && (
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                id="fullName"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required={isSignUp}
                disabled={loading}
              />
            </div>
          )}
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={loading}
              minLength={6}
            />
          </div>
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Loading..." : isSignUp ? "Create Account" : "Sign In"}
          </Button>
          
          <Separator className="my-4" />
          
          <Button 
            type="button" 
            variant="outline" 
            className="w-full" 
            onClick={handleAnonymousLogin}
            disabled={loading}
          >
            Continue as Guest
          </Button>
          
          <Button
            type="button"
            variant="link"
            className="w-full"
            onClick={() => {
              setIsSignUp(!isSignUp);
              setErrorMessage(null);
              // Clear form when switching modes
              if (isSignUp) {
                setFullName("");
              }
              setEmail("");
              setPassword("");
            }}
            disabled={loading}
          >
            {isSignUp ? "Already have an account? Sign In" : "Need an account? Sign Up"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
