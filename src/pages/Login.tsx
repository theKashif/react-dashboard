import React, { useState } from "react";
import imgSrc from "../../src/assets/images/city.png";
import logoSrc from "../../src/assets/images/logo.png";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import ArabicIcon from "../components/svg/Arabic";
import TranslationIcon from "../components/svg/Translation";
import EyeIcon from "../components/svg/Eye";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [userName, setUserName] = useState("michaelw");
  const [password, setPassword] = useState("michaelwpass");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      await login(userName, password);
      navigate("/"); // redirect to home/dashboard after login
    } catch (err: any) {
      setError(err.message || "Failed to login");
    }
  };

  return (
    <div className="w-full bg-[#f8fafb] flex flex-col md:flex-row overflow-hidden shadow-lg min-h-screen">
      {/* Left side */}
      <div className="flex flex-col justify-center items-center p-10 md:p-16 bg-offWhite w-full md:w-1/2">
        <button
          aria-label="Switch to Arabic language"
          type="button"
          className="absolute w-[118px] h-[40px] top-6 left-6 flex items-center justify-center gap-2 px-3 py-2 rounded-md bg-white border border-skyGrey shadow-lg/2"
        >
          <ArabicIcon width={43} height={30} />
          <TranslationIcon size={24} />
        </button>
        <form
          className="bg-white rounded-xl p-8 w-full max-w-md items-center shadow-lg/5 border border-skyBlue"
          onSubmit={handleSubmit}
        >
          <h2 className="text-center text-[28px] font-semibold mb-8 text-[#222222]">
            Login
          </h2>
          <label
            className="block text-xs text-darkGrey font-normal mb-2"
            htmlFor="email"
          >
            E-mail
          </label>
          <input
            id="email"
            type="text"
            placeholder="Enter E-mail"
            className="w-full rounded-lg border border-skyGrey bg-[#f8fafb] text-xs text-[#222222] placeholder:text-[#aab0b8] px-4 py-3 mb-6 focus:outline-none focus:ring-2 focus:ring-[#aab0b8]"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
          <label
            className="block text-xs text-darkGrey font-normal mb-2"
            htmlFor="password"
          >
            Password*
          </label>
          <div className="relative">
            <input
              id="password"
              type="password"
              placeholder="Enter Password"
              className="w-full rounded-lg border border-skyGrey bg-skyBlue text-xs text-[#222222] placeholder:text-[#aab0b8] px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-[#aab0b8]"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer">
              <EyeIcon size={18} />
            </div>
          </div>
          {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
          <div className="flex justify-between items-center mt-6 mb-8 text-xs">
            <label className="flex items-center gap-2 cursor-pointer select-none text-darkGrey">
              Remember me
              <div className="inline-flex items-center">
                <label className="flex items-center cursor-pointer relative">
                  <input
                    type="checkbox"
                    className="peer h-4 w-4 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-primary checked:bg-primary checked:border-primary"
                    id="check"
                  />
                  <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3.5 w-3.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-width="1"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </label>
              </div>
            </label>

            <a href="#" className="hover:underline text-primary">
              Forgot your password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-[#dfdfdf] text-[#8D8C8E] font-bold rounded-md py-3 cursor-pointer"
          >
            Login
          </button>
        </form>
        <p className="mt-6 text-center text-xs text-primary">
          <a href="#" className="text-primary font-semibold hover:underline">
            Create an account?
          </a>
          <span className="text-black font-normal">
            {" "}
            Don't have an account?
          </span>
        </p>
      </div>

      {/* Right side */}
      <div className="hidden md:flex flex-col justify-around w-full md:w-1/2 relative overflow-hidden">
        <img
          src={imgSrc}
          alt="Cityscape at sunset with skyscrapers and reflection in water"
          className="w-[95%] h-[95%] object-cover rounded-xl align-center justify-center"
          loading="lazy"
        />
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center text-white font-semibold w-2/3 z-20">
          <div className="flex items-center justify-center gap-2 text-3xl mb-2">
            <img
              src={logoSrc}
              alt="Logo icon with circular design"
              className="w-[160px] h-auto"
            />
          </div>
          <p className="text-2xl md:text-4xl font-semibold">
            Your way to success
          </p>
        </div>

          {/* Gradient Overlay */}
        <div className="absolute bottom-4 left-0 w-[95%] h-[95%] bg-gradient-to-t from-primary via-primary/20 to-transparent pointer-events-none rounded-xl z-10 align-center justify-center" />
      </div>
    </div>
  );
};

export default Login;
