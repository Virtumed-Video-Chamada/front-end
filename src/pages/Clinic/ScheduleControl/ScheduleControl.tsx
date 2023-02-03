import {
  IonButton,
  IonCard,
  IonCheckbox,
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



const ScheduleControl: React.FC = () => {
  const [presentAlert] = useIonAlert();
  const [handlerMessage, setHandlerMessage] = useState("");
  const [roleMessage, setRoleMessage] = useState("");
  const [present] = useIonToast();
  const [date, setDate] = useState("");
  const urlParams = new URLSearchParams(window.location.search);
  const userId: any = urlParams.get("id");
  const [nameDoctor, setNameDoctor] = useState("");
  const [avatarDoctor, setAvatarDoctor] = useState("")

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

  const findDotor = async () => {
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
            presentToast();
          },
        },
      ],
      onDidDismiss: (e: CustomEvent) =>
        setRoleMessage(`Dismissed with role: ${e.detail.role}`),
    });
  };

  const schedulesOptions = [
    { scheduleId: 0, scheduleName: '08 hr', checked: false },
    { scheduleId: 1, scheduleName: '09 hr', checked: false },
    { scheduleId: 2, scheduleName: '10 hr', checked: false },
    { scheduleId: 3, scheduleName: '11 hr', checked: false },
    { scheduleId: 4, scheduleName: '13 hr', checked: false },
    { scheduleId: 5, scheduleName: '14 hr', checked: false },
    { scheduleId: 6, scheduleName: '15 hr', checked: false },
    { scheduleId: 7, scheduleName: '16 hr', checked: false },
    { scheduleId: 8, scheduleName: '17 hr', checked: false },
    { scheduleId: 9, scheduleName: '18 hr', checked: false },
  ]

  let schedules: any[] = []

  const handleChanges = (e: any, value: boolean) => {
    schedulesOptions[e].checked = !value;
    schedules.push(schedulesOptions[e])
    schedules =  schedules.filter( schedules =>  schedules.checked == true);
  }

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
            <IonLabel>Neurologista</IonLabel>
          </div>
        </IonItem>
        <IonItem className="mt-5" lines="none">
          <IonDatetime
            color="black"
            presentation="date"
            min="2022-12-01T00:00:00"
            size="cover"
            multiple={true}
          >
            <IonText
              color="tertiary"
              className="font-bold text-lg flex justify-center"
              slot="title"
            >
              <span>DATAS DISPONÍVEIS</span>
            </IonText>
          </IonDatetime>
        </IonItem>

        <IonCard className="bg-white">
          <IonText
            color="tertiary"
            className="font-bold text-lg flex justify-center mt-10"
          >
            <span>HORÁRIOS DISPONÍVEIS</span>
          </IonText>

          <div className="flex flex-row">
            <IonList className="flex flex-row flex-wrap">
              {schedulesOptions.map((item: any) => (
                <IonItem key={item.scheduleId}>
                  <IonCheckbox slot="start" value={item.checked!} onClick={() => handleChanges(item.scheduleId, item.checked)}></IonCheckbox>
                  <IonLabel>{item.scheduleName}</IonLabel>
                </IonItem>
              )
              )}
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

export default ScheduleControl;
