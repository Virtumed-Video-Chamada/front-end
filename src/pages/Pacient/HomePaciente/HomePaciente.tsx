import {
  IonAvatar,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonPage,
  IonRouterOutlet,
  IonSearchbar,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonText,
  IonThumbnail,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { ellipse, square, triangle } from "ionicons/icons";
import { Redirect, Route } from "react-router";
import Appointments from "../../../components/Appointments/Appointments";
import Identificador from "../../../components/Identificador/Identificador";
import PopularDoctor from "../../../components/Pacient/PopularDoctor/PopularDoctor";
import QuickAccess from "../../../components/Pacient/QuickAcess/QuickAccess";

const HomePaciente: React.FC = () => {
  return (
    <IonPage className="justify-start">
      <Identificador/>
      <h1 className="font-bold text-black ml-9 text-xl">Encontre seu médico</h1>
      <IonItem className="mt-0 mb-0" routerLink="/find-doctor">
        <IonSearchbar placeholder="Pesquise por médico ou especialidade" color="primary"></IonSearchbar>
      </IonItem>
      <IonItem className="mt-0 mb-0" lines="none">
        <Appointments />
      </IonItem>
      <IonItem className="mt-0 mb-0" lines="none">
        <QuickAccess />
      </IonItem>
      <IonItem className="mt-0 mb-0" lines="none">
        <PopularDoctor/>
      </IonItem>
    </IonPage>
  );
};

export default HomePaciente;
