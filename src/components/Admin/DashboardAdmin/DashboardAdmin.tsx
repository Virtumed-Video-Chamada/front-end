// interface ContainerProps {
//   name: string;
// }

import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonGrid,
  IonImg,
  IonLabel,
  IonRow,
  IonSlide,
  IonSlides,
  IonThumbnail,
  IonTitle,
} from "@ionic/react";
import "./style.css";


const DashboardAdmin: React.FC = () => {
  return (
    <div className="container">
     <IonGrid >
     <IonRow className="flex flex-nowrap  mb-0" >
          <IonCard className="mr-1 bd-20 quickCard" routerLink="/exam-results">
            <IonImg className="imgCard mx-auto" src="./assets/icon/microscope.svg"></IonImg>
            <p className="text-center textCard">Cadastrar Médico</p>
          </IonCard>
          <IonCard className="mr-1 bd-20 quickCard">
            <IonImg className="imgCard" src="./assets/icon/appointment.svg"></IonImg>
            <p className="text-center textCard">Consultas por Médico</p>
          </IonCard>
          <IonCard className="mr-1 bd-20 quickCard" routerLink="historical-clinic">
            <IonImg className="imgCard mx-auto" src="./assets/icon/historical.svg"></IonImg>
            <p className="text-center textCard">Agenda</p>
          </IonCard>
      
        </IonRow>
        <IonRow className="flex flex-nowrap mb-0">
          <IonCard className="mr-1 bd-20 quickCard" routerLink="/exam-results">
            <IonImg className="imgCard mx-auto" src="./assets/icon/microscope.svg"></IonImg>
            <p className="text-center textCard">Cadastrar Paciente</p>
          </IonCard>
          <IonCard className="mr-1 bd-20 quickCard">
            <IonImg className="imgCard" src="./assets/icon/appointment.svg"></IonImg>
            <p className="text-center textCard">Lançar exames</p>
          </IonCard>
          <IonCard className="mr-1 bd-20 quickCard" routerLink="historical-clinic">
            <IonImg className="imgCard mx-auto" src="./assets/icon/historical.svg"></IonImg>
            <p className="text-center textCard">Consultar Exames</p>
          </IonCard>
      
        </IonRow>
        <IonRow className="flex flex-nowrap mb-0">
          <IonCard className="mr-1 bd-20 quickCard" routerLink="/exam-results">
            <IonImg className="imgCard mx-auto" src="./assets/icon/microscope.svg"></IonImg>
            <p className="text-center textCard ">Cadastrar Clínica</p>
          </IonCard>
          <IonCard className="mr-1 bd-20 quickCard">
            <IonImg className="imgCard" src="./assets/icon/appointment.svg"></IonImg>
            <p className="text-center textCard">Vincular Profissional</p>
          </IonCard>
          <IonCard className="mr-1 bd-20 quickCard" routerLink="historical-clinic">
            <IonImg className="imgCard mx-auto" src="./assets/icon/historical.svg"></IonImg>
            <p className="text-center textCard">Vincular Paciente</p>
          </IonCard>
      
        </IonRow>
     </IonGrid>
       
        
    </div>
    
  );
};

export default DashboardAdmin;
