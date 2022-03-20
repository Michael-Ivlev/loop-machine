import React from "react";
import { FaPlay, FaStop } from "react-icons/fa";
import { MdLoop } from "react-icons/md";
import "./PlayerControls.css";

export function PlayerControls(props) {
  return (
    <div className="panel__controls">
      <button className="sounds__button" onClick={props.handlePlayClick}>
        <FaPlay size={20} />
      </button>
      <button className="sounds__button" onClick={props.handleStopClick}>
        <FaStop size={20} />
      </button>
      <button
        className={
          props.isLooping
            ? "sounds__button sounds__button_active"
            : "sounds__button"
        }
        onClick={props.handleLoopClick}
      >
        <MdLoop size={30} />
      </button>
    </div>
  );
}
