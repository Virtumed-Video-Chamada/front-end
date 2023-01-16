import React, { useEffect, useState } from "react";
import { RoomProps } from "../../@types/interfaces";
import "./styles.css";
import Participant from "./Participant";
import ParticipantRemote from "./ParticipantRemote";
import ParticipantLocal from "./ParticipantLocal";
import "./styles.css";

const Room = ({ roomName, room, handleLogout }: RoomProps) => {
  const [participants, setParticipants] = useState<any[]>([]);

  useEffect(() => {
    const participantConnected = (participant: any) => {
      // setParticipants((prevParticipants) => [...prevParticipants, participant]);
      setParticipants((prevParticipants) => [participant]);
    };

    const participantDisconnected = (participant: any) => {
      setParticipants((prevParticipants) =>
        prevParticipants.filter((p) => p !== participant)
      );
    };

    room.on("participantConnected", participantConnected);
    room.on("participantDisconnected", participantDisconnected);
    room.participants.forEach(participantConnected);
    return () => {
      room.off("participantConnected", participantConnected);
      room.off("participantDisconnected", participantDisconnected);
    };
  }, [room]);

  const remoteParticipants = participants.map((participant) => (
    <ParticipantRemote key={participant.sid} participant={participant} />
  ));

  return (
    <div className="room">
      <h2>Room: {roomName}</h2>
      <div className="btn-call-container">
        <button>Botão 1</button>
        <button onClick={handleLogout}>Log out</button>
        <button>Botão 2</button>
      </div>
      <div className="local-participant">
        {room ? (
          <ParticipantLocal
            key={room.localParticipant.sid}
            participant={room.localParticipant}
          />
        ) : (
          ""
        )}
      </div>
      <div className="remote-participants">{remoteParticipants}</div>
    </div>
  );
};

export default Room;
