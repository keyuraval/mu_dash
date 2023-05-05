/* eslint-disable react/prop-types */

import { useState } from "react";
import Modal from "./Modal";

const Card = ({ song, index }) => {
    const [showDialog, setShowDialog] = useState(false);
    const [currentSong, setcurrentSong] = useState(0);

    return (
        <div className="card">
            <div className="image-container">
                <img
                    className="image"
                    src={song.image}
                    height={250}
                    width={250}
                    alt=""
                />
            </div>
            <div className="title">{song.title}</div>
            <div className="progress-container">
                <progress
                    max="100"
                    value={song.completion_rate}
                    data-label={`${song.completion_rate}` + "%"}
                    className="progressbar"
                ></progress>
            </div>
            <div className="btn-container">
                <button
                    className="btn"
                    onClick={() => {
                        console.log(index);
                        setShowDialog(!showDialog);
                        setcurrentSong(index);
                    }}
                >
                    Stats
                </button>
            </div>

            {showDialog ? <Modal currentSong={index} show={showDialog} /> : " "}
        </div>
    );
};

export default Card;