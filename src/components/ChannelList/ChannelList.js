import { React } from "react";
import { ChannelItem } from "../ChannelItem/ChannelItem";

export function ChannelList(props) {

  return (props.channelsArray.map((channel, index) => {
    return (
      <ChannelItem channelMute={props.channelMute[index]} onMuteClick={props.onMuteClick} index={index} channelObject={channel} />
    )
  }))
}
