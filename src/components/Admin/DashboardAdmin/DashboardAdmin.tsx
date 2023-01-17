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
      <IonGrid>
        
        <IonRow className="flex flex-nowrap  mb-0">
          <IonCard className="mr-1 bd-20 quickCard" routerLink="/register-doctor">
            <IonImg
              className="imgCard mx-auto"
              
              src="./assets/icon/medical-equipment.svg"
            ></IonImg>
            <p className="text-center textCard">Cadastrar Médico</p>
          </IonCard>
          <IonCard className="mr-1 bd-20 quickCard" routerLink="/find-doctor">
            <IonImg
            color="primary"
              className="imgCard mx-auto"
              src="./assets/icon/medic.svg"
            ></IonImg>
            <p className="text-center textCard">Médicos cadastrados</p>
          </IonCard>
          <IonCard
            className="mr-1 bd-20 quickCard"
            routerLink="/link-doctor"
          >
            <IonImg
              className="imgCard mx-auto"
              src="./assets/icon/link.svg"
            ></IonImg>
            <p className="text-center textCard">Vincular Médico</p>
          </IonCard>
        </IonRow>
        <IonRow className="flex flex-nowrap mb-0">
          <IonCard className="mr-1 bd-20 quickCard" routerLink="/register-patient">
            <IonImg
              className="imgCard mx-auto"
              src="./assets/icon/user.svg"
            ></IonImg>
            <p className="text-center textCard">Cadastrar Paciente</p>
          </IonCard>
          <IonCard className="mr-1 bd-20 quickCard" routerLink="/patient-list">
            <IonImg
              className="imgCard mx-auto"
              src="./assets/icon/users.svg"
            ></IonImg>
            <p className="text-center textCard">Pacientes Cadastrados</p>
          </IonCard>
          <IonCard
            className="mr-1 bd-20 quickCard"
            routerLink="/link-patient"
          >
            <IonImg
              className="imgCard mx-auto"
              src="./assets/icon/link.svg"
            ></IonImg>
            <p className="text-center textCard">Vincular Paciente</p>
          </IonCard>
       
        </IonRow>
        <IonRow className="flex flex-nowrap mb-0">
          <IonCard className="mr-1 bd-20 quickCard" routerLink="/register-clinic">
            <IonImg
              className="imgCard mx-auto"
              src="./assets/icon/hospital.svg"
            ></IonImg>
            <p className="text-center textCard ">Cadastrar Clínica</p>
          </IonCard>
          <IonCard className="mr-1 bd-20 quickCard" routerLink="/clinic-list">
            <IonImg
              className="imgCard mx-auto"
              src="./assets/icon/health.svg"
            ></IonImg>
            <p className="text-center textCard">Clínicas Cadastradas</p>
          </IonCard>
          <IonCard
            className="mr-1 bd-20 quickCard"
            routerLink="historical-clinic"
          >
            <IonImg
              className="imgCard mx-auto"
              src="./assets/icon/historical.svg"
            ></IonImg>
            <p className="text-center textCard">Consultar Exames</p>
          </IonCard>
         
        </IonRow>
      </IonGrid>
    </div>
  );
};

export default DashboardAdmin;
