import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
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
import { pencilOutline, trashBinOutline } from "ionicons/icons";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { mockedClinics } from "../../../mocks/clinic";
import { deleteService } from "../../../services/deleteService";
import { findAllService } from "../../../services/findService";

const ClinicList = () => {
  const history = useHistory();
  const [items, setItems] = useState<any>('');
  let listClinics = items;
  const [results, setResults] = useState([...listClinics]);
  const [_class, setClass] = useState<string>("flex hidden");
  const [presentAlert] = useIonAlert();
  const [present] = useIonToast();
  const [handlerMessage, setHandlerMessage] = useState("");
  const [roleMessage, setRoleMessage] = useState("");
  const iconSucces = "./assets/icon/success.svg";

  const generateItems = () => {
    const newItems = [];
    for (let i = 0; i < 5; i++) {
      newItems.push(`Item ${1 + items.lenght + i}`);
    }
    setItems([...items, ...newItems]);
  };

  const handleChange = async (ev?: Event) => {
    await findAllService.findAllUsers("clinic").then((response: any) => {
      setItems(response.data);
    
    let query = "";
    if (ev != null) {
      const target = ev.target as HTMLIonSearchbarElement;
      if (target) query = target.value!.toLowerCase();
    }
    setResults(
      listClinics.filter((clinic: any) => {
        return (
          clinic.name!.toLowerCase().indexOf(query) > -1 ||
          query === "" ||
          clinic.cnpj!.indexOf(query) > -1 ||
          query === ""
        );
      })
    )});
  };

  useEffect(() => {
    findAllService.findAllUsers("clinic").then((response: any) => {
      setItems(response.data)
    })
    generateItems();
    handleChange();
  }, []);


  

  const presentToast = () => {
    present({
      message: "Clínica deletada com sucesso!",
      duration: 1500,
      position: "top",
      icon: iconSucces
    });
  };

  const alert = (id: string) => {
    presentAlert({
      header: "DESEJA APAGAR A CLÍNICA DO SISTEMA?",
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
            await deleteService.deleteUser(id).then((response: any) => {
              console.log(response);
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
    history.replace(`/register-clinic?id=${id}`)
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
          Clínicas Cadastradas
        </IonText>
        <IonSearchbar
          debounce={1000}
          placeholder="Pesquisar por Nome ou CNPJ"
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

export default ClinicList;
