import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonContent,
  IonDatetime,
  IonHeader,
  IonIcon,
  IonImg,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonRouterOutlet,
  IonSelect,
  IonSelectOption,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import {
  chevronDown,
  ellipse,
  heart,
  medkitOutline,
  square,
  triangle,
} from "ionicons/icons";
import { useRef, useState } from "react";
import { Redirect, Route } from "react-router";
import DateTime from "../../../components/DateTime/DateTime";
import Identificador from "../../../components/Identificador/Identificador";
import QuickAccess from "../../../components/Pacient/QuickAcess/QuickAccess";
import Schedules from "../../../components/Schedules/Schedules";

const MyHealth: React.FC = () => {
  return (
    <IonPage >
      <IonHeader className="flex flex-col justify-center items-center">
      <IonImg src='./assets/logo.png' className="w-44"/>
      <Identificador />
      
     
      <div className="container_schedules">
        <form>
          <IonItem>
            <h1 className="font-semibold text-2xl">Sobre você</h1>
            <IonLabel position="floating">Idade</IonLabel>
            <IonInput></IonInput>
          </IonItem>

          <IonItem className="mt-5">
            <IonSelect
              color="secondary"
              interface="action-sheet"
              placeholder="Gênero"
              className="font-bold"
            >
              <IonSelectOption value="Masculino">Masculino</IonSelectOption>
              <IonSelectOption value="Feminino">Feminino</IonSelectOption>
            </IonSelect>
          </IonItem>

          <IonItem>
            <IonLabel position="floating">Peso</IonLabel>
            <IonInput></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel position="floating">Altura</IonLabel>
            <IonInput></IonInput>
          </IonItem>
        </form>
        <div className="flex flex-col justify-center mt-4">
          <IonButton className='mt-8' color="tertiary">
            Salvar
          </IonButton>
          {/*   <QuickAccess /> */}
          <IonCard color="tertiary" className="bd-20" >
            <IonCardContent className="flex justify-center align-middle">
            <span className="font-bold text-2xl text-center"> AGENDA DE MEDICAMENTOS</span>
            <IonIcon icon={medkitOutline} className="w-20 h-20"></IonIcon>
            </IonCardContent>
          </IonCard>
        </div>
      </div>
      </IonHeader>
    </IonPage>
  );
};

export default MyHealth;
