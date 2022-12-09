import { useState } from "react";
import {
  IonAvatar,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonText,
  IonThumbnail,
  useIonAlert,
  useIonToast,
} from "@ionic/react";
import ModalAlert from "../ModalAlert/ModalAlert";

const Schedules: React.FC = () => {
  const [change, setChange] = useState<boolean>(false);
  const [_class, setClass] = useState<string>("flex hidden");
  const [presentAlert] = useIonAlert();
  const [handlerMessage, setHandlerMessage] = useState("");
  const [roleMessage, setRoleMessage] = useState("");
  const [present] = useIonToast();

  const iconSucces = "./assets/icon/success.svg";

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

  const alert = () => {
    presentAlert({
      header: "DESEJA CANCELAR A CONSULTA?",
      cssClass: "custom-alert",
      buttons: [
        {
          text: "NÃO",
          role: "cancel",
          cssClass: "alert-button-cancel",
          handler: () => {
            setHandlerMessage("Alert canceled");
          },
        },
        {
          text: "SIM",
          role: "confirm",
          cssClass: "alert-button-confirm",
          handler: () => {
            presentToast();
          },
        },
      ],
      onDidDismiss: (e: CustomEvent) =>
        setRoleMessage(`Dismissed with role: ${e.detail.role}`),
    });
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
          <div className="flex flex-col gap-1 ml-11">
            <span>Dra. Maria Renata</span>
            <p>Psicóloga</p>
            <span>Hoje, 14:00</span>
            <div className="flex">
              <IonButton className="text-xs" color="secondary" onClick={alert}>
                CANCELAR
              </IonButton>
              <IonButton className="text-xs" color="primary">
                CONFIRMAR
              </IonButton>
            </div>
          </div>
        
        </IonCardContent>

        <IonCardContent className="flex justify-between">
        <div className="flex flex-row justify-center items-center">
          <div className={_class}>
            <IonImg
              className="w-[50px] h-[50px]"
              src="./assets/icon/chat.svg"
            ></IonImg>
            <span>ABRIR CHAT</span>
          </div>
        </div>
        </IonCardContent>
        
      </IonCard>
    </div>
  );
};

export default Schedules;
