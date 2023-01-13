import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonPage,
  IonRouterOutlet,
  IonSearchbar,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { ellipse, heart, square, triangle } from "ionicons/icons";
import { Redirect, Route } from "react-router";
import Identificador from "../../../components/Identificador/Identificador";
import ListDoctor from "../../../components/Pacient/ListDoctor/ListDoctor";
import PreCall from "../../../components/PreCall/PreCall";

const FindDoctor: React.FC = () => {
  return (
    <IonPage className="justify-start">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonImg
          src="./assets/logo.png"
          className="imgLogoSmall flex items-center mx-auto"
        />
      <IonText class=" flex justify-center mt-5 text-black text-xl font-bold">
        Médicos Cadastrados
      </IonText>

      <ListDoctor />
    </IonPage>
  );
};

export default FindDoctor;
