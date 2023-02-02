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
  const [roomName, setRoomName] = useState<string>('myfirstvideoapp');
  const [room, setRoom] = useState<any>(null);
  const [connecting, setConnecting] = useState<boolean>(false);
  // eslint-disable-next-line no-restricted-globals
  // const TWILIO_DOMAIN = location.host; 
  const TWILIO_DOMAIN = 'videobeginner-5556-dev.twil.io'; 



  const handleUsernameChange = useCallback((event: any) => {
    setUsername(event.target.value);
  }, []);

  const handleRoomNameChange = useCallback((event: any) => {
    setRoomName(event.target.value);
  }, []);

  const config = {
    headers:{
      "Access-Control-Allow-Origin":  "*",
      "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
    }
  };

  const handleSubmit =
    useCallback(
      async (event: any) => {
        event.preventDefault();
        hideTabs();
        setConnecting(true);
        await axios.get(`http://${TWILIO_DOMAIN}/generatetoken`, config).then(async (body: any) => {
          const token = body.data.token;
          // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImN0eSI6InR3aWxpby1mcGE7dj0xIn0.eyJqdGkiOiJTSzA1NWE3Zjk1YTQ0Yzg4ODI5NjI2MmJiZDlmYzEyZThjLTE2NzUzMDExMzAiLCJncmFudHMiOnsiaWRlbnRpdHkiOiI2czJvZGowYnFsMyIsInZpZGVvIjp7InJvb20iOiJteWZpcnN0dmlkZW9hcHAifX0sImlhdCI6MTY3NTMwMTEzMCwiZXhwIjoxNjc1MzA0NzMwLCJpc3MiOiJTSzA1NWE3Zjk1YTQ0Yzg4ODI5NjI2MmJiZDlmYzEyZThjIiwic3ViIjoiQUNhN2QyNmZkZjliZDNhZDY1ZDdlMmJmZjMzNWM2OThhOSJ9.V1txOquG7tz0HteTfrTR9iB85qblP57V4I2i_IfySmg'
          console.log(token);
          const videoChamada = await Video.connect(token, {
            name: roomName,
            video: true,
            audio: true
          })

          setConnecting(false);
          setRoom(videoChamada);
          setStorage("room", videoChamada);
        })
   
        // }).then((room: any) => {
        //   console.log(room)
        //     setConnecting(false);
        //     setRoom(room);
        //     setStorage("room", room);
          
        //   })
        //     .catch((err: any) => {
        //       if (err === "DOMException: Requested device not found") {
        //         alertaErro.alerta(`Dispositivos de Vídeo ou Áudio indisponíveis`);
        //       }
        //       console.error(err);
        //       setConnecting(false);
        //     });
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
    console.log(room)
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
