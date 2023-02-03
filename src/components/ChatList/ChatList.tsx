import { IonAvatar, IonBadge, IonCard, IonCardContent, IonInfiniteScroll, IonInfiniteScrollContent, IonLabel, IonList } from "@ionic/react";
import { useEffect, useState } from "react";
import { getStorage } from "../../services/adminStorage";
import { findAllConversationsByIdService } from "../../services/chatService";
import {  useHistory } from "react-router-dom";
import moment from 'moment';
import { findByIdService } from "../../services/findService";


const ChatList = () => {
  const [items, setItems] = useState<string[]>([]);
  const [chatList, setChatList] = useState([]);
  const [id, setId] = useState('');
  const history = useHistory();

  const generateItems = () => {
    const newItems = [];
    for (let i = 0; i < 50; i++) {
      newItems.push(`Item ${1 + items.length + i}`);
    }
    setItems([...items, ...newItems]);
  };

  useEffect(() => {
    generateItems();
    findChatList();
  }, []);
    
  const findChatList = async () => {
    getStorage("userIdStorage").then(async (storage) => {
      setId(storage);
      await findAllConversationsByIdService
        .findAllConversations(storage)
        .then((resp) => {
          console.log(resp);
          setChatList(resp.data);
        });
    });
  };

  const dateEdit = (item: any) => {
    return moment(item.date).format('HH:mm')
  }

  const avatarEdit = (item: any) => {
    let avatar = 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y';
    if (item.role == 'DOCTOR') {
      findByIdService.findProfileByIdDoctor(item.id).then((resp) => {
        avatar = resp.data.avatar_url
      })
    } else {
      findByIdService.findProfileByIdPacient(item.id).then((resp) => {
        avatar = resp.data.avatar_url
      })
    }
    return avatar;
  }

  const redirectChatList = (idConversation: any) => {
    history.replace(`/conversation?id=${idConversation}`)
  }

  const renderize = () => {
    if (chatList.length == 0) {
      return "";
    } else {
     return chatList.map((element: any, index: any) => (
        <IonCard
          key={index}
          className="mx-0 mt-10 mb-1 h-32"
         onClick={() => {redirectChatList(element.members[0].receive.id)}}
        >
          <IonCardContent className="flex justify-start w-full">
            <IonAvatar slot="start">
              <img
                className="max-w-[51px] w-full"
                alt="Pic-Doctor"
                src={avatarEdit(element.members[0].send.id)}
              />
            </IonAvatar> 
            <IonLabel>
             <h2 className="font-bold">{element.members[0].send.name}</h2>
            </IonLabel>
            <IonBadge className="badge">1</IonBadge>
            <div className="info-div">
             <p>{dateEdit(element.created_at)}</p>
            </div>
          </IonCardContent>
        </IonCard>
      ));
    }
  };
  
  return (
    <div className="container">
      <IonList>
        {renderize()}
        <IonInfiniteScroll
        onIonInfinite={(ev) => {
          generateItems();
          setTimeout(() => ev.target.complete(), 500);
        }}
      >
        <IonInfiniteScrollContent></IonInfiniteScrollContent>
      </IonInfiniteScroll>
      </IonList>
    </div>
  );
};

export default ChatList;

