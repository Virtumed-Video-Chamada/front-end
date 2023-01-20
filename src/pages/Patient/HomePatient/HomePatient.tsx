import {
  IonButton,
  IonContent,
  IonIcon,
  IonImg,
  IonItem,
  IonPage,
  IonSearchbar,
} from "@ionic/react";
import { searchOutline } from "ionicons/icons";

import {  useHistory } from "react-router";
import Appointments from "../../../components/Appointments/Appointments";
import Identificador from "../../../components/Identificador/Identificador";
import PopularDoctor from "../../../components/Patient/PopularDoctor/PopularDoctor";

import QuickAccess from "../../../components/Patient/QuickAcess/QuickAccess";

import "./style.css";
// import logo from "../../../assets/logo.png"

const  HomePatient: React.FC = () => {
  const history = useHistory();
  const router = () => {
    history.replace("/find-doctor");
  };
  return (
    <IonPage>
      <IonContent>
        <IonImg
          src="./assets/logo.png"
          className="imgLogoSmall flex items-center mx-auto"
        />
        <Identificador />
        <div className="container">
          <h1 className="font-bold text-lg pl-8">Encontre seu médico</h1>
          <IonItem className="p-4" lines="none">
            <IonButton routerLink="/find-doctor">
              <IonIcon slot="start" icon={searchOutline}></IonIcon>
              Pesquise por médico ou por especialidade
            </IonButton>
          </IonItem>
          <IonItem className="mt-0 mb-0" lines="none">
            <Appointments />
          </IonItem>
          <IonItem className="mt-0 mb-0" lines="none">
            <QuickAccess />
          </IonItem>
          <IonItem className="mt-0 mb-0" lines="none">
            <PopularDoctor />
          </IonItem>
        </div>
      </IonContent>
    </IonPage>
    
  );
};

export default HomePatient;
