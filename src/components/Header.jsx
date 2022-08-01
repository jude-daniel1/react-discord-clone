import React from "react";
import { BsDiscord } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Header = () => {
  let [user] = useAuthState(auth);
  const navigate = useNavigate();

  const signin = (e) => {
    e.preventDefault();
    if (user) {
      navigate("/channels", { replace: true });
    } else {
      signInWithPopup(auth, provider)
        .then((result) => {
          user = result.user;
          navigate("/channels", { replace: true });
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-discord_blue font-nunito">
      <p className="text-white flex items-center justify-center font-extrabold gap-1">
        <BsDiscord size={30} />
        DISCORD
      </p>
      <div className="hidden lg:block text-white space-x-7">
        <a href="/" className="link">
          Download
        </a>
        <a href="/" className="link">
          Why Discord?
        </a>
        <a href="/" className="link">
          Nitro
        </a>
        <a href="/" className="link">
          Safety
        </a>
        <a href="/" className="link">
          Support
        </a>
      </div>
      <div className="flex justify-self-center items-center space-x-3">
        <button
          className="text-black bg-white rounded-full px-4 py-1 flex justify-center items-center"
          onClick={signin}
        >
          {!user ? "Login" : "Open Discord"}
        </button>
        <div className="lg:hidden">
          <FaBars size={25} className="text-white" />
        </div>
      </div>
    </header>
  );
};

export default Header;
