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
import Appointments from "../../components/Appointments/Appointments";
import QuickAccess from "../../components/QuickAcess/QuickAccess";

const HomePaciente: React.FC = () => {
  return (
    <IonPage className="justify-start">
      <IonItem>
        <IonThumbnail slot="end">
          <IonAvatar>
            <img
              alt="Silhouette of a person's head"
              src="https://ionicframework.com/docs/img/demos/avatar.svg"
            />
          </IonAvatar>
        </IonThumbnail>
        <IonLabel>
          <IonText>Olá, Maycon!</IonText>
          <div>Encontre seu médico</div>
        </IonLabel>
      </IonItem>
      <IonItem>
        <IonSearchbar placeholder="Pesquise por médico ou especialidade"></IonSearchbar>
      </IonItem>
      <IonItem>
        <Appointments />
      </IonItem>
      <IonItem>
        <QuickAccess />
      </IonItem>
    </IonPage>
  );
};

export default HomePaciente;
