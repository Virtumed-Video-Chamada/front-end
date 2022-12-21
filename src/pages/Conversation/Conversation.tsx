import { ChatConversation } from "../../components/ChatConversation/ChatConversation";
import Identificador from "../../components/Identificador/Identificador";
// import TextareaAutosize from "react-textarea-autosize";
import TextareaAutosize from '@mui/base/TextareaAutosize';
import './Conversation.css'
import { IonBackButton, IonButton, IonButtons, IonCol, IonFooter, IonHeader, IonIcon, IonInput, IonPage, IonRow, IonTabBar, IonToolbar } from "@ionic/react";
import { attach, send } from "ionicons/icons";

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

  const sendMessage = () => {
    messages.push()
  };

  return (
    <IonPage className="justify-start">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
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
        <IonFooter className="mb-0">
          <IonToolbar>
            <IonRow className="items-center padding-0">
              <IonCol size="10" className="flex">
                  <IonButton expand="block" fill="clear" color="primary" className="msg-btn" onClick={() => sendMessage()}>
                    <IonIcon icon={attach} slot="icon-only"></IonIcon>
                    </IonButton>
                    <TextareaAutosize
                      className="message-input h-10"
                      autoFocus
                      // onHeightChange={(height) => console.log(height)}
                    />
               
              </IonCol>
              <IonCol size="2">
                <IonButton expand="block" fill="clear" color="primary" className="msg-btn" onClick={() => sendMessage()}>
                  <IonIcon icon={send} slot="icon-only"></IonIcon>
                </IonButton>
              </IonCol>
            </IonRow>
            </IonToolbar>
        </IonFooter>
      </div>
    </IonPage>
  );
};

export default Conversation;
