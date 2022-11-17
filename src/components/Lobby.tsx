import React from "react";
import { LobbyProps } from '../types/Interfaces';
import './ExploreContainer.css'

const Lobby = ({
  username,
  handleUsernameChange,
  roomName,
  handleRoomNameChange,
  handleSubmit,
  connecting,
}: LobbyProps) => {
  return (
    <form onSubmit={handleSubmit}>
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

      <button type="submit" disabled={connecting}>
        {connecting ? "Connecting" : "Entrar"}
      </button>
    </form>
  );
};

export default Lobby;
