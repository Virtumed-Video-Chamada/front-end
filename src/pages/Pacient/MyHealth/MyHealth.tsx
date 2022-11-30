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
        <IonButton>SALVAR</IonButton>
        <QuickAccess />
        <IonButton>AGENDA DE MEDICAMENTOS</IonButton>
      </div>
    </IonPage>
  );
};

export default MyHealth;
