import React from "react";
import { Hashtag } from "react-hero-icon/solid";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setChannelInfo } from "../features/channelSlice";
const Channel = ({ id, channelName }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const setChannel = () => {
    dispatch(
      setChannelInfo({
        channelId: id,
        channelName: channelName,
      })
    );
    navigate(`/channels/${id}`);
  };
  return (
    <div
      className="font-medium flex items-center cursor-pointer hover:bg-[#3A3C43] p-1 rounded-md  hover:text-white"
      onClick={setChannel}
    >
      <Hashtag className="h-5 mr-2" /> {channelName}
    </div>
  );
};

export default Channel;
