import {
  IonButton,
  IonButtons,
  IonContent,
  IonDatetime,
  IonHeader,
  IonIcon,
  IonImg,
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

import Schedules from "../../../components/Schedules/Schedules";

const HomePaciente: React.FC = () => {
  return (
    <IonPage className="justify-start">
      <Identificador />
      <DateTime />
      <div className="container_schedules">
        <Schedules/>
        {/* <div className="container flex flex-col align-center justify-center items-center">
          <IonImg
            className="w-[240px] h-[262px]"
            src="./assets/icon/agenda.svg"
          ></IonImg>
          <div className="flex flex-col text-center">
            <span className="text-center">NÃO HÁ CONSULTAS</span>
            <span className="text-center">AGENDADAS NO MOMENTO</span>
          </div>
        </div> */}
      </div>
    </IonPage>
  );
};

export default HomePaciente;
