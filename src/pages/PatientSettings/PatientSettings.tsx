import {
  IonAvatar,
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonNote,
  IonPage,
  IonText,
  useIonToast,
} from "@ionic/react";
import { useState } from "react";

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
    <IonPage>
      <IonHeader>
        <IonItem>
          <IonLabel>
            <IonText>Minha Conta</IonText>
          </IonLabel>
        </IonItem>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          <IonAvatar className="border-b-2 border-primary">
            <img
              alt="Silhouette of a person's head"
              src="https://avatars.githubusercontent.com/u/97128625?v=4"
            />
          </IonAvatar>
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
            <IonInput type="password" value="password"></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Confirme sua senha</IonLabel>
            <IonInput type="password" value="password"></IonInput>
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
            <IonInput type="number" placeholder="000"></IonInput>
          </IonItem>
        </IonList>
        <IonButton className="btnDefault mt-8" expand="block" color="tertiary">
          Atualizar dados
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default PatientSettings;
