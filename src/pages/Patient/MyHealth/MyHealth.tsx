import {
  IonButton,
  IonCard,
  IonCardContent,
  IonIcon,
  IonImg,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import {
  medkitOutline
} from "ionicons/icons";
import { useRef, useState } from "react";
import { Redirect, Route } from "react-router";
import DateTime from "../../../components/DateTime/DateTime";
import Identificador from "../../../components/Identificador/Identificador";
import QuickAccess from "../../../components/Patient/QuickAcess/QuickAccess";
import { healthService } from "../../../services/healthService";


const MyHealth: React.FC = () => {
  const [id, setId] = useState<string>();
  const [age, setAge] = useState<string>();
  const [height, setHeight] = useState<string>();
  const [ gender, setGender] = useState<string>();

  // const value = {
  //   id: id,
  //   age: age,
  //   height: height,
  //   gender: gender,
  //   weight: weight
  // }

  // const updateHealth = async () => {
  //   await healthService.updateHealth(value).then((resp) => {
      
  //   }).catch((err) => {
  //    console.log(err)
  //  })
  // }

  return (
    <IonPage>
      <IonImg src="./assets/logo.png" className="imgLogoSmall" />
      <Identificador />
      <div>
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
          <IonButton className="mt-8" color="tertiary">
            Salvar
          </IonButton>
          {/* <QuickAccess /> */}
          {/* <IonCard color="tertiary" className="bd-20">
            <IonCardContent className="flex justify-center align-middle">
              <span className="font-bold text-2xl text-center">
                {" "}
                AGENDA DE MEDICAMENTOS
              </span>
              <IonIcon icon={medkitOutline} className="w-20 h-20"></IonIcon>
            </IonCardContent>
          </IonCard> */}
        </div>
      </div>
    </IonPage>
  );
};

export default MyHealth;
