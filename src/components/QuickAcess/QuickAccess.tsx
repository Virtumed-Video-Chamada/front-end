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
        <IonRow className="flex overflow-x-auto flex-nowrap mb-0" class="justify-content-center" >
          <IonCard className="min-w-[100px] h-[100px] mr-1"  color="#fff">
            <IonImg className="w-[50px] h-[50px] mt-1 " src="./assets/icon/microscope.svg"></IonImg>
            <div>Resultados de Exames</div>
          </IonCard>
          <IonCard className="min-w-[100px] h-[100px] mr-1" color="#fff">
            <IonImg className="w-[50px] h-[50px]" src="./assets/icon/appointment.svg"></IonImg>
            <div className="text-left">Consultas Anteriores</div>
          </IonCard>
          <IonCard className="min-w-[100px] h-[100px] mr-1" color="#fff"> 
            <IonImg className="w-[50px] h-[50px]" src="./assets/icon/historical.svg"></IonImg>
            <div className="text-left">Histórico Clínico</div>
          </IonCard>
          <IonCard className="min-w-[100px] h-[100px] mr-1" color="#fff">
            <IonImg className="w-[50px] h-[50px]" src="./assets/icon/chat.svg"></IonImg>
            <div className="text-left">Chamadas Anteriores</div>
          </IonCard>
        </IonRow>
    </div>
  );
};

export default QuickAccess;
