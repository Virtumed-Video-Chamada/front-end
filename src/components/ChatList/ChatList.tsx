import {
  IonAvatar,
  IonBadge,
  IonCard,
  IonCardContent,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonLabel,
  IonList,
  useIonViewDidEnter,
} from "@ionic/react";
import { useEffect, useState } from "react";
import { getStorage } from "../../services/adminStorage";
import api from "../../services/api";
import {
  findAllConversationsByIdService,
  findByIdService,
} from "../../services/chatService";

const ChatList = () => {
  const [items, setItems] = useState<string[]>([]);
  const [chatList, setSetList] = useState([]);
  const [senderId, setsenderId] = useState();
  const [role, setRole] = useState();
  const [receiverId, setreceiverId] = useState();

  const generateItems = () => {
    const newItems = [];
    for (let i = 0; i < 50; i++) {
      newItems.push(`Item ${1 + items.length + i}`);
    }
    setItems([...items, ...newItems]);
  };

  const findChatList = async () => {
    getStorage("userIdStorage").then(async (storage) => {
      await findAllConversationsByIdService
        .findAllConversations(storage)
        .then((resp) => {
          console.log(resp);
          setSetList(resp.data);
          setreceiverId(resp.data[0].members[1]);
          setsenderId(storage);
          findMeChat(resp.data[0].members[1]);
        });
    });
  };

  const findDoctor = async (receiverId: any) => {
    const userId = {
      id: receiverId,
    }
    await findByIdService.findProfileByIdDoctor(userId).then((resp) => {
    })
  }

  const findPatient = async (receiverId: any) => {
    const userId = {
      id: receiverId,
    }
    await findByIdService.findProfileByIdPacient(userId).then((resp) => {
      console.log(resp);
    })
  }
  
  const findMeChat = async (id: any) => {
    await findByIdService.findProfileByIdMe().then((resp) => {
      setRole(resp.data.role);
      if (resp.data.role !== 'DOCTOR') {
        findDoctor(id);
      } else {
        findPatient(id);
      }
    });
  };

  useEffect(() => {
    generateItems();
    findChatList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderize = () => {
    if (chatList.length == 0) {
      return "";
    } else {
      return chatList.map((element: any, index: any) => (
        <IonCard
          key={index}
          className="mx-0 mt-10 mb-1 h-32"
          routerLink="./conversation"
        >
          <IonCardContent className="flex justify-start w-full">
            <IonAvatar slot="start">
              <img
                className="max-w-[51px] w-full"
                alt="Pic-Doctor"
                src="./assets/avatar/dra-maria.jpg"
              />
            </IonAvatar>
            <IonLabel>
              <h2 className="font-bold">dr jão</h2>
              <p>Dipirona de 4 em 4 horas</p>
            </IonLabel>
            <IonBadge className="badge">1</IonBadge>
            <div className="info-div">
              <p>16:40</p>
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
