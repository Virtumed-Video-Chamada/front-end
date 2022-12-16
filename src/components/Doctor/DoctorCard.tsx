import { IonCard, IonCardContent, IonThumbnail, IonImg, IonButton, IonIcon, useIonAlert, useIonToast } from '@ionic/react'
import { heartOutline, chatbubbleOutline, calendarOutline } from 'ionicons/icons'
import React, { useState } from 'react'
import { Doctor } from '../../@types/interfaces';


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
    <div  onClick={showChat} >
      <IonCard className="bd-20" >
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
            <span className="font-medium">98 Avaliações</span>
          </div>
          <IonButton fill="clear">
            <IonIcon slot="icon-only" icon={heartOutline}></IonIcon>
          </IonButton>
        </IonCardContent>
        <div className="flex flex-row justify-center items-center">
          <div className={_class}>
            <IonButton className="text-xs w-max" routerLink="/conversation">
              ABRIR CHAT
              <IonIcon slot="start" icon={chatbubbleOutline}></IonIcon>
            </IonButton>
            <IonButton className="text-xs" color="tertiary" routerLink="/medical-schedules">
              AGENDAR
              <IonIcon slot="start" icon={calendarOutline}></IonIcon>
            </IonButton>
          </div>
        </div>
      </IonCard>
    </div>
  );
}

export default DoctorCard;