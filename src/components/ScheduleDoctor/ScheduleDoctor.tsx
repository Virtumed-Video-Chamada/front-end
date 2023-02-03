import { useEffect, useState } from "react";
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
  IonList,
  IonPage,
  IonText,
  IonThumbnail,
  IonToolbar,
  useIonAlert,
  useIonToast,
} from "@ionic/react";
import ModalAlert from "../ModalAlert/ModalAlert";
import { calendarOutline, chatbubbleOutline } from "ionicons/icons";

import { appointmentService } from "../../services/appointmentService";

const ScheduleDoctor: React.FC = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const userId = urlParams.get("id");
  const [change, setChange] = useState<boolean>(false);
  const [_class, setClass] = useState<string>("flex hidden");
  const [presentAlert] = useIonAlert();
  const [handlerMessage, setHandlerMessage] = useState("");
  const [roleMessage, setRoleMessage] = useState("");
  const [present] = useIonToast();
  const iconSucces = "./assets/icon/success.svg";
  const [nameDoctor, setNameDoctor] = useState("");
  const [avatarDoctor, setAvatarDoctor] = useState("")
  const [listAppointment, setListAppointment] = useState([])

  const presentToast = () => {
    present({
      message: "Consulta cancelada com sucesso",
      duration: 1500,
      position: "top",
    });
  };

  const showChat = () => {
    setChange(!change);
    if (change === true) {
      setClass("flex");
    } else {
      setClass("flex hidden");
    }
  };

  useEffect(() => {
    findDateAppointment();
  }, [])
  
  const id: any = {
    id: userId,
  }

  const findDateAppointment = async () => {
    await appointmentService.appointmentListDoctor(id).then((resp) => {
      setListAppointment(resp.data);
    }).catch((err) => {
      console.log(err)
    });
  }


  const alert = () => {
    presentAlert({
      header: "DESEJA CANCELAR A CONSULTA?",
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
    if (listAppointment.length === 0) {
      return (
        <div className="flex flex-col gap-10 justify-center items-center w-48 mx-auto">
          <IonIcon color="primary" size="large" className="w-48 h-48" src={calendarOutline}>
          </IonIcon>
          <IonText className="font-bold text-2xl text-center">
            Você ainda não possui agendamentos!
          </IonText>
        </div>
      )
    } else {
      return (listAppointment.map((item: any) => 
        <div className="container" onClick={showChat}>
          <IonCard className="bd-20 card">
            <IonCardContent className="flex justify-around w-auto">
              <IonThumbnail slot="start">
                <img
                  className="min-w-[80px] min-h-[80px]"
                  alt="Pic-Doctor"
                  src="./assets/avatar/Pic-Doctor.png"
                />
              </IonThumbnail>
              <div className="flex flex-col gap-1 ml-11 font-bold text-black">
                <span>Maria Renata</span>
                <span>Hoje, 14:00</span>
                <div className="flex">
                  <IonButton
                    className="text-xs"
                    color="secondary"
                    onClick={alert}
                  >
                    CANCELAR
                  </IonButton>
                  <IonButton className="text-xs" color="primary">
                    CONFIRMAR
                  </IonButton>
                </div>
              </div>
            </IonCardContent>
            <div className="flex flex-row justify-center items-center">
              <div className={_class}>
                <IonButton className="text-xs w-max" expand="block">
                  ABRIR CHAT
                  <IonIcon slot="start" icon={chatbubbleOutline}></IonIcon>
                </IonButton>
              </div>
            </div>
          </IonCard>
        </div>
      )
      )
    }
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
        <IonText class=" flex p-4 text-black text-xl font-bold">
        {userId == null ? ' Suas consultas' : 'Agenda Dr (a): ' + nameDoctor }
           
        </IonText>
        <IonList>
          {renderize()}
        </IonList>
          
      </IonContent>
    </IonPage>
  );
};

export default ScheduleDoctor;
