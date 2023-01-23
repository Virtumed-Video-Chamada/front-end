import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonContent,
  IonDatetime,
  IonImg,
  IonText,
  IonButton,
  IonCard,
  IonIcon,
  IonList,
  IonSelect,
  IonSelectOption,
  useIonAlert,
  useIonToast,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
} from "@ionic/react";
import { checkmarkOutline } from "ionicons/icons";
import { useEffect, useState } from "react";
import { findAllService } from "../../../services/findService";
import "./style.css";



const LinkDoctor: React.FC = () => {
    const [presentAlert] = useIonAlert();
    const [handlerMessage, setHandlerMessage] = useState("");
    const [roleMessage, setRoleMessage] = useState("");
    const [present] = useIonToast();
  const [date, setDate] = useState("");
  const [listClinic, setListClinic] = useState(['']);
  
  useEffect(() => {
    handler();
   }, [])
  
  const handler = async () => {
    await findAllService.findAllUsers("clinic").then((response: any) => {
      setListClinic(response.data)
    });
  }
  
    const presentToast = () => {
      present({
        message: "Vínculo feito com sucesso!",
        duration: 1500,
        position: "top",
        
      });
    };
  
    const alert = () => {
      presentAlert({
        header: "DESEJA VINCULAR O MÉDICO À CLÍNICA SELECIONADA?",
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
            handler: () => {
              presentToast();
            },
          },
        ],
        onDidDismiss: (e: CustomEvent) =>
          setRoleMessage(`Dismissed with role: ${e.detail.role}`),
      });
  };
  
  const renderize = () => { 
    return listClinic.map((element: any, index: any) => (
      <IonSelectOption key={index} value={element.name}>{element.name}</IonSelectOption>
  ))
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

      <IonContent>
        <IonImg
          src="./assets/logo.png"
          className="imgLogoSmall flex items-center mx-auto"
        />
        <IonText class=" flex justify-center mt-5 text-black text-xl font-bold">
          Vincular Médico
        </IonText>

        <IonCard className="flex h-72">
            <img src="assets\avatar\dra-maria.jpg" alt="doctor-image" className="docPic h-64 w-44 p-4"></img>
            <IonCardHeader>
                <IonCardTitle>
                        Maria Renata
                </IonCardTitle>
                <IonCardSubtitle>
                        Neurologista
                </IonCardSubtitle>
                <IonCardSubtitle>
                        Clínica Inovar
                </IonCardSubtitle>
                <IonCardSubtitle>
                        CRM - 1100
                </IonCardSubtitle>
                
            </IonCardHeader>
        </IonCard>

        <IonCard className="bg-white">
          <IonText
            color="tertiary"
            className="font-bold text-lg flex justify-center mt-10"
          >
            <span>ESCOLHA UMA CLÍNICA</span>
          </IonText>

          <div className="mx-auto flex-col mb-10">
            <IonList>
              <div className="clinicSelector">
                <IonSelect
                  interface="action-sheet"
                  placeholder="SELECIONAR"
                  className="placeholder"
                >
                  {renderize()}

                  
                </IonSelect>
              </div>
            </IonList>
          </div>
        </IonCard>
        <div className="flex justify-center">
        <IonButton className="text-lg font-bold" color="tertiary" onClick={alert}>
          <IonIcon slot="start" icon={checkmarkOutline}></IonIcon>
          CONFIRMAR
        </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default LinkDoctor;
