import {
  IonAvatar,
  IonButton,
  IonCard,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonNote,
  IonPage,
  IonText,
  useIonToast,
} from "@ionic/react";
import { camera } from "ionicons/icons";
import { useState } from "react";
import "./main.css";

const PatientSettings: React.FC = () => {
  //validação ionic ----
  const [isTouched, setIsTouched] = useState(false);
  const [isValid, setIsValid] = useState<boolean>();

  const validateEmail = (email: string) => {
    return email.match(
      /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    );
  };

  const validate = (ev: Event) => {
    const value = (ev.target as HTMLInputElement).value;

    setIsValid(undefined);

    if (value === "") return;

    validateEmail(value) !== null ? setIsValid(true) : setIsValid(false);
  };

  const markTouched = () => {
    setIsTouched(true);
  };
  /* ----- */

  return (
    <>
      <IonHeader>
        <IonItem>
          <IonLabel>
            <IonText>Minha Conta</IonText>
          </IonLabel>
        </IonItem>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          <div className="flex flex-col justify-center items-center mt-2">
            <IonAvatar className=" w-32 h-32">
              <img
                alt="Silhouette of a person's head"
                src="https://avatars.githubusercontent.com/u/97128625?v=4"
              />
            </IonAvatar>
            <IonIcon icon={camera} className="w-5 h-5"></IonIcon>
          </div>

          <IonItem
            fill="solid"
            className={`${isValid && "ion-valid"} ${
              isValid === false && "ion-invalid"
            } ${isTouched && "ion-touched"}`}
          >
            <IonLabel position="floating">Email</IonLabel>
            <IonInput
              type="email"
              onIonInput={(event) => validate(event)}
              onIonBlur={() => markTouched()}
            ></IonInput>
            <IonNote slot="helper">Enter a valid email</IonNote>
            <IonNote slot="error">Invalid email</IonNote>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Senha</IonLabel>
            <IonInput type="password"></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Confirme sua senha</IonLabel>
            <IonInput type="password"></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Endereço</IonLabel>
            <IonInput placeholder="Enter text"></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Telefone</IonLabel>
            <IonInput type="tel" placeholder="888-888-8888"></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">CEP</IonLabel>
            <IonInput type="number" placeholder="000000-000"></IonInput>
          </IonItem>
        </IonList>
        <IonButton className="btnDefault mt-4" expand="block" color="tertiary">
          Atualizar dados
        </IonButton>
      </IonContent>
    </>
  );
};

export default PatientSettings;
