import {
  IonButton,
  IonCard,
  IonContent,
  IonIcon,
  IonImg,
  IonItem,
  IonPage,
  IonSearchbar,
} from "@ionic/react";
import { searchOutline } from "ionicons/icons";

import { useHistory } from "react-router";
import Appointments from "../../../components/Appointments/Appointments";
import Identificador from "../../../components/Identificador/Identificador";
import PopularDoctor from "../../../components/Patient/PopularDoctor/PopularDoctor";
import QuickAccess from "../../../components/Patient/QuickAcess/QuickAccess";

import SideMenu from "../../../components/SideMenu/SideMenu";
import "./style.css";
// import logo from "../../../assets/logo.png"

const HomePatient: React.FC = () => {
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
          <IonCard>
          <IonButton routerLink="/find-doctor">
            <IonIcon slot="start" icon={searchOutline} ></IonIcon>
            Pesquise por médico ou por especialidade
          </IonButton>
          </IonCard>
        
        </div>

        <IonItem className="mt-0 mb-0" lines="none">
          <Appointments />
        </IonItem>
        <IonItem className="mt-0 mb-0" lines="none">
          <QuickAccess />
        </IonItem>
        <IonItem className="mt-0 mb-0" lines="none">
          <PopularDoctor />
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default HomePatient;
