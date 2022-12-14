
  import { useHistory } from "react-router";
  import Appointments from "../../../components/Appointments/Appointments";
  import Identificador from "../../../components/Identificador/Identificador";
  import PopularDoctor from "../../../components/Pacient/PopularDoctor/PopularDoctor";
  import QuickAccess from "../../../components/Pacient/QuickAcess/QuickAccess";
  import './style.css';
  import logo from "../../../assets/logo.png"
  import { IonImg, IonItem, IonPage, IonSearchbar } from "@ionic/react";
  
  const HomePaciente: React.FC = () => {
    const history = useHistory();
    const router = () => {
      history.replace('/find-doctor');
    }
    return (
      <IonPage className="page overflow-y-auto">
        <IonImg src='../../../assets/logo.png' className='imgLogoSmall flex items-center mx-auto' />
        <Identificador/>
        <h1 className="font-bold text-xl pl-8">Encontre seu médico</h1>
        <IonSearchbar color="light" placeholder="Pesquise por médico ou especialidade" onClick={router}></IonSearchbar>  
        <div className="page overflow-y-auto">
        <IonItem className="mt-0 mb-0" lines="none">
          <Appointments />
        </IonItem>
        <IonItem className="mt-0 mb-0" lines="none">
          <QuickAccess />
        </IonItem>
        <IonItem className="mt-0 mb-0" lines="none">
          <PopularDoctor/>
        </IonItem>
        </div>   
      </IonPage>
    );
  };
  
  export default HomePaciente;
  