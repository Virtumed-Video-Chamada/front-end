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
import { useEffect, useState } from "react";
import { getStorage } from "../../services/adminStorage";
import "./main.css";

const PatientSettings: React.FC = () => {
  //validação ionic ----
  const [isTouched, setIsTouched] = useState(false);
  const [isValid, setIsValid] = useState<boolean>();
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('')
  const [avatar, setAvatar] = useState<string>();
  const [rg, setRg] = useState<string>();
  const [cpf, setCpf] = useState<string>();
  const [cep, setCep] = useState<string>();
  const [address, setAddress] = useState<string>();
  const [number, setNumber] = useState<string>();
  const [city, setCity] = useState<string>();
  const [district, setDistrict] = useState<string>();
  const [state, setState] = useState<string>();


  useEffect(() => {
    getStorage('token').then((storage) => {
      setName(storage.data.user.avatar);
      setAvatar(storage.data.user.avatar);
      setEmail(storage.data.user.avatar);
  })
    
  }, [])

  const updateUser = () => {
  console.log(name, email, password, cpf)
}


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
            className="ion-valid"
          >
            <IonLabel position="floating">Nome</IonLabel>
            <IonInput
              type="text"
              onIonBlur={() => markTouched()}
              value={name}
              onIonChange={e => setName(e.detail.value!)}

            ></IonInput>
            <IonNote slot="helper">Enter a valid email</IonNote>
            <IonNote slot="error">Invalid email</IonNote>
          </IonItem>
          <IonItem
            fill="solid"
          >
            <IonLabel position="floating">Email</IonLabel>
            <IonInput
              type="email"
              onIonBlur={() => markTouched()}
              value={email}
              onIonChange={e => setEmail(e.detail.value!)}
            ></IonInput>
            <IonNote slot="helper">Enter a valid email</IonNote>
            <IonNote slot="error">Invalid email</IonNote>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">CPF</IonLabel>
            <IonInput value={cpf} onIonChange={e => setCpf(e.detail.value!)} type="text"></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Senha</IonLabel>
            <IonInput   value={password} onIonChange={e => setPassword(e.detail.value!)}
               type="password"></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Confirme sua senha</IonLabel>
            <IonInput value={confirmPassword} onIonChange={e => setConfirmPassword(e.detail.value!)}
             type="password"></IonInput>
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
        <IonButton className="btnDefault mt-4" expand="block" color="tertiary" onClick={() => updateUser()}>
          Atualizar dados
        </IonButton>
      </IonContent>
    </>
  );
};

export default PatientSettings;
