import React from "react";
import ServerIcon from "./ServerIcon";
import MyChat from "./MyChat";
import {
  HiPlus,
  HiChevronDown,
  HiMicrophone,
  HiPhone,
  HiCog,
} from "react-icons/hi";
import { auth, db } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { signOut } from "firebase/auth";
import Channel from "./Channel";

const Home = () => {
  const navigate = useNavigate();
  let [user] = useAuthState(auth);
  const [value, loading, error] = useCollection(collection(db, "channels"), {
    snapshotListenOptions: { includeMetadataChanges: true },
  });

  const handleAddChannel = (e) => {
    e.preventDefault();
    let channelName = prompt("enter chanel name");

    if (channelName.trim() === "" || channelName.trim() === null) {
      console.log("nothing was entered");
    } else {
      // Add a new document with a generated id.
      addDoc(collection(db, "channels"), {
        channelName: channelName,
      })
        .then((docRef) => {
          console.log(docRef);
        })
        .catch((error) => alert(error.message));
    }
  };
  return (
    <>
      {!user ? (
        navigate("/channels", { replace: true })
      ) : (
        <div className="flex h-screen">
          <div className="flex flex-col space-y-3 bg-[#202225] p-3 min-w-max">
            <div className="server-default hover:bg-discord_purple flex items-center justify-center bg-[#3f4042] p-2 py-3 rounded-full transition-all duration-100 ease-out hover:rounded-2xl h-[50px] w-[50px]">
              <img
                src="https://rb.gy/kuaslg"
                alt=""
                className="transition-all duration-100 ease-out hover:rounded-2xl h-5"
              />
            </div>
            <hr className=" border-gray-700 border w-8 mx-auto" />
            <ServerIcon image="https://rb.gy/qidcpp" />
            <ServerIcon image="https://rb.gy/zxo0lz" />
            <ServerIcon image="https://rb.gy/qidcpp" />
            <ServerIcon image="https://rb.gy/zxo0lz" />

            <div className="server-default hover:bg-discord_green group flex items-center justify-center rounded-full bg-[#3f4042] py-3 transition-all duration-100 ease-out hover:rounded-2xl w-[50px]  h-[50px]">
              <HiPlus
                className="text-discord_green group-hover:text-white group-hover:rounded-full"
                size={20}
              />
            </div>
          </div>
          {/* second div */}
          <div className="bg-[#2f3136] flex flex-col min-w-max">
            <h2 className="flex text-white font-bold text-sm items-center justify-between border-b border-gray-800 p-4 hover:bg-[#34373C] cursor-pointer">
              Official PAPA Server...{" "}
              <HiChevronDown className=" ml-8" size={20} />
            </h2>
            <div className="text-[#8e9297] flex-grow overflow-y-scroll scrollbar-hide">
              <div className="flex items-center p-2 mb-2">
                <HiChevronDown className="h-3  mr-2" />
                <h4 className="font-semibold ">Channels</h4>
                <HiPlus
                  className="h-6 ml-auto cursor-pointer hover:text-white transition-all duration-100 ease-out hover:rounded-2xl"
                  onClick={handleAddChannel}
                />
              </div>
              <div className="flex flex-col space-y-2 px-2 mb-4">
                <p>{error && JSON.stringify(error)}</p>
                <p>{loading && "data loading..."}</p>
                {value && (
                  <>
                    {value?.docs.map((doc) => (
                      <Channel
                        key={doc.id}
                        id={doc.id}
                        channelName={doc.data().channelName}
                      />
                    ))}
                  </>
                )}
              </div>
            </div>

            <div className="bg-[#292b2f] p-2 flex justify-between items-center space-x-8">
              <div className="flex items-center space-x-1">
                <img
                  src={user?.photoURL}
                  alt=""
                  className="h-10 rounded-full"
                  onClick={() => signOut(auth)}
                />
                <h4 className="text-white text-xs font-medium">
                  {user?.displayName}
                  {""}
                  <span className="text-[#b9bbbe] block">
                    #{user?.uid.substring(0, 4)}
                  </span>
                </h4>
              </div>

              <div className="text-gray-400 flex items-center">
                <div className="hover:bg-[#3A3C43] p-2 rounded-md">
                  <HiMicrophone className="h-5 icon " />
                </div>
                <div className="hover:bg-[#3A3C43] p-2 rounded-md">
                  <HiPhone className="h-5 icon" />
                </div>
                <div className="hover:bg-[#3A3C43] p-2 rounded-md">
                  <HiCog className="h-5 icon" />
                </div>
              </div>
            </div>
          </div>
          {/* third section */}

          <div className="bg-[#36393f] flex-grow">
            <MyChat />
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
