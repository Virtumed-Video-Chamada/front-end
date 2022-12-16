import {
  IonButton,
  IonCard,
  IonCardContent,
  IonIcon,
  IonImg,
  IonList,
  IonThumbnail,
  useIonAlert,
  useIonToast,
} from "@ionic/react";
import { useEffect, useState } from "react";
import { mockedDoctors } from "../../../mocks/doctor";
import DoctorCard from "../../Doctor/DoctorCard";

const ListDoctor: React.FC = () => {
  const [change, setChange] = useState<boolean>(false);
  const [_class, setClass] = useState<string>("flex hidden");
  const [presentAlert] = useIonAlert();
  const [handlerMessage, setHandlerMessage] = useState("");
  const [roleMessage, setRoleMessage] = useState("");
  const [present] = useIonToast();
  const presentToast = () => {
    present({
      message: "Consulta cancelada com sucesso",
      duration: 1500,
      position: "top",
    });
  };

  const showChat = () => {
    setChange(!change);
    if (change === true) {
      setClass("flex");
    } else {
      setClass("flex hidden");
    }
  };

  return (
    <div className="container" onClick={showChat}>
      <IonCard className="bd-20 card">
        <IonCardContent className="flex justify-between w-auto">
          <IonThumbnail slot="start">
            <img
              className="min-w-[80px]"
              alt="Pic-Doctor"
              src="./assets/avatar/Pic-Doctor.png"
            />
          </IonThumbnail>
          <div className="flex ml-9">
            <div className="flex flex-col gap-2">
              <span className="text-black font-bold">Dra. Maria Renata</span>
              <p className="font-normal">Psicóloga</p>
              <span className="font-medium">98 Avaliações</span>
            </div>
          </div>
          <IonImg src="./assets/icon/Logo.svg"></IonImg>
        </IonCardContent>
        <div className="flex flex-row justify-center items-center">
          <div className={_class}>
            <IonButton className="text-xs w-max">
              ABRIR CHAT
              <IonIcon slot="start" icon={chatbubbleOutline}></IonIcon>
            </IonButton>
            <IonButton className="text-xs"  color="tertiary" routerLink="/medical-schedules">
              AGENDAR
              <IonIcon slot="start" icon={calendarOutline}></IonIcon>
            </IonButton>
          </div>
        </div>
      </IonCard>
    </div>
  );
};

export default ListDoctor;
