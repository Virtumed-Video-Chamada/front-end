import {
  IonButton,
  IonContent,
  IonImg,
  IonItem,
  IonPage,
  IonSearchbar,

} from "@ionic/react";

import {  useHistory } from "react-router";
import Appointments from "../../../components/Appointments/Appointments";
import Identificador from "../../../components/Identificador/Identificador";
import PopularDoctor from "../../../components/Pacient/PopularDoctor/PopularDoctor";
import QuickAccess from "../../../components/Pacient/QuickAcess/QuickAccess";
import SideMenu from "../../../components/SideMenu/SideMenu";
import "./style.css";
// import logo from "../../../assets/logo.png"

const HomePaciente: React.FC = () => {
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
      <h1 className="font-bold text-xl pl-8">Encontre seu médico</h1>
      <IonSearchbar
        color="light"
        placeholder="Pesquise por médico ou especialidade"
        onClick={router}
      ></IonSearchbar>
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

export default HomePaciente;
