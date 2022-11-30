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
} from "@ionic/react";
import { heartOutline } from "ionicons/icons";

const slideOpts = {
  initialSlide: 1,
  speed: 400,
};

const PopularDoctor: React.FC = () => {
  return (
    <div className="container">
      <h1 className="font-bold">Médicos Populares</h1>
      <span>Ver todos...</span>
      <IonCard className="bd-20" color="#fff">
        <IonCardContent className="flex">
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
      </IonCard>
    </div>
  );
};

export default PopularDoctor;
