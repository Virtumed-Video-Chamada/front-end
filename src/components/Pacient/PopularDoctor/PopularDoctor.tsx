// interface ContainerProps {
//   name: string;
// }

import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonIcon,
  IonImg,
  IonLabel,
  IonRow,
  IonSlide,
  IonSlides,
  IonThumbnail,
  IonTitle,
  useIonAlert,
  useIonToast,
} from "@ionic/react";
import { heartOutline } from "ionicons/icons";
import { useState } from "react";

const slideOpts = {
  initialSlide: 1,
  speed: 400,
};

const PopularDoctor: React.FC = () => {
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
    <div className="container">
      <h1 className="font-bold">Médicos Populares</h1>
      <span>Ver todos...</span>
      <IonCard className="bd-20" onClick={showChat}>
        <IonCardContent className="flex justify-between">
          <IonThumbnail slot="start">
            <img
              alt="Pic-Doctor"
              src="https://media-exp1.licdn.com/dms/image/C4D03AQG34BiNMXpuKw/profile-displayphoto-shrink_200_200/0/1663620501676?e=1674691200&v=beta&t=RGNlx1yPdT9_COlYwhbg6gCF9ejlvqaakGi0KpQ6wkY"
            />
          </IonThumbnail>
          <div className="text-left ml-5">
            <span>Dr. Ricardo Lima</span>
            <p>Otorrinolaringologista</p>
            <span>98 Avaliações</span>
          </div>
          <IonButton fill="clear">
            <IonIcon slot="icon-only" icon={heartOutline}></IonIcon>
          </IonButton>
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

export default PopularDoctor;
