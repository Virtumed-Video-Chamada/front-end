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

import {
  medkitOutline
} from "ionicons/icons";

import { useEffect, useRef, useState } from "react";
import { Redirect, Route } from "react-router";
import { patientInfo } from "../../../@types/interfaces";
import DateTime from "../../../components/DateTime/DateTime";
import Identificador from "../../../components/Identificador/Identificador";
import QuickAccess from "../../../components/Patient/QuickAcess/QuickAccess";

import { getStorage } from "../../../services/adminStorage";
import { healthService } from "../../../services/healthService";
import { alertaSucesso } from "../../../utils/alertas";


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


const MyHealth: React.FC = () => {
  const [id, setId] = useState<string>();
  const [age, setAge] = useState<string>();
  const [height, setHeight] = useState<string>();
  const [gender, setGender] = useState<string>();
  const [weight, setWeight] = useState<string>();
  const [meId, setMeId] = useState()


  useEffect(() => {
    getStorage("userIdStorage").then((storage) => {
      setMeId(storage)
    });
    findData()
   },
    [])
  
  const findData = async () => {
    await healthService.findHealth().then((resp) => {
      setAge(resp.data.age);
      setHeight(resp.data.height);
      setGender(resp.data.gender);
      setWeight(resp.data.weight);

    }).catch((err) => {
       console.log(err);
     })
  }

  const value = {
    id: meId,
    age: age,
    height: height,
    gender: gender,
    weight: weight
  }

  const updateHealth = async () => {
    await healthService.updateHealth(value).then((resp) => {
      console.log(resp)
      alertaSucesso.alerta("Dados atualizados com sucesso !");
    }).catch((err) => {
     console.log(err)
   })
  }


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

      <Identificador />
      <div>
        <form>
          <IonItem>
            <h1 className="font-semibold text-2xl">Sobre você</h1>
            <IonLabel position="floating">Idade</IonLabel>
            <IonInput value={age} placeholder="Informe seu Idade" onIonChange={e => setAge(e.detail.value!)}></IonInput>
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
            <IonInput value={weight} placeholder="Informe seu Peso (kg)" onIonChange={e => setWeight(e.detail.value!)}></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel position="floating">Altura</IonLabel>
            <IonInput value={height} placeholder="Informe seu Altura (cm)" onIonChange={e => setHeight(e.detail.value!)}></IonInput>
          </IonItem>
        </form>
        <div className="flex flex-col justify-center mt-4">
          <IonButton className="mt-8" color="tertiary" onClick={() => updateHealth()}>
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
      </IonContent>
    </IonPage>
  );
};

export default InfoPatient;
