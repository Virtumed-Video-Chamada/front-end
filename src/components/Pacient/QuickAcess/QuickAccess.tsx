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


const QuickAccess: React.FC = () => {
  return (
    <div className="container">
     <h1 className="font-bold">Acesso Rápido</h1>
        <IonRow className="flex overflow-x-auto flex-nowrap  mb-0">
          <IonCard className="min-w-[100px] h-[100px] mr-1 bd-20" routerLink="/exam-results">
            <IonImg className="w-[50px] h-[50px]" src="./assets/icon/microscope.svg"></IonImg>
            <div className="text-left">Resultados de Exames</div>
          </IonCard>
          <IonCard className="min-w-[100px] h-[100px] mr-1 bd-20">
            <IonImg className="w-[50px] h-[50px]" src="./assets/icon/appointment.svg"></IonImg>
            <div className="text-center">Consultas Anteriores</div>
          </IonCard>
          <IonCard className="min-w-[100px] h-[100px] mr-1 bd-20" routerLink="historical-clinic">
            <IonImg className="w-[50px] h-[50px]" src="./assets/icon/historical.svg"></IonImg>
            <div className="text-center">Histórico Clínico</div>
          </IonCard>
          <IonCard className="min-w-[100px] h-[100px] mr-1 bd-20">
            <IonImg className="w-[50px] h-[50px]" src="./assets/icon/chat.svg"></IonImg>
            <div className="text-center">Chamadas Anteriores</div>
          </IonCard>
        </IonRow>
    </div>
  );
};

export default QuickAccess;
