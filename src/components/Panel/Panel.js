import { React, useState, useEffect } from "react";
import "./Panel.css";
import { channelArray } from "../../utils/Constants";
import { ChannelList } from "../ChannelList/ChannelList";
import { PlayerControls } from "../PlayerControls/PlayerControls";

// React Component
export function Panel() {
  const [position, setPosition] = useState(0); // Position of the music slider
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [isLooping, setIsLooping] = useState(false);

  const [channelMute, setChannelMute] = useState(
    new Array(channelArray.length).fill(false)
  );

  const handlePlayClick = () => {
    if (musicPlaying) {
      return null;
    }
    setMusicPlaying(true);
    channelArray.forEach((channel) => {
      channel.play();
    });
  };

  const handleStopClick = () => {
    setPosition(0);
    setMusicPlaying(false);
    channelArray.forEach((channel) => {
      channel.stop();
    });
  };

  const handleLoopClick = () => {
    setIsLooping(!isLooping);
    channelArray.forEach((channel) => {
      channel.loop();
    });
  };

  const handleChannelMute = (index) => {
    const temp = [...channelMute];
    temp[index] = !temp[index];
    setChannelMute(temp);
    channelArray[index].mute();
  };

  // Sets the position of the slider base on the music current time
  useEffect(() => {
    const myinterval = setInterval(() => {
      setMusicPlaying(channelArray[0].isPlaying());
      setPosition(channelArray[0].getTime());
    }, 100); // Update every 1 ms

    if (musicPlaying === false) {
      clearInterval(myinterval);
    }
  }, [musicPlaying]); // Updated while music is playing

  return (
    <div className="panel">
      <h1 className="panel__heading">LOOP MACHINE</h1>
      <div className="channels">
        <input
          type="range"
          min="0"
          max="17"
          value={position}
          className="channels__slider"
          id="myRange"
        ></input>
        <ChannelList
          channelsArray={channelArray}
          channelMute={channelMute}
          onMuteClick={handleChannelMute}
        />
      </div>
      <PlayerControls
        isLooping={isLooping}
        handlePlayClick={handlePlayClick}
        handleStopClick={handleStopClick}
        handleLoopClick={handleLoopClick}
      />
    </div>
  );
}
