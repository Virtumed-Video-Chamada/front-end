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
} from "@ionic/react";


const slideOpts = {
  initialSlide: 1,
  speed: 400,
};

const Appointments: React.FC = () => {
  return (
    <div className="container">
      <IonSlides pager={true} options={slideOpts}>
        <IonSlide>
          <IonCard>
            <IonCardContent className="d-flex">
              <IonThumbnail slot="start">
                <img alt="Pic-Doctor" src="./assets/avatar/Pic-Doctor.png" />
              </IonThumbnail>
              <div>
                <span>Dra. Maria Renata</span>
                <p>Psicóloga</p>
                <span>Hoje, 14:00</span>
              </div>
              <IonImg src="./assets/icon/Logo.svg"></IonImg>
            </IonCardContent>
          </IonCard>
        </IonSlide>
        <IonSlide>
          <IonCard>
            <IonCardContent className="d-flex">
              <IonThumbnail slot="start">
                <img alt="Pic-Doctor" src="./assets/avatar/Pic-Doctor.png" />
              </IonThumbnail>
              <div>
                <span>Dra. Maria Renata</span>
                <p>Psicóloga</p>
                <span>Hoje, 14:00</span>
              </div>
              <IonImg src="./assets/icon/Logo.svg"></IonImg>
            </IonCardContent>
          </IonCard>
        </IonSlide>

      </IonSlides>
    </div>
  );
};

export default Appointments;
