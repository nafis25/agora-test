import React from "react";
import {
    ClientConfig,
    IAgoraRTCRemoteUser,
    ICameraVideoTrack,
    IMicrophoneAudioTrack,
} from "agora-rtc-sdk-ng";
import {
    AgoraVideoPlayer,
    createClient,
    createMicrophoneAndCameraTracks,
} from "agora-rtc-react";
import { config, appId } from "./constants";

const useClient = createClient(config);
const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();

export { useClient, useMicrophoneAndCameraTracks };
