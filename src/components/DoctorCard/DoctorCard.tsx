import {
  IonCard,
  IonCardContent,
  IonThumbnail,
  IonImg,
  IonButton,
  IonIcon,
  useIonAlert,
  useIonToast,
} from "@ionic/react";
import {
  heartOutline,
  chatbubbleOutline,
  calendarOutline,
  heart,
  createOutline,
  trashOutline,
} from "ionicons/icons";
import React, { useState } from "react";
import { Doctor } from "../../@types/interfaces";

const slideOpts = {
  initialSlide: 1,
  speed: 400,
};

interface DoctorCardProps {
  doctor: Doctor;
}

function DoctorCard({ doctor }: DoctorCardProps) {
  const [change, setChange] = useState<boolean>(false);
  const [_class, setClass] = useState<string>("flex hidden");
  const showChat = () => {
    setChange(!change);
    if (change === true) {
      setClass("flex");
    } else {
      setClass("flex hidden");
    }
  };

  const [presentAlert] = useIonAlert();
  const [present] = useIonToast();
  const [handlerMessage, setHandlerMessage] = useState("");
  const [roleMessage, setRoleMessage] = useState("");
  const iconSucces = "./assets/icon/success.svg";

  const presentToast = () => {
    present({
      message: "Médico deletado com sucesso!",
      duration: 1500,
      position: "top",
      icon: iconSucces,
    });
  };

  const alert = () => {
    presentAlert({
      header: "DESEJA APAGAR O MÉDICO DO SISTEMA?",
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

  const [favorites, setFavorite] = useState<any[]>([]);
  const [buzy, setBusy] = useState<boolean>(false);
  const [icons, setIcons] = useState(heartOutline);

  const addFavorites = () => {
    setBusy(true);
    setIcons(heart);
    console.log("teste");
  };

  const [category, setCategory] = useState<string>("admin");

  const renderize = () => {
    if (category === "pacient") {
      return (
        <div className="flex flex-row justify-center items-center">
          <div className={_class}>
            <IonButton className="text-xs w-max" routerLink="/conversation">
              ABRIR CHAT
              <IonIcon slot="start" icon={chatbubbleOutline}></IonIcon>
            </IonButton>
            <IonButton
              className="text-xs"
              color="tertiary"
              routerLink="/medical-schedules"
            >
              AGENDAR
              <IonIcon slot="start" icon={calendarOutline}></IonIcon>
            </IonButton>
          </div>
        </div>
      );
    } else if (category === "admin") {
      return (
        <div className="flex flex-row justify-center items-center">
          <div className={_class}>
            <IonButton className="text-xs w-max" color="success">
              EDITAR
              <IonIcon slot="start" icon={createOutline}></IonIcon>
            </IonButton>
            <IonButton
              className="text-xs w-max"
              color="success"
              routerLink="/link-doctor"
            >
              VINCULAR
              <IonIcon slot="start" icon={createOutline}></IonIcon>
            </IonButton>
            <IonButton className="text-xs" color="danger" onClick={alert}>
              DELETAR
              <IonIcon slot="start" icon={trashOutline}></IonIcon>
            </IonButton>
          </div>
        </div>
      );
    }
  };

  return (
    <div onClick={showChat}>
      <IonCard className="bd-20 cardDoctorWhite">
        <IonCardContent className="flex justify-between">
          <IonThumbnail slot="start">
            <img
              className="imgDoctor max-h-[130%] max-w-[130%] bd-20"
              alt="Pic-Doctor"
              src="./assets/avatar/Pic-Doctor.png"
            />
          </IonThumbnail>
          <div className="flex flex-col gap-1 ml-11">
            <span className="text-black font-bold">{doctor.nameDoctor}</span>
            <p className="font-normal">{doctor.speciality}</p>
            <p className="font-normal">{doctor.crm}</p>
            {/* <span className="font-medium">98 Avaliações</span> */}
          </div>
          <IonButton fill="clear" onClick={() => addFavorites()}>
            <IonIcon
              slot="icon-only"
              className="text-red-900"
              icon={icons}
            ></IonIcon>
          </IonButton>
        </IonCardContent>
        {renderize()}
      </IonCard>
    
    </div>
  );
}

export default DoctorCard;
