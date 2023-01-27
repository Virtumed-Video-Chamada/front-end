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
  useIonAlert,
  useIonToast,
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
import { deleteService } from "../../../services/deleteService";
import { findAllService } from "../../../services/findService";
import { Redirect, useHistory } from 'react-router-dom';

const PatientList = () => {
  const [items, setItems] = useState<any>('');
  let listPatients = items;
  const [results, setResults] = useState([...listPatients]);
  const history = useHistory();
  
  const generateItems = () => {
    const newItems = [];
    for (let i = 0; i < 5; i++) {
      newItems.push(`Item ${1 + items.lenght + i}`);
    }
    setItems([...items, ...newItems]);
  };

  const handleChange = async (ev?: Event) => {
    await findAllService.findAllUsers("pacient").then((response: any) => {
      setItems(response.data);
      let query = "";
    if (ev != null) {
      const target = ev.target as HTMLIonSearchbarElement;
      if (target) query = target.value!.toLowerCase();
    }
    // eslint-disable-next-line array-callback-return
      setResults(response.data.filter((patient: any) => {
      return patient.name!.toLowerCase().indexOf(query) > -1 || patient.cpf!.toLowerCase().indexOf(query) > -1 || query === '';
    }))
    }).catch((err: any) => {
      console.log(err);
    });
  }

  useEffect(() => {
    generateItems();
    handleChange();
  }, []);

  const [change, setChange] = useState<boolean>(false);
  const [presentAlert] = useIonAlert();
  const [present] = useIonToast();
  const [handlerMessage, setHandlerMessage] = useState("");
  const [roleMessage, setRoleMessage] = useState("");
  const iconSucces = "./assets/icon/success.svg";

  const presentToast = () => {
    present({
      message: "Paciente deletado com sucesso!",
      duration: 1500,
      position: "top",
      icon: iconSucces
    });
  };

  const alert = (id: string) => {
    presentAlert({
      header: "DESEJA APAGAR O PACIENTE DO SISTEMA?",
      cssClass: "custom-alert",
      buttons: [
        {
          text: "NÃO",
          role: "cancel",
          cssClass: "alert-button-cancel",
          handler: () => {
            setHandlerMessage("Alert canceled");
          },
        },
        {
          text: "SIM",
          role: "confirm",
          cssClass: "alert-button-confirm",
          handler: async () => {
            console.log(id);
            await deleteService.deleteUser(id).then((response: any) => {
              presentToast()
            });
          },
        },
      ],
      onDidDismiss: (e: CustomEvent) =>
        setRoleMessage(`Dismissed with role: ${e.detail.role}`),
    });
  };

  const redirect = (id: string) => {
    history.replace(`/register-patient?id=${id}`)
  }

  const renderize = () => {
    return results.map((element: any, index: any) => (
      <IonItem lines="full" key={index}>
        <IonLabel>{element.name}</IonLabel>
        <IonButton slot="end" color="primary" onClick={() => redirect(element.id)}>
          <IonIcon icon={pencilOutline}></IonIcon>
        </IonButton>
        <IonButton slot="end" color="danger" onClick={() => alert(element.id)}>
          <IonIcon icon={trashBinOutline}></IonIcon>
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
          placeholder="Pesquise por Nome"
          onIonChange={(ev) => handleChange(ev)}
        ></IonSearchbar>
        <IonItem color="primary" lines="none">
          <IonLabel>Nome</IonLabel>
        </IonItem>
        <IonList>{renderize()}</IonList>
      </IonContent>
    </IonPage>
  );
};

export default PatientList;
