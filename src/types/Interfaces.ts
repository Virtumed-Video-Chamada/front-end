export interface RoomProps {
	roomName: any;
  room: any,
  handleLogout: any;
}

export interface LobbyProps {
	username: string;
  handleUsernameChange: any;
  roomName: string;
  handleRoomNameChange: any;
  handleSubmit: any;
  connecting: any;
}