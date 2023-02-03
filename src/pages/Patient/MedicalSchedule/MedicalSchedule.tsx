import {
  IonButton,
  IonCard,
  IonDatetime,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonSelect,
  IonSelectOption,
  IonText,
  IonThumbnail,
  useIonAlert,
  useIonToast,
} from "@ionic/react";
import {
  checkmarkOutline
} from "ionicons/icons";
import {  useEffect, useState } from "react";
import DateTime from "../../../components/DateTime/DateTime";
import Identificador from "../../../components/Identificador/Identificador";
import Schedules from "../../../components/SchedulePatient/SchedulePatient";
import { appointmentService } from "../../../services/appointmentService";
import { findByIdService } from "../../../services/findService";
import "./style.css";


const MedicalSchedule: React.FC = () => {
  const [presentAlert] = useIonAlert();
  const [handlerMessage, setHandlerMessage] = useState("");
  const [roleMessage, setRoleMessage] = useState("");
  const [present] = useIonToast();
  const [date, setDate] = useState("");
  const urlParams = new URLSearchParams(window.location.search);
  const userId: any = urlParams.get("id");
  const [nameDoctor, setNameDoctor] = useState("");
  const [avatarDoctor, setAvatarDoctor] = useState("");
  const [idRoom, setIdRoom] = useState("");

  useEffect(() => {
    findDotor();
    // findDateAppointment()
  }, [])
  
  const id: any = {
    id: userId,
  }

  // const findDateAppointment = async () => {
  //   await appointmentService.appointmentDisponibleDay(userId).then((resp) => {
  //     console.log(userId)
  //     console.log(resp)
  //   });
  //   await appointmentService.appointmentDisponibleHour(userId).then((resp) => {
  //     console.log(userId)
  //     console.log(resp)
  //   })
  // }

  const values = {
    provider_id: userId,
    date: date,
    idRoom: idRoom
  }

  const createRoom = () => {
    var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJLMNOPQRSTUVWXYZ";
    var passwordLength = 6;
    var room = "";

    for (var i = 0; i < passwordLength; i++) {
      var randomNumber = Math.floor(Math.random() * chars.length);
      room += chars.substring(randomNumber, randomNumber + 1);
    }
    console.log(room)
    setIdRoom(room)
    presentToast();
  }

  const createAppointment = async () => {
    await appointmentService.appointmentCreate(values).then((resp) => {
      presentToast();
    })
  }

  const findDotor = async () => {
    console.log('teste');
    console.log(id);
    await findByIdService.findProfileByIdDoctor(id).then((resp) => {
      console.log(resp);
      setNameDoctor(resp.data.name);
      setAvatarDoctor(resp.data.avatar_url);
    }).catch((err) => {
       console.log(err);
     })
  }

  const renderizeAvatar = () => {
    if (avatarDoctor == null || avatarDoctor == "") {
      return 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y'
    } else {
      return avatarDoctor
    }
  }


  const presentToast = () => {
    present({
      message: "Consulta marcada com sucesso!",
      duration: 1500,
      position: "top",
      
    });
  };

  const alert = () => {
    // findDateAppointment()
    presentAlert({
      header: "DESEJA MARCAR SUA CONSULTA?",
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
            createRoom();
          },
        },
      ],
      onDidDismiss: (e: CustomEvent) =>
        setRoleMessage(`Dismissed with role: ${e.detail.role}`),
    });
  };

  return (
    <IonPage className="justify-start">
      <Identificador />

      <div>
        <IonItem lines="none">
          <IonThumbnail slot="start">
            <img
              alt="Silhouette of mountains"
              className="rounded-xl"
              src={renderizeAvatar()}
            />
          </IonThumbnail>
          <div className="flex flex-col">
            <IonLabel className="text-bold">Dr(a) {nameDoctor}</IonLabel>
            {/* <IonLabel>Neurologista</IonLabel> */}
          </div>
        </IonItem>
        <IonItem className="mt-5" lines="none">
          <IonDatetime
            color="black"
            presentation="date"
            min="2022-12-01T00:00:00"
            size="cover"
          >
            <IonText
              color="tertiary"
              className="font-bold text-lg flex justify-center"
              slot="title"
            >
              <span>ESCOLHA UMA DATA</span>
            </IonText>
          </IonDatetime>
        </IonItem>

        <IonCard className="bg-white">
          <IonText
            color="tertiary"
            className="font-bold text-lg flex justify-center mt-10"
          >
            <span>ESCOLHA UM HORÁRIO</span>
          </IonText>

          <div className="mx-auto flex-col mb-10">
            <IonList>
              <div className="hourSelector">
                <IonSelect
                  interface="action-sheet"
                  placeholder="08:00"
                  className="placeholder"
                >
                  <IonSelectOption value="08:00">08:00</IonSelectOption>
                  <IonSelectOption value="11:00">11:00</IonSelectOption>
                  <IonSelectOption value="15:00">15:00</IonSelectOption>
                  <IonSelectOption value="16:30">16:30</IonSelectOption>
                  <IonSelectOption value="18:00">18:00</IonSelectOption>
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
        
      </div>
    </IonPage>
  );
};

export default MedicalSchedule;
