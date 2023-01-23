import React from "react";
import { LobbyProps } from "../../@types/interfaces";
import { IonButton, } from '@ionic/react';
import "./styles.css"
import { getStorage } from "../../services/adminStorage";
import {  useEffect,  useState } from "react";


const Lobby = ({
  username,
  handleUsernameChange,
  roomName,
  handleRoomNameChange,
  handleSubmit,
  connecting,
}: LobbyProps) => {

  const [ avatar, setAvatar ] = useState<string>("https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y")

  const handle = async () => {
    getStorage("token").then((response) => {
     
      setAvatar(response.data.user.avatar_url);
    })
  }

  useEffect(() => {
    handle()
  }, [])

  const renderize = () => {
    if (avatar == null || avatar == ' ') {
      console.log('teste');
      return 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y'
    } else {
      return avatar
    }
  }


  return (
    <div className="lobby-container">
      <div className="extra-border">
        <div className="border-lobby ">
          <div className="img-container">
            <img className="min-w-[13rem] min-h-[13rem]" src={renderize()} alt="User Photo Avatar" />
          </div>
        </div>
      </div>
        <form onSubmit={handleSubmit} className="lobby">
      <h2>Entrar na Sala</h2>
      <div className="inputs">
        <label htmlFor="name">Seu nome</label>
        <input
          type="text"
          id="field"
          value={username}
          onChange={handleUsernameChange}
          readOnly={connecting}
          required />
      </div>

      <div className="inputs">
        <label htmlFor="room">Nome da Sala</label>
        <input
          type="text"
          id="room"
          value={roomName}
          onChange={handleRoomNameChange}
          readOnly={connecting}
          required />
      </div>

      <IonButton type="submit" disabled={connecting} className="btn">
        {connecting ? "Connecting" : "Entrar"}
      </IonButton>
    </form>
    </div>
    
  );
};

export default Lobby;
