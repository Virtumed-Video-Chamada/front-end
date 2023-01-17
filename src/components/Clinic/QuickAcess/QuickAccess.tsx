// interface ContainerProps {
//   name: string;
// }
import { calendarClearOutline, calendarOutline, camera, ellipse, home, logOutOutline, personOutline, settingsOutline, square, triangle, homeOutline, medkitOutline, chatbubblesOutline } from 'ionicons/icons';
import {
  IonCard,
  IonIcon,
  IonImg,

  IonRow,
} from "@ionic/react";
import "./style.css"


const QuickAccess: React.FC = () => {
  return (
    <div className="container">
     <h1 className="font-bold text-l pl-3">Acesso Rápido</h1>
        <IonRow className="flex overflow-x-auto flex-nowrap  mb-0">
        <IonCard className="mr-1 bd-20 quickCard">
            <IonImg className="imgCard fill-primary" src="./assets/icon/medkit.svg"></IonImg>
            <p className="text-center textCard">Cadastrar Médico</p>
          </IonCard>
          <IonCard className="mr-1 bd-20 quickCard">
            <IonImg className="imgCard" src="./assets/icon/appointment.svg"></IonImg>
            <p className="text-center textCard">Consultas do dia</p>
        </IonCard>
        <IonCard className="mr-1 bd-20 quickCard">
            <IonImg className="imgCard" src="./assets/icon/calendarNumber.svg"></IonImg>
            <p className="text-center textCard">Agenda Médica</p>
          </IonCard>
      
        </IonRow>
        <IonRow>
    
        <IonCard className="mr-1 bd-20 quickCard" routerLink="historical-clinic">
            <IonImg className="imgCard mx-auto" src="./assets/icon/personAdd.svg"></IonImg>
            <p className="text-center textCard">Cadastrar Paciente</p>
          </IonCard>
          <IonCard className="mr-1 bd-20 quickCard" routerLink="historical-clinic">
            <IonImg className="imgCard mx-auto" src="./assets/icon/microscope.svg"></IonImg>
            <p className="text-center textCard">Lançar Exames</p>
          </IonCard>
          <IonCard className="mr-1 bd-20 quickCard" routerLink="historical-clinic">
            <IonImg className="imgCard mx-auto" src="./assets/icon/historical.svg"></IonImg>
            <p className="text-center textCard">Consultar Exames</p>
          </IonCard>   
        </IonRow>
    </div>
  );
};

export default QuickAccess;
