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
import { findAllConversationsByIdService } from "../../services/chatService";

const ChatList = () => {
  const [items, setItems] = useState<string[]>([]);

  const generateItems = () => {
    const newItems = [];
    for (let i = 0; i < 50; i++) {
      newItems.push(`Item ${1 + items.length + i}`);
    }
    setItems([...items, ...newItems]);
  };

  /* const [userId, setUserId] = useState<any>(); */
  const userId = "9d695b9a-f96b-4385-9ec1-18103f61a0e1";
  useIonViewDidEnter(() => {
    getStorage("userIdStorage").then(async (response) => {
     /*  setUserId(response); */
      await findAllConversationsByIdService
        .findAllConversations(userId)
        .then((resp: any) => {
          setSetList(resp);
        });
    });
  });

  const [chatList, setSetList] = useState([]);

  useEffect(() => {
    generateItems();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderize = () => {
    if (chatList.length == 0) {
      return "";
    } else {
      return (chatList.map((element: any, index: any) => (
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
              <h2 className="font-bold">{element}</h2>
              <p>Dipirona de 4 em 4 horas</p>
            </IonLabel>
            <IonBadge className="badge">1</IonBadge>
            <div className="info-div">
              <p>16:40</p>
            </div>
          </IonCardContent>
        </IonCard>
      )))
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
