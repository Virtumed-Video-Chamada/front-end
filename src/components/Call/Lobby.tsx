import React from "react";
import { LobbyProps } from "../../@types/interfaces";
import { IonButton } from '@ionic/react';


const Lobby = ({
  username,
  handleUsernameChange,
  roomName,
  handleRoomNameChange,
  handleSubmit,
  connecting,
}: LobbyProps) => {
  return (
    <form onSubmit={handleSubmit} className="mt-0">
      <h2>Entrar na Sala</h2>
      <div>
        <label htmlFor="name">Seu nome:</label>
        <input
          type="text"
          id="field"
          value={username}
          onChange={handleUsernameChange}
          readOnly={connecting}
          required
        />
      </div>

      <div>
        <label htmlFor="room">Nome da Sala:</label>
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
