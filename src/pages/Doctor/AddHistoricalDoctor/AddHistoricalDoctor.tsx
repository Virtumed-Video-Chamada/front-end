import { useEffect, useState } from "react";
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonImg,
  IonInput,
  IonItem,
  IonItemDivider,
  IonItemGroup,
  IonLabel,
  IonList,
  IonPage,
  IonSearchbar,
  IonSelect,
  IonSelectOption,
  IonText,
  IonToolbar,
  useIonAlert,
  useIonLoading,
  useIonToast,
} from "@ionic/react";
import Identificador from "../../../components/Identificador/Identificador";
import { checkmarkOutline, documentTextOutline } from "ionicons/icons";
import { mockedPatients } from "../../../mocks/patient";
import { findAllService, findByIdService } from "../../../services/findService";
import { useHistory } from "react-router";
import { historicMedicalService } from "../../../services/historicMedicalService";

const AddHistoricalDoctor: React.FC = () => {
  const [presentAlert] = useIonAlert();
  const [handlerMessage, setHandlerMessage] = useState("");
  const [roleMessage, setRoleMessage] = useState("");
  const [present] = useIonToast();
  const [namePacient, setNamePacient] = useState('');
  const [avatarPacient, setAvatarPacient] = useState('');
  const [diagnosis, setDiagnostic] = useState('');
  const [observations, setObservations] = useState('');


  const urlParams = new URLSearchParams(window.location.search);
  const userId = {
    id: urlParams.get("id")
  }

  useEffect(() => {
    handler();
  }, []);

  const handler = async () => {
    await findByIdService.findProfileByIdPacient(userId).then((response: any) => {
      setNamePacient(response.data.name);
      setAvatarPacient(response.data.avatar_url)
    });
  };



  const presentToast = () => {
    present({
      message: "Histórico Cadastrado!",
      duration: 1500,
      position: "top",
    });
  };

  const alert = () => {
    presentAlert({
      header: "DESEJA ENVIAR HISTÓRICO DE PACIENTE?",
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
            addHistoric();
            console.log(values)
          },
        },
      ],
      onDidDismiss: (e: CustomEvent) =>
        setRoleMessage(`Dismissed with role: ${e.detail.role}`),
    });
  };

  const values = {
    pacientId: urlParams.get("id"),
    diagnosis: diagnosis,
    observations: observations,
    date: new Date(),
  }

  const addHistoric = async () => {
    await historicMedicalService.historicClinic(values).then((resp) => {
      presentToast();
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

      <IonContent>
        <IonImg
          src="./assets/logo.png"
          className="imgLogoSmall flex items-center mx-auto"
        />
        <IonText class=" flex justify-center mt-5 text-black text-xl font-bold">
          Adicionar Histórico Médico
        </IonText>

        <IonCard className="flex h-32">
          <img
             src={avatarPacient == null ? "https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" : avatarPacient}
            alt="doctor-image"
            className="docPic h-24 w-24 p-4"
          ></img>
         
          <IonCardHeader>
            <div className="font-bold">{namePacient}</div>
            <IonCardSubtitle>Paciente</IonCardSubtitle>
          </IonCardHeader>
        </IonCard>

        <IonCard className="bg-white">
          <div className="mx-auto flex-col mb-10">
            <IonList>
              <IonItem lines="inset" className="pr-2">
                <IonLabel position="floating" color="form">
                  <span className="flex items-center">
                    <span className="text-sm font-medium pl-2">
                      Título Identificador
                    </span>
                  </span>
                </IonLabel>
                <IonInput
                  value={diagnosis}
                  className="inputSelsyn"
                  type="text"
                  placeholder="Título"
                  onIonChange={(e: any) => setDiagnostic(e.detail?.value)}
                ></IonInput>
              </IonItem>
              <IonItem lines="inset" className="pr-2">
                <IonLabel position="floating" color="form">
                  <span className="flex items-center">
                    <span className="text-sm font-medium pl-2">
                      Observações
                    </span>
                  </span>
                </IonLabel>
                <IonInput
                  className="inputSelsyn"
                  value={observations}
                  onIonChange={(e: any) => setObservations(e.detail?.value)}
                  type="text"
                  placeholder="Diagnóstico"
                ></IonInput>
              </IonItem>
              <IonItem>
                <IonSelect interface="popover" placeholder="Tipo de Diagnóstico">
                  <IonSelectOption value="revisao">Revisão</IonSelectOption>
                  <IonSelectOption value="atendimento">Atendimento</IonSelectOption>
                  <IonSelectOption value="emergencia">Emergência</IonSelectOption>
                </IonSelect>
              </IonItem>
            </IonList>
          </div>
        </IonCard>
        <div className="flex justify-center">
          <IonButton
            className="text-lg font-bold"
            color="tertiary"
            onClick={alert}
          >
            <IonIcon slot="start" icon={checkmarkOutline}></IonIcon>
            CONFIRMAR
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default AddHistoricalDoctor;
