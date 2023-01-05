import { ChatConversation } from "../../components/ChatConversation/ChatConversation";
import Identificador from "../../components/Identificador/Identificador";
// import TextareaAutosize from "react-textarea-autosize";
// import TextareaAutosize from '@mui/base/TextareaAutosize';
import './Conversation.css'
import { IonBackButton, IonButton, IonButtons, IonCol, IonFooter, IonHeader, IonIcon, IonInput, IonPage, IonRow, IonTabBar, IonToolbar, IonContent  } from "@ionic/react";
import { attach, send } from "ionicons/icons";
import { createRef, useEffect, useState } from "react";

const Conversation: React.FC = () => {
 let messagesMock: any[] = [
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

  const [newMsg, setNewMsg] = useState('');
  const [messages, setMessages] = useState<any>(messagesMock);

  const sendMessage = () => {
    console.log('teste');
    const novaMsg: any = 
    {
      user: 'simon',
      createdAt: new Date().getTime(),
      msg: newMsg
    }
    setMessages([...messages, novaMsg] );
    setNewMsg('');
    scrollToBottom();
  }
  
  function handleKeyPress(event: any) {
    console.log(event.key);
    if (event.key === "Enter") {
      event.preventDefault();
      sendMessage();
    }
  }
  const contentRef = createRef<HTMLIonContentElement>();
  
  function scrollToBottom() {
    console.log('scroll')
      var height = contentRef.current?.scrollHeight;
      contentRef.current?.scrollToBottom(height);
  }

  useEffect(() => {
    scrollToBottom()
  },[]);


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
      <IonContent ref={contentRef}>
        {messages.map((message: any, index: any) => {
          return (
            <ChatConversation
              key={index}
              user={message.user}
              createdAt={message.createdAt}
              msg={message.msg}
            />
          );
        })}
      </IonContent>
      
        <IonFooter className="mb-0">
          <IonToolbar>
            <IonRow className="items-center padding-0">
              <IonCol size="10" className="flex">
                  <IonButton expand="block" fill="clear" color="primary" className="msg-btn" onClick={() => sendMessage()}>
                    <IonIcon icon={attach} slot="icon-only"></IonIcon>
                    </IonButton>
                    {/* <TextareaAutosize
                      id="textarea"
                      value={newMsg}
                      className="message-input h-10"
                      onChange={(e: any) => setNewMsg(e.target.value)}
                      onKeyPress={(event: any) => handleKeyPress(event)}
                    /> */}
               
              </IonCol>
              <IonCol size="2">
                <IonButton id="btn" expand="block" fill="clear" color="primary" className="msg-btn" onClick={() => sendMessage()}>
                  <IonIcon icon={send} slot="icon-only"></IonIcon>
                </IonButton>
              </IonCol>
            </IonRow>
            </IonToolbar>
        </IonFooter>
      
    </IonPage>
  );
};

export default Conversation;
