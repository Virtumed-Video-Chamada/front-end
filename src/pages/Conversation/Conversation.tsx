import { ChatConversation } from "../../components/ChatConversation/ChatConversation";
import Identificador from "../../components/Identificador/Identificador";
// import TextareaAutosize from "react-textarea-autosize";
import TextareaAutosize from '@mui/base/TextareaAutosize';
import './Conversation.css'
import { IonBackButton, IonButton, IonButtons, IonCol, IonFooter, IonHeader, IonIcon, IonInput, IonPage, IonRow, IonTabBar, IonToolbar, IonContent  } from "@ionic/react";
import { attach, send } from "ionicons/icons";
import { createRef, useEffect, useState } from "react";
import { createMessageService, findAllConversationsByIdService } from "../../services/chatService";
import { getStorage } from "../../services/adminStorage";


const Conversation: React.FC = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const IdChat: any = urlParams.get("id");
  const [chatConversation, setChatConversation] = useState([{}]);
  const [newMsg, setNewMsg] = useState('');
  const [idMe, setIdMe] = useState()

  useEffect(() => {
    findConversation();
    findIdMe();
    scrollToBottom()
  }, []);

  const findIdMe = () => {
    getStorage('userIdStorage').then((resp) => {
      setIdMe(resp)
    })
  }

  const findConversation = async () => {
      await findAllConversationsByIdService
        .findConversationById(IdChat)
        .then((resp) => {
          console.log(resp.data);
          setChatConversation(resp.data)
        });
  };


  const value = {
    conversationId: IdChat,
	  sender: idMe,
	  text: newMsg
  }

  const sendMessage = async () => {
    await createMessageService.createNewMessage(value).then((msg) => {
      findConversation()
      console.log(msg)
      setNewMsg('')
    })
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
      var height = contentRef.current?.scrollHeight;
      contentRef.current?.scrollToBottom(height);
  }
  const [imagem, setImagem] = useState<any>('https://ionicframework.com/docs/img/demos/avatar.svg');
  


  return (
    <IonPage className="justify-start">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent ref={contentRef}>
        {chatConversation.map((message: any, index: any) => {
          return (
            <ChatConversation
              key={index}
              user={message.sender}
              createdAt={message.created_at}
              msg={message.text}
            />
          );
        })}
      </IonContent>
      
        <IonFooter className="mb-0">
          <IonToolbar>
            <IonRow className="items-center padding-0">
              <IonCol size="10" className="flex">
                  {/* <IonButton expand="block" fill="clear" color="primary" className="msg-btn" onClick={(e) => startUpload(e)}>
                    <IonIcon icon={attach} slot="icon-only">
                    
                    </IonIcon>
                    <input type="file" id="file-input"
                        accept="image/png, image/jpeg" ></input>
                   </IonButton> */}
                    <TextareaAutosize
                      id="textarea"
                      value={newMsg}
                      className="message-input h-10"
                      onChange={(e) => setNewMsg(e.target.value)}
                      onKeyPress={(event) => handleKeyPress(event)}
                    />
               
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
