import {
  IonAvatar,
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonNote,
  IonText,
  useIonLoading,

} from "@ionic/react";
import { camera } from "ionicons/icons";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { getStorage, setStorage } from "../../services/adminStorage";
import { updateService } from "../../services/updateService";
import { alertaErro, alertaSucesso } from "../../utils/alertas";
import "./main.css";

interface User {
  name: string;
  avatar_url: string;
}

const PatientSettings: React.FC = () => {
  //validação ionic ----
  const [user, setUser] = useState<User>({ name: '', avatar_url: '' });
  const [isTouched, setIsTouched] = useState(false);
  const [isValid, setIsValid] = useState<boolean>();
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('')
  const [avatar, setAvatar] = useState<any>("https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y");
  const [rg, setRg] = useState<string>('123456');
  const [cpf, setCpf] = useState<string>();
  const [cep, setCep] = useState<string>();
  const [address, setAddress] = useState<string>();
  const [number, setNumber] = useState<string>();
  const [city, setCity] = useState<string>();
  const [district, setDistrict] = useState<string>();
  const [state, setState] = useState<string>();
  const [role, setRole] = useState<string>('');
  const history = useHistory();

  useEffect(() => {
    getStorage('tokenJwt').then((storage) => {
      setName(storage.data.user.name);
      setAvatar(storage.data.user.avatar_url);
      setEmail(storage.data.user.email);
      setCpf(storage.data.user.cpf);
      setCep(storage.data.user.cep);
      setAddress(storage.data.user.address);
      setNumber(storage.data.user.number);
      setCity(storage.data.user.city);
      setRg(storage.data.user.rg);
      setRole(storage.data.user.role.toLowerCase());

    })
  }, []);



  const values: any = { 
      rg: "123456789",
      cpf: "12345678910",
      cep: "12345678",
      address: "Rua das Flores",
      number: "123",
      city: "São Paulo",
      district: "Jardins",
      state: "SP"
  }

  const valuesPassword: any = {
    password: password,
    password_confirmation: confirmPassword
  }

  const update = async () => {
    if (password === confirmPassword) {
      
      await updateService.updatePassword(valuesPassword).then((resp: any) => {
        console.log(resp);
      })
      await updateService.updateUser(values, role).then((response: any) => {
        console.log(response);
        if (response !== undefined) {
          alertaSucesso.alerta("Dados alterados com sucesso !");
          history.replace("/");
          } else {
            alertaErro.alerta(`${response.data.message}`);
          }
      }).catch((err: any) => {
        console.log(err)
      });
    } else {
      alertaErro.alerta(`Senhas não Conferem`);
    } 
  };

//   const updateUser = () => {
//   console.log(name, email, password, cpf)
// }


  const markTouched = () => {
    setIsTouched(true);
  };
 
  const convertBase64 = (file: any) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file)
      fileReader.onload = () => {
        resolve(fileReader.result);
      }
      fileReader.onerror = (error) => {
        reject(error);
      }
      
    }
    )
  }
  const [present, dismiss] = useIonLoading();
  const updateAvatar = async (e: any) => {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    present({
      message: 'carregando...',
      duration: 3000
    })
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setAvatar(base64);
    const response = await fetch(file.data);
    const blob = await response.blob();
    const formData = new FormData();
    formData.append("file", e.file);
    formData.append('file', blob, file.name);
    await updateService.updateAvatar(formData).then((resp: any) => {
      console.log(resp);
    })
}



  useEffect(() => {
    getStorage('tokenJwt').then((response) => {

      setUser(response.data.user);
    })
  }, [])
    
  

const renderize = () => {
  if (user.avatar_url === '' || user.avatar_url === null) {
    return 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y';
  } else {
    return user.avatar_url;
  }
}


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
            <div>
            <IonAvatar className="border-primary">
            <img
              alt="Silhouette of a person's head"
              src={renderize()}
            />
          </IonAvatar>
            </div>
            <div className="mt-5 flex w-[140px]" onClick={(e) =>updateAvatar(e)}>
           <input type="file" id="file-input"
                accept="image/png, image/jpeg, , image/jpg" ></input>
              
        </div>
            <IonIcon icon={camera} className="w-5 h-5">
              
            </IonIcon>
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
          {/* <IonItem>
            <IonLabel position="floating">Telefone</IonLabel>
            <IonInput type="tel" placeholder="888-888-8888"></IonInput>
          </IonItem> */}
          <IonItem>
            <IonLabel position="floating">CEP</IonLabel>
            <IonInput type="number" placeholder="000000-000"></IonInput>
          </IonItem>
        </IonList>
        <IonButton className="btnDefault mt-4 mb-14" expand="block" color="tertiary" onClick={() => update()}>
          Atualizar dados
        </IonButton>
      </IonContent>
    </>
  );
};

export default PatientSettings;

