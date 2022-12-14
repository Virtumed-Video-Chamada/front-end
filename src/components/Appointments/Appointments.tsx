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
      <h1 className="font-bold mt-2">Consultas Agendadas</h1>
      <IonSlides pager={true} options={slideOpts}>
        <IonSlide>
          <IonCard className="bd-20 bg-[#4B39B3] mb-9"  routerLink="/webchat" >
            <IonCardContent className="flex">
              <IonThumbnail slot="start">
                <img alt="Pic-Doctor" src="./assets/avatar/Pic-Doctor.png"/>
              </IonThumbnail>
              <div className="text-neutral-50 text-left ml-3">
                <span>Dra. Maria Renata</span>
                <p>Psicóloga</p>
                <span>Hoje, 14:00</span>
              </div>
              <IonImg src="./assets/icon/Logo.svg"></IonImg>
            </IonCardContent>
          </IonCard>
        </IonSlide>
        <IonSlide>
        <IonCard className="bd-20 bg-[#4B39B3]"  routerLink="/webchat" >
            <IonCardContent className="flex">
              <IonThumbnail slot="start">
                <img alt="Pic-Doctor" src="./assets/avatar/Pic-Doctor.png"/>
              </IonThumbnail>
              <div className="text-neutral-50 text-left ml-3">
                <span>Dra. Maria Renata</span>
                <p>Psicóloga</p>
                <span>Hoje, 14:00</span>
              </div>
              <IonImg src="./assets/icon/Logo.svg"></IonImg>
            </IonCardContent>
          </IonCard>
        </IonSlide>
        <IonSlide>
        <IonCard className="bd-20 bg-[#4B39B3]"  routerLink="/webchat" >
            <IonCardContent className="flex">
              <IonThumbnail slot="start">
                <img alt="Pic-Doctor" src="./assets/avatar/Pic-Doctor.png"/>
              </IonThumbnail>
              <div className="text-neutral-50 text-left ml-3">
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
