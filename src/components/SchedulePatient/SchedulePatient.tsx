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
import Identificador from "../Identificador/Identificador";
import { findByIdService } from "../../services/findService";
import { appointmentService } from "../../services/appointmentService";
import moment from 'moment';
import { getStorage, setStorage } from "../../services/adminStorage";
import { useHistory } from "react-router";
moment.locale('pt');

const SchedulePatient: React.FC = () => {
  const history = useHistory();
  const [userId, setUserId] = useState("");
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
    getStorage("userIdStorage").then(async (storage) => {
      setUserId(storage);
      await appointmentService.appointmentListPatient({provider_id: storage}).then((resp) => {
        setListAppointment(resp.data);
        setStorage('appointments', resp.data);
        console.log(resp.data);
      }).catch((err) => {
        console.log(err)
      });
    })
  }

  const cancelAppointment = async (idAppointment: any) => {
    console.log(idAppointment);
    await appointmentService.appointmentDelete({appointment_id: idAppointment}).then((resp) => {
      presentToast();
      setListAppointment([]);
      findDateAppointment();
    }).catch((err) => {
      console.log(err)
    });
  }

  const alert = (idAppointment: any) => {
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
            cancelAppointment(idAppointment);
            
          },
        },
      ],
      onDidDismiss: (e: CustomEvent) =>
        setRoleMessage(`Dismissed with role: ${e.detail.role}`),
    });
  };

  const dateEdit = (item: any) => {
    return moment(item).format('DD/MM  HH:mm')
  }

  const parentConversation = (itemId: any) => {
    history.replace(`/conversation?id=${itemId}`)
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
                  src={item.user?.avatar_url == null ? 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y' : item.user?.avatar_url }
                />
              </IonThumbnail>
              <div className="flex flex-col gap-1 ml-11 font-bold text-black flex flex-col">
              <span>{item.user?.name}</span>
                  {/* <p>Psicóloga</p> */}
                   <span>{dateEdit(item.date)}</span>
                <div className="flex">
                  <IonButton
                    className="text-xs"
                    color="secondary"
                    onClick={() => alert(item.id)}
                  >
                    CANCELAR
                  </IonButton>
                  <IonButton className="text-xs" color="primary" onClick={() => parentConversation(item.id)}>
                    ABRIR CHAT
                    <IonIcon slot="start" icon={chatbubbleOutline}></IonIcon>
                  </IonButton>
                </div>
              </div>
            </IonCardContent>
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

export default SchedulePatient;
