import { useEffect, useState } from "react";
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonImg,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonText,
  IonToolbar,
} from "@ionic/react";
import { useHistory } from "react-router";
import { userClinic } from "../../../../@types/interfaces";
import { setStorage } from "../../../../services/adminStorage";
import { registerService } from "../../../../services/registerService";
import { alertaSucesso, alertaErro } from "../../../../utils/alertas";
import axios from 'axios';
import { findByIdService } from "../../../../services/findService";
import { updateService } from "../../../../services/updateService";

const RegisterClinicAdmin: React.FC = () => {
  const history = useHistory();
  const urlParams = new URLSearchParams(window.location.search);
  const userId = urlParams.get("id");
  const [nameFantasy, setNameFantasy] = useState<string>("");
  const [razaoSocial, setRazaoSocial] = useState<string>("");
  const [cnpj, setCnpj] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConf, setPasswordConf] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [cep, setCep] = useState<string>("");
  const [number, setNumber] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [district, setDistrict] = useState<string>("");
  const [state, setState] = useState<string>("");

  const values: userClinic= {
    name: nameFantasy,
    razao: razaoSocial,
    cnpj: cnpj,
    cep: cep,
    address: address,
    number: number,
    city: city,
    district: district,
    state: state,
    email: email,
    password: password,
    // confirmPassword: passwordConf,
    // role: "clinic",
    // isAdmin: false,
  };

  interface ViaCep  {
    cep: string,
    logradouro: string,
    complemento: string,
    bairro: string,
    localidade: string,
    uf: string
    }
  
    const api = axios.create({
      // https://h-apigateway.conectagov.estaleiro.serpro.gov.br/oauth2/jwt-token
      baseURL: `https://viacep.com.br/ws/`,
    });
  
    const consultCep = () => {
      if (cep.length == 8) {
        api
      .get<ViaCep>(`${cep}/json/`)
          .then(({ data }: any) => {
            setAddress(data.logradouro);
            setDistrict(data.bairro);
            setState(data.uf);
            setCity(data.localidade);
            console.log(data)
      } )
      .catch((error: any) => console.log('ERRO NA CHAMADA:', error))
      }   
  }

  const id: any = {
    id: userId,
  }
  const findUser = async () => {
    await findByIdService.findProfileByIdClinic(id).then((resp) => {
      setNameFantasy(resp.data.name);
      setRazaoSocial(resp.data.name);
      setCnpj(resp.data.clinic.cnpj);
      setEmail(resp.data.email);
      setAddress(resp.data.clinic.address);
      setCep(resp.data.clinic.cep);
      setNumber(resp.data.clinic.number);
      setCity(resp.data.clinic.city);
      setDistrict(resp.data.clinic.district);
      setState(resp.data.clinic.state);
    }).catch((err) => {
       console.log(err);
     })
  }

  const registerUser = async () => {
    if (password == passwordConf) {
      let response;
      if(userId == null) {
        response = await registerService.registerValues(values, 'clinic')
      } else {
        response = await updateService.updateUser(values, 'clinic')
      }
      const jwt = response.data.id;
      if (jwt) {
        alertaSucesso.alerta("Clinica registrada com sucesso !");
        history.replace("/");
      } else {
        alertaErro.alerta(`${response.data.message}`);
      }
    } else {
      alertaErro.alerta(`Senhas não Conferem`);
    }
  }; 

  useEffect(() => {
    findUser()
  }, [])

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
        <IonText class=" flex justify-center mt-5 text-black text-xl font-bold">
        {userId == null ? 'Registrar Clínica' : 'Editar Clínica'}
        </IonText>
        <IonList>
          <IonItem lines="inset" className="pr-2">
            <IonText class=" mt-5 text-black text-lg font-medium">
              Dados para acesso
            </IonText>
            <IonLabel position="floating" color="form">
              <span className="flex items-center">
                <span className="text-sm font-medium pl-2">E-mail</span>
              </span>
            </IonLabel>
            <IonInput
              className="inputSelsyn"
              type="email"
              value={email}
              placeholder="Informe e-mail"
              onIonChange={(e) => setEmail(e.detail.value!)}
            ></IonInput>
          </IonItem>
          <IonItem lines="inset" className="pr-2">
            <IonLabel position="floating" color="form">
              <span className="flex items-center">
                <span className="text-sm font-medium pl-2">Senha</span>
              </span>
            </IonLabel>
            <IonInput
              className="inputSelsyn"
              type="password"
              value={password}
              placeholder="Informe senha"
              onIonChange={(e) => setPassword(e.detail.value!)}
            ></IonInput>
          </IonItem>
          <IonItem lines="inset" className="pr-2">
            <IonLabel position="floating" color="form">
              <span className="flex items-center">
                <span className="text-sm font-medium pl-2">
                  Confirmar Senha
                </span>
              </span>
            </IonLabel>
            <IonInput
              className="inputSelsyn"
              type="password"
              value={passwordConf}
              placeholder="Confirme sua senha"
              onIonChange={(e) => setPasswordConf(e.detail.value!)}
            ></IonInput>
          </IonItem>

          <IonItem lines="inset" className="pr-2">
            <IonText class=" mt-5 text-black text-lg font-medium">
              Dados cadastrais
            </IonText>
            <IonLabel position="floating" color="form">
              <span className="flex items-center">
                <span className="text-sm font-medium pl-2">Nome Fantasia</span>
              </span>
            </IonLabel>
            <IonInput
              className="inputSelsyn"
              type="text"
              value={nameFantasy}
              placeholder="Informe nome fantasia"
              onIonChange={(e) => setNameFantasy(e.detail.value!)}
            ></IonInput>
          </IonItem>
          <IonItem lines="inset" className="pr-2">
            <IonLabel position="floating" color="form">
              <span className="flex items-center">
                <span className="text-sm font-medium pl-2">Razão Social</span>
              </span>
            </IonLabel>
            <IonInput
              className="inputSelsyn"
              type="text"
              value={razaoSocial}
              placeholder="Informe razão social"
              onIonChange={(e) => setRazaoSocial(e.detail.value!)}
            ></IonInput>
          </IonItem>
          <IonItem lines="inset" className="pr-2">
            <IonLabel position="floating" color="form">
              <span className="flex items-center">
                <span className="text-sm font-medium pl-2">CNPJ</span>
              </span>
            </IonLabel>
            <IonInput
              className="inputSelsyn"
              type="text"
              maxlength={14} minlength={14}
              value={cnpj}
              placeholder="Informe CNPJ"
              onIonChange={(e) => setCnpj(e.detail.value!)}
            ></IonInput>
          </IonItem>
          <IonItem lines="inset" className="pr-2">
            <IonLabel position="floating" color="form">
              <span className="flex items-center">
                <span className="text-sm font-medium pl-2">CEP</span>
              </span>
            </IonLabel>
            <IonInput className='inputSelsyn' type="text" value={cep} placeholder="Informe seu CEP" onIonChange={e => setCep(e.detail.value!)} onClick={() => consultCep()}></IonInput>
          </IonItem>
          <IonItem lines="inset" className="pr-2">
            <IonLabel position="floating" color="form">
              <span className="flex items-center">
                <span className="text-sm font-medium pl-2">Endereço</span>
              </span>
            </IonLabel>
            <IonInput
              className="inputSelsyn"
              type="text"
              value={address}
              placeholder="Informe endereço"
              onIonChange={(e) => setAddress(e.detail.value!)}
            ></IonInput>
          </IonItem>
          <IonItem lines="inset" className="pr-2">
            <IonLabel position="floating" color="form">
              <span className="flex items-center">
                <span className="text-sm font-medium pl-2">Número</span>
              </span>
            </IonLabel>
            <IonInput
              className="inputSelsyn"
              type="text"
              value={number}
              placeholder="Informe número ou s/n"
              onIonChange={(e) => setNumber(e.detail.value!)}
            ></IonInput>
          </IonItem>
          <IonItem lines="inset" className="pr-2">
            <IonLabel position="floating" color="form">
              <span className="flex items-center">
                <span className="text-sm font-medium pl-2">Bairro</span>
              </span>
            </IonLabel>
            <IonInput
              className="inputSelsyn"
              type="text"
              value={district}
              placeholder="Informe bairro"
              onIonChange={(e) => setDistrict(e.detail.value!)}
            ></IonInput>
          </IonItem>
          <IonItem lines="inset" className="pr-2">
            <IonLabel position="floating" color="form">
              <span className="flex items-center">
                <span className="text-sm font-medium pl-2">Cidade</span>
              </span>
            </IonLabel>
            <IonInput
              className="inputSelsyn"
              type="text"
              value={city}
              placeholder="Informe cidade"
              onIonChange={(e) => setCity(e.detail.value!)}
            ></IonInput>
          </IonItem>
          <IonItem lines="inset" className="pr-2">
            <IonLabel position="floating" color="form">
              <span className="flex items-center">
                <span className="text-sm font-medium pl-2">Estado</span>
              </span>
            </IonLabel>
            <IonInput
              className="inputSelsyn"
              type="text"
              value={state}
              placeholder="Informe estado"
              onIonChange={(e) => setState(e.detail.value!)}
            ></IonInput>
          </IonItem>
        </IonList>
        <IonButton
          className="btnDefault mt-5 mb-16"
          expand="block"
       onClick={registerUser} 
        >
          {userId == null ? ' REGISTRAR' : 'SALVAR'}
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default RegisterClinicAdmin;
