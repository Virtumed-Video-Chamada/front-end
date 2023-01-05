import React from "react";
import { LobbyProps } from "../../@types/interfaces";
import { IonButton } from '@ionic/react';
import "./styles.css"


const Lobby = ({
  username,
  handleUsernameChange,
  roomName,
  handleRoomNameChange,
  handleSubmit,
  connecting,
}: LobbyProps) => {
  return (
    <form onSubmit={handleSubmit} className="mt-52 lobby">
      <h2>Entrar na Sala</h2>
      <div className="inputs">
        <label htmlFor="name">Seu nome</label>
        <input
          type="text"
          id="field"
          value={username}
          onChange={handleUsernameChange}
          readOnly={connecting}
          required
        />
      </div>

      <div className="inputs">
        <label htmlFor="room">Nome da Sala</label>
        <input
          type="text"
          id="room"
          value={roomName}
          onChange={handleRoomNameChange}
          readOnly={connecting}
          required
        />
      </div>

      <IonButton type="submit" disabled={connecting}>
        {connecting ? "Connecting" : "Entrar"}
      </IonButton>
    </form>
  );
};

export default Lobby;
