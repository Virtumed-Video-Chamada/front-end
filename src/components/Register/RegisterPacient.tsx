import { useState } from "react";
import { IonButton, IonInput, IonItem, IonLabel, IonList, IonText } from "@ionic/react";





const RegisterPacient: React.FC = () => {
  const [usuario, setUsuario] = useState<string>('');
  const [senha, setSenha] = useState<string>('');


  return (
    <div>
    <IonText>Paciente</IonText>  
        <IonList>
        <IonItem>
            <IonLabel position="floating" color="form">
              <span className="flex items-center"><span className='text-xs font-extrabold pl-2'>Nome Completo</span></span>
            </IonLabel>
            <IonInput className='inputSelsyn' type="text" value={usuario} placeholder="Informe usuário" onIonChange={e => setUsuario(e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating" color="form">
              <span className="flex items-center"><span className='text-xs font-extrabold pl-2'>RG</span></span>
            </IonLabel>
            <IonInput className='inputSelsyn' type="text" value={usuario} placeholder="Informe usuário" onIonChange={e => setUsuario(e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating" color="form">
              <span className="flex items-center"><span className='text-xs font-extrabold pl-2'>CPF</span></span>
            </IonLabel>
            <IonInput className='inputSelsyn' type="text" value={usuario} placeholder="Informe usuário" onIonChange={e => setUsuario(e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating" color="form">
              <span className="flex items-center"><span className='text-xs font-extrabold pl-2'>Endereço</span></span>
            </IonLabel>
            <IonInput className='inputSelsyn' type="text" value={usuario} placeholder="Informe usuário" onIonChange={e => setUsuario(e.detail.value!)}></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel position="floating" color="form">
              <span className="flex items-center"><span className='text-xs font-extrabold pl-2'>Email</span></span>
            </IonLabel>
            <IonInput className='inputSelsyn' type="password" value={senha} placeholder="Informe senha" onIonChange={e => setSenha(e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating" color="form">
              <span className="flex items-center"><span className='text-xs font-extrabold pl-2'>Senha</span></span>
            </IonLabel>
            <IonInput className='inputSelsyn' type="password" value={senha} placeholder="Informe senha" onIonChange={e => setSenha(e.detail.value!)}></IonInput>
          </IonItem>
          
          <IonButton className='btnDefault mt-8' expand="block" routerLink="/register">REGISTRE-SE</IonButton>
          
          <div className='my-10'>
            <IonButton fill="clear" className="text-center text-xs" routerLink="/login">
              <p>Voltar para login</p>
            </IonButton>
          </div>
        </IonList> 
        </div>
  );
};

export default RegisterPacient;
