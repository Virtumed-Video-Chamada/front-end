import {
  IonItem,
  IonPage,
  IonSearchbar,
} from "@ionic/react";
import {  useHistory } from "react-router";
import Appointments from "../../../components/Appointments/Appointments";
import Identificador from "../../../components/Identificador/Identificador";
import PopularDoctor from "../../../components/Pacient/PopularDoctor/PopularDoctor";
import QuickAccess from "../../../components/Pacient/QuickAcess/QuickAccess";

const HomePaciente: React.FC = () => {
  const history = useHistory();
  const router = () => {
    history.replace('/find-doctor');
  }
  return (
    <IonPage className="justify-start">
      <Identificador/>
      <h1 className="font-bold">Encontre seu médico</h1>
        <IonSearchbar placeholder="Pesquise por médico ou especialidade" onClick={router}></IonSearchbar>
      <IonItem className="mt-0 mb-0">
        <Appointments />
      </IonItem>
      <IonItem className="mt-0 mb-0" lines="none">
        <QuickAccess />
      </IonItem>
      <IonItem className="mt-0 mb-0" lines="none">
        <PopularDoctor/>
      </IonItem>
    </IonPage>
  );
};

export default HomePaciente;
