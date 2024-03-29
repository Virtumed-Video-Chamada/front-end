import {
  IonButton,
  IonContent,
  IonIcon,
  IonImg,
  IonItem,
  IonPage,
  IonSearchbar,
} from "@ionic/react";

import { useEffect, useState } from "react";


import {  useHistory } from "react-router";
import Appointments from "../../../components/Appointments/Appointments";
import Identificador from "../../../components/Identificador/Identificador";
import PopularDoctor from "../../../components/Patient/PopularDoctor/PopularDoctor";

import QuickAccess from "../../../components/Patient/QuickAcess/QuickAccess";
import { getStorage } from "../../../services/adminStorage";

import "./style.css";
// import logo from "../../../assets/logo.png"

const  HomePatient: React.FC = () => {
  const history = useHistory();
  const router = () => {
    history.replace("/find-doctor");
  };
  const [meId, setMeId] = useState()

  useEffect(() => {
    getStorage("userIdStorage").then((storage) => {
      setMeId(storage)
    });
  }, [])
  
  return (
    <IonPage>
      <IonContent>

        <IonImg src='./assets/logo.png' className='imgLogoSmall flex items-center mx-auto' />
        <Identificador/>
        <h1 className="font-bold text-lg pl-8">Encontre seu médico</h1>
        <IonSearchbar color="light" placeholder="Pesquise por médico ou especialidade" onClick={router}></IonSearchbar>     
        <IonItem className="mt-0 mb-0" lines="none">
          <Appointments id={meId}/>
        </IonItem>
        <IonItem className="mt-0 mb-0 px-0" lines="none">
          <QuickAccess />
        </IonItem>
        <IonItem className="mt-0 mb-0 mx-auto" lines="none">
          <PopularDoctor/>
        </IonItem>
     </IonContent> 

    </IonPage>
    
  );
};

export default HomePatient;
