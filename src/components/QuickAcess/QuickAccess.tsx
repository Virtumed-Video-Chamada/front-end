// interface ContainerProps {
//   name: string;
// }

import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonImg,
  IonLabel,
  IonSlide,
  IonSlides,
  IonThumbnail,
  IonTitle,
} from "@ionic/react";


const slideOpts = {
  initialSlide: 1,
  speed: 400,
};

const QuickAccess: React.FC = () => {
  return (
    <div className="container">
      <IonTitle>Acesso Rápido</IonTitle>
      <IonSlides pager={true} options={slideOpts}>
        <IonSlide>

        </IonSlide>
      </IonSlides>
    </div>
  );
};

export default QuickAccess;
