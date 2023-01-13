import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonSearchbar,
  IonText,
  IonToolbar,
} from "@ionic/react";
import {
  list,
  pencilOutline,
  star,
  trashBin,
  trashBinOutline,
} from "ionicons/icons";
import React, { useEffect, useState } from "react";
import { userPacient } from "../../../@types/interfaces";
import { mockedPatients } from "../../../mocks/patient";

const PatientList = () => {
  const [items, setItems] = useState<any>(mockedPatients);
  let listPatients = mockedPatients;
  const [results, setResults] = useState([...listPatients]);

  const generateItems = () => {
    const newItems = [];
    for (let i = 0; i < 5; i++) {
      newItems.push(`Item ${1 + items.lenght + i}`);
    }
    setItems([...items, ...newItems]);
  };

  const handleChange = (ev?: Event) => {
    let query = "";
    if (ev != null) {
      const target = ev.target as HTMLIonSearchbarElement;
      if (target) query = target.value!.toLowerCase();
    }
    setResults(
      listPatients.filter((patient) => {
        return patient.name!.toLowerCase().indexOf(query) > -1 || query === "";
      })
    );
  };

  useEffect(() => {
    generateItems();
    handleChange();
  }, []);

  const renderize = () => {
    return results.map((element: any, index: any) => (
      <IonItem lines="full" key={index}>
        <IonLabel>{element.name}</IonLabel>
        <IonButton slot="end" color="primary">
          <IonIcon icon={pencilOutline} slot="end"></IonIcon>
          Editar
        </IonButton>
        <IonButton slot="end" color="danger">
          <IonIcon icon={trashBinOutline} slot="end"></IonIcon>
          Deletar
        </IonButton>
      </IonItem>
    ));
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonText class=" flex justify-start p-3 text-black text-lg font-bold">
          Pacientes Cadastrados
        </IonText>
        <IonSearchbar
          debounce={1000}
          onIonChange={(ev) => handleChange(ev)}
        ></IonSearchbar>
        <IonItem color="primary" lines="none">
          <IonLabel>Nome</IonLabel>
        </IonItem>
        <IonItem color="tertiary" lines="none">
          <IonLabel>A</IonLabel>
        </IonItem>
        <IonList>{renderize()}</IonList>
      </IonContent>
    </IonPage>
  );
};

export default PatientList;
