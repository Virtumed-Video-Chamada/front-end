import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonContent,
  IonHeader,
  IonIcon,
  IonImg,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonSelect,
  IonSelectOption,
  IonToolbar,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Agent } from "https";
import { medkitOutline } from "ionicons/icons";
import { useEffect, useRef, useState } from "react";
import { Redirect, Route } from "react-router";
import { patientInfo } from "../../../@types/interfaces";
import DateTime from "../../../components/DateTime/DateTime";
import Identificador from "../../../components/Identificador/Identificador";
import QuickAccess from "../../../components/Patient/QuickAcess/QuickAccess";
import { findByIdService } from "../../../services/findService";

const InfoPatient: React.FC = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const userId = urlParams.get("id");
  const [age, setAge] = useState<string>("");
  const [height, setHeight] = useState<string>("");
  const [weight, setWeight] = useState<string>("");
  const [gender, setGender] = useState<string>("");

  const values: patientInfo = {
    age: age,
    height: height,
    weight: weight,
    gender: gender,
  };

  const id: any = {
    id: userId,
  };

  const findPatientInfo = async () => {
    await findByIdService
      .findProfileByIdPacient(id)
      .then((resp) => {
        setAge(resp.data.age);
        setHeight(resp.data.height);
        setWeight(resp.data.weight);
        setGender(resp.data.gender);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    findPatientInfo();
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonImg src="./assets/logo.png" className="imgLogoSmall" />
      <IonContent>
        <div>
          <form>
            <IonItem>
              <h1 className="font-semibold text-2xl">Sobre você</h1>
              <IonLabel position="floating">Idade</IonLabel>
              <IonInput
                type="text"
                value={age}
                onIonChange={(e) => setAge(e.detail.value!)}
              ></IonInput>
            </IonItem>

            <IonItem className="mt-5">
              <IonSelect
                color="secondary"
                interface="action-sheet"
                placeholder="Gênero"
                className="font-bold"
                value={gender}
              >
                <IonSelectOption value="Masculino">Masculino</IonSelectOption>
                <IonSelectOption value="Feminino">Feminino</IonSelectOption>
              </IonSelect>
            </IonItem>

            <IonItem>
              <IonLabel position="floating">Peso</IonLabel>
              <IonInput
                onIonChange={(e) => setWeight(e.detail.value!)}
                value={weight}
              ></IonInput>
            </IonItem>

            <IonItem>
              <IonLabel position="floating">Altura</IonLabel>
              <IonInput
                value={height}
                onIonChange={(e) => setHeight(e.detail.value!)}
              ></IonInput>
            </IonItem>
          </form>
          <div className="flex flex-col justify-center mt-4">
            <IonButton className="mt-8" color="tertiary">
              Salvar
            </IonButton>
            <QuickAccess />
            <IonCard color="tertiary" className="bd-20">
              <IonCardContent className="flex justify-center align-middle">
                <span className="font-bold text-2xl text-center">
                  {" "}
                  AGENDA DE MEDICAMENTOS
                </span>
                <IonIcon icon={medkitOutline} className="w-20 h-20"></IonIcon>
              </IonCardContent>
            </IonCard>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default InfoPatient;
