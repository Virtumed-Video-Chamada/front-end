import React, { useEffect, useState } from "react";
import { LobbyProps } from "../../@types/interfaces";
import { IonButton } from '@ionic/react';
import "./styles.css"
import { getStorage } from "../../services/adminStorage";

interface User {
  name: string;
  avatar_url: string;
}

const Lobby = ({
  username,
  handleUsernameChange,
  roomName,
  handleRoomNameChange,
  handleSubmit,
  connecting,
}: LobbyProps) => {
  
  const [user, setUser] = useState<User>({ name: '', avatar_url: '' });

  useEffect(() => {
    getStorage('token').then((response) => {

      setUser(response.data.user);
    })
  }, [])
    
  
  const renderize = () => {
    if (user.avatar_url === '' || user.avatar_url === null) {
      return 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y';
    } else {
      return user.avatar_url;
    }
  }
  return (
    <div className="lobby-container">
      <div className="extra-border">
        <div className="border-lobby ">
          <div className="img-container">
            <img className="min-w-[13rem]" src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" alt="User Photo Avatar" />
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
          value={user.name}
          onChange={handleUsernameChange}
          readOnly={connecting}
          disabled />
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
