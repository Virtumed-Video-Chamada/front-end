import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonContent,
  IonDatetime,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonSearchbar,
  IonSelect,
  IonSelectOption,
  IonText,
  IonThumbnail,
  IonToolbar,
  useIonAlert,
  useIonToast,
} from "@ionic/react";
import {
  calendarOutline,
  checkmarkOutline, pencilOutline, trashBinOutline
} from "ionicons/icons";
import {  useEffect, useState } from "react";
import { useHistory } from "react-router";
import DateTime from "../../../components/DateTime/DateTime";
import Identificador from "../../../components/Identificador/Identificador";
import Schedules from "../../../components/SchedulePatient/SchedulePatient";
import { appointmentService } from "../../../services/appointmentService";
import { deleteService } from "../../../services/deleteService";
import { findAllService, findByIdService } from "../../../services/findService";
// import "./style.css";


const ScheduleClinic: React.FC = () => {
  const [items, setItems] = useState<any>('');
  let listDoctors = items;
  const [results, setResults] = useState([...listDoctors]);
  const history = useHistory();
  
  const generateItems = () => {
    const newItems = [];
    for (let i = 0; i < 5; i++) {
      newItems.push(`Item ${1 + items.lenght + i}`);
    }
    setItems([...items, ...newItems]);
  };

  const handleChange = async (ev?: Event) => {
    await findAllService.findAllUsers("doctors").then((response: any) => {
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


  const redirect = (id: string) => {
    history.replace(`/schedule-doctor?id=${id}`)
  }

  const renderize = () => {
    return results.map((element: any, index: any) => (
      <IonItem lines="full" key={index}>
        <IonLabel>{element.name}</IonLabel>
        <IonButton slot="end" color="danger" onClick={() => redirect(element.id)}>
          <IonIcon icon={calendarOutline} className="mr-2"></IonIcon>
          Ver Agenda
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
          Controle de Agendas Médicas
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

export default ScheduleClinic;
