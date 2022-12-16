import {
  IonButton,
  IonButtons,
  IonContent,
  IonDatetime,
  IonHeader,
  IonIcon,
  IonImg,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { chevronDown, ellipse, heart, square, triangle } from "ionicons/icons";
import { useRef, useState } from "react";
import { Redirect, Route } from "react-router";
import DateTime from "../../../components/DateTime/DateTime";
import Identificador from "../../../components/Identificador/Identificador";
import QuickAccess from "../../../components/Pacient/QuickAcess/QuickAccess";

import Schedules from "../../../components/Schedules/Schedules";



const MyHealth: React.FC = () => {
  const teste: any = "none"
  return (
    <IonPage className="justify-start">
      <Identificador />
      <div className="container_schedules">
        <form>
          <IonItem>
            <IonLabel>Idade</IonLabel>
            <IonInput></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel>Gênero</IonLabel>
            <IonInput></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel>Peso</IonLabel>
            <IonInput></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel>Altura</IonLabel>
            <IonInput></IonInput>
          </IonItem>
        </form>
        <div className="flex flex-col justify-center mt-4">
          <IonButton className='mt-8' color="tertiary">
            Salvar
          </IonButton>
            <QuickAccess />
          <IonCard color="tertiary" className="bd-20" >
            <IonCardContent className="flex justify-center align-middle">
            <span className="font-bold text-2xl text-center"> AGENDA DE MEDICAMENTOS</span>
            <IonIcon icon={medkitOutline} className="w-20 h-20"></IonIcon>
            </IonCardContent>
          </IonCard>
        </div>
      </div>
    </IonPage>
  );
};

export default MyHealth;
