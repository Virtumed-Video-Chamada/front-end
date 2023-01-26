import React, { useState, useCallback, useEffect } from "react";
import Video from "twilio-video";
import { alertaErro } from "../../utils/alertas";
import Lobby from "./Lobby";
import Room from "./Room";
import { removeStorage, setStorage } from "../../services/adminStorage";
import { hideTabs, showTabs } from "../../App";
import axios from 'axios';


const VideoChat = () => {
  const [username, setUsername] = useState<string>("");
  const [roomName, setRoomName] = useState<string>("");
  const [room, setRoom] = useState<any>(null);
  const [connecting, setConnecting] = useState<boolean>(false);
  // eslint-disable-next-line no-restricted-globals
  const TWILIO_DOMAIN = location.host; 


  const handleUsernameChange = useCallback((event: any) => {
    setUsername(event.target.value);
  }, []);

  const handleRoomNameChange = useCallback((event: any) => {
    setRoomName(event.target.value);
  }, []);

  const handleSubmit =
    useCallback(
      async (event: any) => {
        event.preventDefault();
        hideTabs();
        setConnecting(true);
        await axios.get(`http://${TWILIO_DOMAIN}/generatetoken`).then(async (body) => {
          const token = body.data.token;
          Video.connect(token, {
            name: roomName,
            video: true,
            audio: true
          })
        }).then(async (room: any) => {
          console.log(room)
            setConnecting(false);
            setRoom(room);
            setStorage("room", room);
          
          })
            .catch((err: any) => {
              if (err === "DOMException: Requested device not found") {
                alertaErro.alerta(`Dispositivos de Vídeo ou Áudio indisponíveis`);
              }
              console.error(err);
              setConnecting(false);
            });
        },
        [roomName, username]
    );
  
  const handleLogout = useCallback(() => {
    showTabs();
    setRoom((prevRoom: any) => {
      if (prevRoom) {
        prevRoom.localParticipant.tracks.forEach((trackPub: any) => {
          trackPub.track.stop();
        });
        prevRoom.disconnect();
        removeStorage('room');
      }
      return null;
    });
  }, []);

  useEffect(() => {
    console.log(room);
    if (room) {
      const tidyUp = (event: any) => {
        if (event.persisted) {
          return;
        }
        if (room) {
          handleLogout();
        }
      };
      window.addEventListener("pagehide", tidyUp);
      window.addEventListener("beforeunload", tidyUp);
      return () => {
        window.removeEventListener("pagehide", tidyUp);
        window.removeEventListener("beforeunload", tidyUp);
      };
    }
  }, [room, handleLogout]);

  let render;
  if (room) {
    render = (
      <Room roomName={roomName} room={room} handleLogout={handleLogout} />
    );
  } else {
    render = (
      <Lobby
        username={username}
        roomName={roomName}
        handleUsernameChange={handleUsernameChange}
        handleRoomNameChange={handleRoomNameChange}
        handleSubmit={handleSubmit}
        connecting={connecting}
      />
    );
  }
  return render;
};

export default VideoChat;
