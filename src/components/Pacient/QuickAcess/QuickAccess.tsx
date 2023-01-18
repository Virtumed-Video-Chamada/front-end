import { IonCard, IonImg, IonRow } from "@ionic/react";
import { useState } from "react";
import "./style.css";

const QuickAccess: React.FC = () => {
  const [category, setCategory] = useState<string>("doctor");

  // useEffect(() => {
  //   getStorage('dadosLogin').then((response) => {
  //     setCategory(response.accessToken);})
  // }, [])

  const renderizePatient = () => {
    return (
      <IonRow className="flex overflow-x-auto flex-nowrap  mb-0">
        <IonCard className="mr-1 bd-20 quickCard" routerLink="/exam-results">
          <IonImg
            className="imgCard mx-auto"
            src="./assets/icon/microscope.svg"
          ></IonImg>
          <p className="text-sm pl-3 textCard">Resultados de Exames</p>
        </IonCard>
        {/* <IonCard className="mr-1 bd-20 quickCard">
            <IonImg className="imgCard" src="./assets/icon/appointment.svg"></IonImg>
            <p className="text-center textCard">Consultas Anteriores</p>
          </IonCard> */}
        <IonCard
          className="mr-1 bd-20 quickCard"
          routerLink="historical-clinic"
        >
          <IonImg
            className="imgCard mx-auto"
            src="./assets/icon/historical.svg"
          ></IonImg>
          <p className="text-center textCard">Histórico Clínico</p>
        </IonCard>
        <IonCard
          className="mr-1 bd-20 quickCard"
          routerLink="/chat"
        >
          <IonImg
            className="imgCard mx-auto"
            src="./assets/icon/historical.svg"
          ></IonImg>
          <p className="text-center textCard">Últimos Chats</p>
        </IonCard>
      </IonRow>
    );
  };

  const renderizeDoctor = () => {
    return (
      <IonRow className="flex overflow-x-auto flex-nowrap  mb-0">
        <IonCard className="mr-1 bd-20 quickCard" routerLink="/schedules">
          <IonImg
            className="imgCard mx-auto"
            src="./assets/icon/agenda.svg"
          ></IonImg>
          <p className="text-sm pl-3 textCard text-center">Agenda Médica</p>
        </IonCard>
        {/* <IonCard className="mr-1 bd-20 quickCard">
            <IonImg className="imgCard" src="./assets/icon/appointment.svg"></IonImg>
            <p className="text-center textCard">Consultas Anteriores</p>
          </IonCard> */}
        <IonCard
          className="mr-1 bd-20 quickCard"
          routerLink="/chat"
        >
          <IonImg
            className="imgCard mx-auto"
            src="./assets/icon/historical.svg"
          ></IonImg>
          <p className="text-center textCard">Últimos Chats</p>
        </IonCard>
      </IonRow>
    );
  };

  const renderizeClinic = () => {
    return (
      <IonRow className="flex overflow-x-auto flex-nowrap  mb-0">
        <IonCard className="mr-1 bd-20 quickCard" routerLink="/">
          <IonImg
            className="imgCard mx-auto"
            src="./assets/icon/microscope.svg"
          ></IonImg>
          <p className="text-sm pl-3 textCard">Cadastrar Médico</p>
        </IonCard>
      </IonRow>
    );
  };

  return (
    <div className="container">
      <h1 className="font-bold text-l pl-3">Acesso Rápido</h1>
      {category === "patient" ? renderizePatient() : ""}
      {category === "doctor" ? renderizeDoctor() : ""}
      {category === "clinic" ? renderizeClinic() : ""}
    </div>
  );
};

export default QuickAccess;
