import React from "react";
import { HiOutlineDownload } from "react-icons/hi";

function Hero() {
  return (
    <section className="bg-discord_blue pb-8 md:pb-0 md:p-0">
      <div className="min-h-screen md:min-h-[80vh] w-full flex flex-col md:flex-row justify-center md:justify-between items-top pt-8 space-y-8">
        <div className="w-full flex flex-col gap-6  items-center md:items-start text-white px-6 md:px-0 md:pl-6   md:mt-[40px]">
          <h1 className="text-4xl font-bold font-nunito">Your place to talk</h1>
          <p className=" font-thin">
            Whether your're part of a school club. gaming group, worldwird art
            ommunity, or just a handful <br /> friends that want to spend time
            toether, Discord makes it easy to talk every day and hang out more
            often
          </p>
          <div className=" w-full flex flex-col gap-5 justify-start items-start lg:flex-row">
            <button className="rounded-full flex items-center justify-center gap-3 px-5 py-3 text-black font-semibold bg-white">
              <HiOutlineDownload /> Download for Mac
            </button>
            <button className="rounded-full flex items-center justify-center gap-3 px-5 py-3 text-white font-semibold  bg-black">
              Open Discord in your browser
            </button>
          </div>
        </div>
        <div className="flex flex-grow h-full w-full justify-center items-center  md:justify-end">
          <div className="w-full h-full flex items-center  justify-start md:justify-end">
            <img
              src="/large.svg"
              alt=""
              className="hidden md:flex md:mr-[-140px]"
            />
            <img
              src="/right.svg"
              alt=""
              className="md:hidden  mx-[-160px] mt-5"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
