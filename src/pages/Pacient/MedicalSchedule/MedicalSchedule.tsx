import {
  IonButton,
  IonButtons,
  IonContent,
  IonDatetime,
  IonFab,
  IonFabButton,
  IonFabList,
  IonHeader,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonPage,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonThumbnail,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { add, chevronDown, chevronUp, ellipse, heart, square, triangle } from "ionicons/icons";
import { useRef, useState } from "react";
import { Redirect, Route } from "react-router";
import DateTime from "../../../components/DateTime/DateTime";
import Identificador from "../../../components/Identificador/Identificador";

import Schedules from "../../../components/Schedules/Schedules";

const MedicalSchedule: React.FC = () => {
  return (
    <IonPage className="justify-start">
      <Identificador />
      <div className="container_schedules">
      <IonItem>
        <IonThumbnail slot="start" >
          <img alt="Silhouette of mountains" className="rounded-xl" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
        </IonThumbnail>
        <div className="flex flex-col">
          <IonLabel>Dra. Meredithy Grey</IonLabel>
          <IonLabel>Neurologista</IonLabel>
          </div>
      </IonItem>
        <IonDatetime
          presentation="date"
          minuteValues="0,15,30,45"
          dayValues="5,10,15,20,25,30"
        >
        </IonDatetime>
        <span>ESCOLHA UMA DATA</span>
      </div>
      <div>
        <span>ESCOLHA UM HORÁRIO</span>
        <IonButton  fill="outline">08:00</IonButton>
  <div>
  <IonFab slot="fixed" horizontal="center" vertical="bottom">
      <IonFabButton color="secondary">
      <span>08:00</span>
      </IonFabButton>
      <IonFabList side="top">
        <IonFabButton color="primary">
          <IonIcon icon={chevronUp}></IonIcon>
        </IonFabButton>
      </IonFabList>
    </IonFab>
  </div>
      </div>
    </IonPage>
  );
};

export default MedicalSchedule;
