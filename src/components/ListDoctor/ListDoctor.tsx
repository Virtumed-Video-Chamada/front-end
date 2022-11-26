// interface ContainerProps {
//   name: string;
// }

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
import { heartOutline } from "ionicons/icons";
import { useState } from "react";

const slideOpts = {
  initialSlide: 1,
  speed: 400,
};

const ListDoctor: React.FC = () => {
  const [change, setChange] = useState<boolean>(false);
  const [_class, setClass] = useState<string>("flex hidden");
  const [presentAlert] = useIonAlert();
  const [handlerMessage, setHandlerMessage] = useState("");
  const [roleMessage, setRoleMessage] = useState("");
  const [present] = useIonToast();
  const presentToast = () => {
    present({
      message: 'Consulta cancelada com sucesso',
      duration: 1500,
      position: 'top',
    });
  };

  const showChat = () => {
    setChange(!change);
    if(change === true) {
      setClass("flex")
    } else {
      setClass("flex hidden")
    }
  }

  return (
    <div className="container" onClick={showChat}>
    <IonCard className="bd-20 card">
           <IonCardContent className="flex justify-between w-auto">
             <IonThumbnail slot="start">
               <img className="min-w-[80px]"alt="Pic-Doctor" src="./assets/avatar/Pic-Doctor.png" />
             </IonThumbnail>
             <div className="text-left">
               <span>Dra. Maria Renata</span>
               <p>Psicóloga</p>
               <span>Hoje, 14:00</span>
               <div className="flex">
                 
               </div>
             </div>
             <IonImg src="./assets/icon/Logo.svg"></IonImg>
           </IonCardContent>
           <div className={_class}>
                 <IonButton className="text-xs" color="secondary">ABRIR CHAT</IonButton>
                 <IonButton className="text-xs" color="primary">AGENDAR</IonButton>
           </div>
      </IonCard>
   </div>
  );
};

export default ListDoctor;

