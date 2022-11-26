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
  IonPage,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { addOutline, chevronDown, ellipse, heart, square, triangle } from "ionicons/icons";
import { useRef, useState } from "react";
import { Redirect, Route } from "react-router";
import DateTime from "../../components/DateTime/DateTime";
import Identificador from "../../components/Identificador/Identificador";
import QuickAccess from "../../components/QuickAcess/QuickAccess";

import Schedules from "../../components/Schedules/Schedules";

const HistoricalClinic: React.FC = () => {
  return (
    <IonPage className="justify-start">
      <Identificador />
      <div className="container_schedules">
        <div className="mt-10">Histórico Clínico</div>
        <IonAccordionGroup multiple={true}>
            <IonAccordion toggleIcon={addOutline} toggleIconSlot="end">
              <IonItem slot="header" color="light">
                <IonLabel>
                  <span>Schedules </span>
                  <span>19/11/2022</span>
                </IonLabel>
              </IonItem>
              <div className="ion-padding flex flex-col" slot="content">
                <span>Dr Vinicius Oliveira</span>
                <p>First Content</p> 
              </div>
          </IonAccordion>
          <IonAccordion toggleIcon={addOutline} toggleIconSlot="end">
              <IonItem slot="header" color="light">
                <IonLabel>
                  <span>Schedules </span>
                  <span>19/11/2022</span>
                </IonLabel>
              </IonItem>
              <div className="ion-padding" slot="content">
                First Content
              </div>
          </IonAccordion>
        </IonAccordionGroup>
      
      </div>
    </IonPage>
  );
};

export default HistoricalClinic;
