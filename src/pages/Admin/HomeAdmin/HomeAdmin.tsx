import {
  IonButton,
  IonContent,
  IonImg,
  IonItem,
  IonPage,
  IonSearchbar,
} from "@ionic/react";
import { useHistory } from "react-router";
import DashboardAdmin from "../../../components/Admin/DashboardAdmin/DashboardAdmin";
import Identificador from "../../../components/Identificador/Identificador";
import "./style.css";
// import logo from "../../../assets/logo.png"

const HomeAdmin: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <IonImg
          src="./assets/logo.png"
          className="imgLogoSmall flex items-center mx-auto"
        />
        <Identificador />
        <h1 className="font-bold text-lg pl-8">Bem-vindo</h1>
        <IonItem className="mt-0 mb-0" lines="none">
          <DashboardAdmin />
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default HomeAdmin;
