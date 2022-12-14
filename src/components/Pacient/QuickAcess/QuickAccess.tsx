import { IonCard, IonImg, IonRow } from "@ionic/react";
import './style.css';

const QuickAccess: React.FC = () => {
  return (
    <div className="container">
      <h1 className="font-bold pl-3">Acesso Rápido</h1>
      <IonRow className="flex overflow-hidden flex-nowrap  mb-0">
        <IonCard
          className="cardQuick"
          color="#fff"
           routerLink="/exam-results" 
        >
          <IonImg
            className="w-[50px] h-[50px] mx-auto"
            src="./assets/icon/microscope.svg"
          ></IonImg>
          <div className="text-center">Resultados de Exames</div>
        </IonCard>
        <IonCard
          className="cardQuick"
          color="#fff"
        >
          <IonImg
            className="w-[50px] h-[50px] mx-auto"
            src="./assets/icon/appointment.svg"
          ></IonImg>
          <div className="text-center">Consultas Anteriores</div>
        </IonCard>
        <IonCard
          className="cardQuick"
          color="#fff"
          routerLink="/historical-clinic" 
        >
          <IonImg
            className="w-[50px] h-[50px] mx-auto"
            src="./assets/icon/historical.svg"
          ></IonImg>
          <div className="text-center">Histórico Clínico</div>
        </IonCard>
        
      </IonRow>
    </div>
  );
};

export default QuickAccess;
