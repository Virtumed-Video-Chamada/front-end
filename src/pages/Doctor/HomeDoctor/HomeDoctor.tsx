import { IonImg, IonItem, IonPage } from "@ionic/react";

import { useHistory } from "react-router";
import Appointments from "../../../components/Appointments/Appointments";
import CardMedicalRecords from "../../../components/Doctor/CardMedicalRecords/CardMedicalRecords";
import Identificador from "../../../components/Identificador/Identificador";
import PopularDoctor from "../../../components/Pacient/Favorites/PopularDoctor";
import QuickAccess from "../../../components/Pacient/QuickAcess/QuickAccess";
import SideMenu from "../../../components/SideMenu/SideMenu";
import "./style.css";
// import logo from "../../../assets/logo.png"

const HomeDoctor: React.FC = () => {
  return (
    <IonPage>
      <div className="pt-10">
        <IonImg
          src="./assets/logo.png"
          className="imgLogoSmall flex items-center mx-auto -mb-7"
        />

          <Identificador />
          <IonItem className="mt-0 mb-0" lines="none">
            <Appointments />
          </IonItem>
          <IonItem className="mt-0 mb-0" lines="none">
            <QuickAccess />
          </IonItem>
          <IonItem className="mt-0 mb-0" lines="none">
            <CardMedicalRecords />
          </IonItem>
      </div>
    </IonPage>
  );
};

export default HomeDoctor;
