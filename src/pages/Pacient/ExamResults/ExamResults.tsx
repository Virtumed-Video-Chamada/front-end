import {
  IonAccordion,
  IonAccordionGroup,
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
  IonList,
  IonPage,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { addOutline, chevronDown, downloadOutline, ellipse, heart, square, triangle } from "ionicons/icons";
import { useRef, useState } from "react";
import { Redirect, Route } from "react-router";
import DateTime from "../../../components/DateTime/DateTime";
import Identificador from "../../../components/Identificador/Identificador";
import QuickAccess from "../../../components/Pacient/QuickAcess/QuickAccess";

import Schedules from "../../../components/Schedules/Schedules";

const ExamResults: React.FC = () => {
  return (
    <IonPage className="justify-start">
      <Identificador />
      <div className="container_schedules">
        <div className="mt-10">Resultados de Exames</div>
        <IonList>
          <IonItem>
            <IonLabel>
              <span>hemograma_completo.pdf</span>
              <IonIcon icon={downloadOutline}></IonIcon>
              <span>23/11/2022</span>
            </IonLabel>
          </IonItem>
        </IonList>
      
      </div>
    </IonPage>
  );
};

export default ExamResults;
