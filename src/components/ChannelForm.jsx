import React, { useEffect, useState } from "react";
import { useClient, useMicrophoneAndCameraTracks } from "../hooks";
import { appId } from "../constants";

const ChannelForm = (props) => {
    const { setInCall, setChannelName } = props;

    return (
        <form className="join">
            {appId === "" && (
                <p style={{ color: "red" }}>
                    Please enter your Agora App ID in App.js and refresh the
                    page
                </p>
            )}
            <input
                type="text"
                placeholder="Enter Channel Name"
                onChange={(e) => setChannelName(e.target.value)}
            />
            <button
                onClick={(e) => {
                    e.preventDefault();
                    setInCall(true);
                }}
            >
                Join
            </button>
        </form>
    );
};

export default ChannelForm;
