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
import { userDoctor } from "../../../../@types/interfaces";
import { setStorage } from "../../../../services/adminStorage";
import { registerService } from "../../../../services/registerService";
import { alertaSucesso, alertaErro } from "../../../../utils/alertas";
import axios from 'axios';
import { findByIdService } from "../../../../services/findService";
import { updateService } from "../../../../services/updateService";

const RegisterDoctorAdmin: React.FC = () => {
  const history = useHistory();
  const urlParams = new URLSearchParams(window.location.search);
  const userId = urlParams.get("id");
  const [name, setName] = useState<string>("");
  const [cpf, setCpf] = useState<string>("");
  const [crm, setCrm] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConf, setPasswordConf] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [cep, setCep] = useState<string>("");
  const [number, setNumber] = useState<number | string>("");
  const [city, setCity] = useState<string>("");
  const [district, setDistrict] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [speciality, setSpeciality] = useState<string>("");

  const values: userDoctor= {
    name: name,
    cpf: cpf,
    crm: crm,
    cep: cep,
    address: address,
    number: number,
    city: city,
    district: district,
    state: state,
    email: email,
    password: password,
    // confirmPassword: passwordConf,
    speciality: speciality,
    // role: "doctors"
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
    await findByIdService.findProfileByIdDoctor(id).then((resp) => {
      setName(resp.data.name);
      setCpf(resp.data.doctor.cpf);
      setEmail(resp.data.email);
      setAddress(resp.data.doctor.address);
      setCep(resp.data.doctor.cep);
      setNumber(resp.data.doctor.number);
      setCity(resp.data.doctor.city);
      setDistrict(resp.data.doctor.district);
      setState(resp.data.doctor.state);
      setCrm(resp.data.doctor.crm);
      setSpeciality(resp.data.doctor.speciality)
    }).catch((err) => {
       console.log(err);
     })
  }
  

  const registerUser = async () => {
    if (password == passwordConf) {
      let response;
      if(userId == null) {
        response = await registerService.registerValues(values, 'doctors')
      } else {
        response = await updateService.updateUser(values, 'doctors')
      }
      const jwt = response.data.id;
      if (jwt) {
        alertaSucesso.alerta("Médico registrado com sucesso !");
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
      {userId == null ? 'Registrar Médico' : 'Editar Médico'}
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
              <span className="text-sm font-medium pl-2">Confirmar Senha</span>
            </span>
          </IonLabel>
          <IonInput
            className="inputSelsyn"
            type="password"
            value={passwordConf}
            placeholder="Confirme a senha"
            onIonChange={(e) => setPasswordConf(e.detail.value!)}
          ></IonInput>
        </IonItem>
        <IonItem lines="inset" className="pr-2">
        <IonText class=" mt-5 text-black text-lg font-medium">
        Dados Pessoais
        </IonText>
          <IonLabel position="floating" color="form">
            <span className="flex items-center">
              <span className="text-sm font-medium pl-2">Nome</span>
            </span>
          </IonLabel>
          <IonInput
            className="inputSelsyn"
            type="text"
            value={name}
            placeholder="Informe o nome"
            onIonChange={(e) => setName(e.detail.value!)}
          ></IonInput>
        </IonItem>
        <IonItem lines="inset" className="pr-2">
          <IonLabel position="floating" color="form">
            <span className="flex items-center">
              <span className="text-sm font-medium pl-2">CPF</span>
            </span>
          </IonLabel>
          <IonInput
            className="inputSelsyn"
            type="text"
            value={cpf}
            placeholder="Informe o CPF"
            onIonChange={(e) => setCpf(e.detail.value!)}
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
            placeholder="Informe número ou S/N"
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
            placeholder="Informe seu bairro"
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
            placeholder="Informe a cidade"
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
            placeholder="Informe o estado"
            onIonChange={(e) => setState(e.detail.value!)}
          ></IonInput>
        </IonItem>
     
        <IonItem lines="inset" className="pr-2">
        <IonText class=" mt-5 text-black text-lg font-medium">
        Dados Médicos
        </IonText>
          <IonLabel position="floating" color="form">
            <span className="flex items-center">
              <span className="text-sm font-medium pl-2">CRM</span>
            </span>
          </IonLabel>
          <IonInput
            className="inputSelsyn"
            type="text"
            value={crm}
            placeholder="Informe o CRM"
            onIonChange={(e) => setCrm(e.detail.value!)}
          ></IonInput>
        </IonItem>
        <IonItem lines="inset" className="pr-2">
          <IonLabel position="floating" color="form">
            <span className="flex items-center">
              <span className="text-sm font-medium pl-2">Especialidade</span>
            </span>
          </IonLabel>
          <IonInput
            className="inputSelsyn"
            type="text"
            value={speciality}
            placeholder="Informe a Especialidade"
            onIonChange={(e) => setSpeciality(e.detail.value!)}
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

export default RegisterDoctorAdmin;
