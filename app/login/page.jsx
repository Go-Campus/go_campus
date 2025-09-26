"use client";

import { useState } from "react";
import { Mail, Apple, Facebook } from "lucide-react";
import Input from "../../components/input/input.jsx";
import Button from "../../components/button/index.jsx";
import { AppleIcon, FaceBookIcon, GoogleIcon, GoWhiteIcon } from "../../public/index.js";
import Image from "next/image.js";
import { postData } from "../../utils/api.js";
import { loginUser } from "../../utils/auth.js";
import { useRouter } from "next/navigation";


export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await postData("/auth/login", {
        email,
        password,
        authenticationType: "email"
      });

      if (response.success) {
        // Store token and user data
        loginUser(response.token, response.user);
        
        // Redirect to home page or dashboard
        router.push("/home");
      } else {
        setError(response.message || "Login failed");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError(
        err.response?.data?.message || 
        err.message || 
        "An error occurred during login. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleSocialLogin = (provider) => {
    // Handle social login logic here
    console.log("Social login with:", provider);
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Side - 60% - Show bg only on md+ */}
      <div
        className="hidden md:flex w-3/5  p-10  bg-cover bg-center"
        style={{ backgroundImage: "url('/images/loginImage.svg')" }}
      >
        {/* first row  */}
        <div  className="flex flex-col gap-2">
          <div>

          
          <h1 className="text-[30px] gap-2 text-white flex font-bold">
            <span>
              <Image  className="w-[30px]" src={GoWhiteIcon} />
            </span>
            Go Campus
          </h1>
          </div>
          <div className=" ">
          <h1 className=" flex leading-16  text-[48px] text-white">
            Find,Book 
            <br/>
          
            Experience
          
          </h1>
          </div>
          <p className="text-[56px] leading-12 text-white font-[300]">
          Your Ultimate Event  <br/> 
          Journey Starts Here
          </p>
        </div>
        {/* Optionally, overlay or content can go here */}
      </div>
      {/* Right Side - 40% */}
      <div className="w-full md:w-2/5 flex items-center justify-center p-8">
        {/* Login form and content goes here */}
        <div className="w-full   px-5 max-w-md">
          <div className="">
            <h2 className="text-[33px] font-[400] text-gray-900 mb-2">
              Welcome Back 👋
            </h2>
            <p className="text-gray-600 text-[18px]">
              Today is a new day. It's your day. You shape it.
            </p>
            <p className="text-gray-600 text-sm">
              Sign in to start Explore Events
            </p>
          </div>

          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}
            
            <div className="space-y-4">
              <div>
                <Input
                  id="email"
                  label="Email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Example@email.com"
                  className="bg-[#F7FBFF] text-[14px]"
                />
              </div>

              <div>
                <Input
                  id="password"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="at least 8 characters"
                  className="bg-[#F7FBFF] text-[14px]"
                />
              </div>
            </div>

            <div className="flex items-center justify-end">
              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  Forgot Password?
                </a>
              </div>
            </div>

            <div>
              <Button type="submit" disabled={loading}>
                {loading ? "Signing in..." : "Sign in"}
              </Button>
            </div>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">
                    Or Sign in with
                  </span>
                </div>
              </div>

              <div className="mt-6 flex  justify-center  gap-3">
                <button
                  type="button"
                  onClick={() => handleSocialLogin("google")}
                  className=" justify-center p-3    bg-[#F3F9FA]  rounded-lg shadow-sm  text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors duration-200"
                >
                  <Image src={GoogleIcon} alt="Google" />
                </button>

                <button
                  type="button"
                  onClick={() => handleSocialLogin("google")}
                  className=" justify-center p-3     bg-[#F3F9FA] rounded-lg shadow-sm  text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors duration-200"
                >
                  <Image src={FaceBookIcon} alt="Google" />
                </button>

                <button
                  type="button"
                  onClick={() => handleSocialLogin("google")}
                  className=" justify-center  p-3       bg-[#F3F9FA]  rounded-lg shadow-sm  text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors duration-200"
                >
                  <Image src={AppleIcon} alt="Google" />
                </button>
              </div>
            </div>
          </form>

          <div className="text-center mt-6">
            <p className="text-sm text-gray-600">
              Don't you have an account?{" "}
              <a
                href="#"
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
