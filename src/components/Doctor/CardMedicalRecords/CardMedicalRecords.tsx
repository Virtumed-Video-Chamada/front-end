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
} from "ionicons/icons";
import { useState } from "react";
import { useHistory } from "react-router";
import { Doctor } from "../../../@types/interfaces";
import DoctorCard from "../../Pacient/DoctorCard/DoctorCard";

const CardMedicalRecords: React.FC = () => {
  const [change, setChange] = useState<boolean>(false);
  const [_class, setClass] = useState<string>("flex hidden");
  const [present] = useIonToast();
  const history = useHistory();

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
  const slideOpts = {
    initialSlide: 1,
    speed: 400,
  };

  const seeAll = () => {
    history.replace("/historical-doctor");
    window.location.reload();
  };

  return (
    <div className="container">
      <div className="titlePopular">
        <h1 className="font-bold text-l pl-3">Meus Prontuários</h1>
        <span className="font-bold text-xs text-colored" onClick={() => seeAll()}>
          Ver todos...
        </span>
      </div>
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
          </IonCardContent>
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
        </IonCard>
      </div>
    </div>
  );
};

export default CardMedicalRecords;
