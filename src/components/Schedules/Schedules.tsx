import { useState } from "react";
import {
  IonAvatar,
  IonButton,
  IonCard,
  IonCardContent,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonText,
  IonThumbnail,
  useIonAlert,
} from "@ionic/react";
import ModalAlert from "../ModalAlert/ModalAlert";




const Schedules: React.FC = () => {
  const [change, setChange] = useState<boolean>(false);
  const [_class, setClass] = useState<string>("flex hidden");
  const [presentAlert] = useIonAlert();
  const [handlerMessage, setHandlerMessage] = useState("");
  const [roleMessage, setRoleMessage] = useState("");

  const showChat = () => {
    setChange(!change);
    if(change === true) {
      setClass("flex")
    } else {
      setClass("flex hidden")
    }
  }

  const alert = () => {
    presentAlert({
      header: "DESEJA CANCELAR A CONSULTA?",
      cssClass: 'custom-alert',
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
            setHandlerMessage("Alert confirmed");
          },
        },
      ],
      onDidDismiss: (e: CustomEvent) =>
        setRoleMessage(`Dismissed with role: ${e.detail.role}`),
    })
  }

  return (
    <div className="container" onClick={showChat}>
     <IonCard className="bd-20 card">
            <IonCardContent className="flex">
              <IonThumbnail slot="start">
                <img alt="Pic-Doctor" src="./assets/avatar/Pic-Doctor.png" />
              </IonThumbnail>
              <div className="text-left">
                <span>Dra. Maria Renata</span>
                <p>Psicóloga</p>
                <span>Hoje, 14:00</span>
              </div>
              <IonImg src="./assets/icon/Logo.svg"></IonImg>
            </IonCardContent>
            <IonButton color="secondary" onClick={alert}>CANCELAR</IonButton>
            <IonButton className="">CONFIRMAR</IonButton>
            <div className={_class}>
            <IonImg className="w-[50px] h-[50px]"src="./assets/icon/chat.svg"></IonImg>
              <span>ABRIR CHAT</span>
            </div>
       </IonCard>
    </div>
  );
};

export default Schedules;

