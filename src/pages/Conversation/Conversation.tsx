import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonPage,
  IonRouterOutlet,
  IonRow,
  IonSearchbar,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { ellipse, square, triangle } from "ionicons/icons";
import { Redirect, Route } from "react-router";
import { ChatConversation } from "../../components/ChatConversation/ChatConversation";
import Identificador from "../../components/Identificador/Identificador";
import TextareaAutosize from "react-textarea-autosize";
import './Conversation.css'

const Conversation: React.FC = () => {
  const messages: any[] = [
    {
      user: "simon",
      createdAt: 1554090856000,
      msg: "Olá, tudo bem?",
    },
    {
      user: "max",
      createdAt: 1554090956000,
      msg: "Olá, tudo bem?",
    },
    {
      user: "simon",
      createdAt: 1554090856000,
      msg: "Olá, tudo bem?",
    },
    {
      user: "max",
      createdAt: 46800000000000,
      msg: "Olá, tudo bem?",
    },
  ];

  const newMsg = "fffffff";

  const sendMessage = () => {};

  return (
    <IonPage className="justify-start">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton text="Voltar" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <Identificador />
      <div className="container_schedules">
        {messages.map((message: any, index) => {
          return (
            <ChatConversation
              key={index}
              user={message.user}
              createdAt={message.createdAt}
              msg={message.msg}
            />
          );
        })}
        <IonFooter>
          <IonTabBar color="light">
            <IonRow>
              <IonCol size="10">
                <TextareaAutosize
                  className="message-input"
                  cacheMeasurements
                  onHeightChange={(height) => console.log(height)}
                />
                {/* <TextareaAutosize maxRows={3} className="message-input" > {newMsg} </TextareaAutosize> */}
              </IonCol>
              <IonCol size="2">
                <IonButton expand="block" fill="clear" color="primary" className="msg-btn" onClick={() => sendMessage()}>
                  <IonIcon name="send" slot="icon-only"></IonIcon>
                </IonButton>
              </IonCol>
            </IonRow>
          </IonTabBar>
        </IonFooter>
      </div>
    </IonPage>
  );
};

export default Conversation;
