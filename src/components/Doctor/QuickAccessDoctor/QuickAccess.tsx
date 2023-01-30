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
  IonRow,
  IonSlide,
  IonSlides,
  IonThumbnail,
  IonTitle,
} from "@ionic/react";
import "./style.css";


const QuickAccessDoctor: React.FC = () => {
  return (
    <div className="container">
     <h1 className="font-bold text-l pl-3">Acesso Rápido</h1>
        <IonRow>
        <IonCard className="mr-1 bd-20 quickCard" routerLink="/patient-list">
            <IonImg className="imgCard mx-auto" src="./assets/icon/user.svg"></IonImg>
            <p className="text-center ">Pacientes Cadastrados</p>
          </IonCard> 
          <IonCard className="bd-20 quickCard" routerLink="/exam-results">
            <IonImg className="imgCard mx-auto" src="./assets/icon/microscope.svg"></IonImg>
            <p className="text-center">Resultados de Exames</p>
          </IonCard>
          <IonCard className="bd-20 quickCard" routerLink="/schedule-doctor">
            <IonImg className="imgCard mx-auto" src="./assets/icon/appointment.svg"></IonImg>
            <p className="text-center ">Minhas consultas</p>
          </IonCard>
          <IonCard className="bd-20 quickCard" routerLink="/historical-clinic">
            <IonImg className="imgCard mx-auto" src="./assets/icon/historical.svg"></IonImg>
            <p className="text-center ">Histórico Clínico</p>
          </IonCard>
          
        </IonRow>
    </div>
  );
};

export default QuickAccessDoctor;
