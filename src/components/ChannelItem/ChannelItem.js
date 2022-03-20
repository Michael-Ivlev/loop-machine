import { React } from "react";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import "./ChannelItem.css";

export function ChannelItem(props) {
  return (
    <>
      <button
        className={
          "channel__mute" +
          (props.channelMute === true ? " channel__mute_active" : "")
        }
        onClick={() => props.onMuteClick(props.index)}
      >
        {props.channelMute ? (
          <FaVolumeMute size={20} />
        ) : (
          <FaVolumeUp size={20} />
        )}
      </button>
      <div className="channel">
        <div className="channel__sound">
          <p className="channel__sound-name">{`${props.channelObject.getName()}`}</p>
        </div>
      </div>
    </>
  );
}
