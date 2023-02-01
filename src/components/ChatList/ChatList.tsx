import { IonAvatar, IonBadge, IonCard, IonCardContent, IonInfiniteScroll, IonInfiniteScrollContent, IonLabel, IonList } from "@ionic/react";
import { useEffect, useState } from "react";
import { getStorage } from "../../services/adminStorage";
import { findAllConversationsByIdService } from "../../services/chatService";
import { findByIdService } from "../../services/findService";


const ChatList = () => {
  const [items, setItems] = useState<string[]>([]);
  const [chatList, setChatList] = useState([]);
  const [senderId, setsenderId] = useState();
  const [receiverId, setreceiverId] = useState();


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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
    
  const findChatList = async () => {
    getStorage("userIdStorage").then(async (storage) => {
      await findAllConversationsByIdService
        .findAllConversations(storage)
        .then((resp) => {
          setChatList(resp.data);
          // setreceiverId(resp.data[0].members[1]);
          // setsenderId(storage);
          // findMeChat(resp.data[0].members[1]);
        });
    });
  };

  const findDoctor = async (receiverId: any) => {
    const id: any = {
      id: receiverId,
    }
   await findByIdService.findProfileByIdDoctor(id).then((resp) => {
      const dadosUser = {
        nameUser: resp.data.name,
        avatarUser: resp.data.avatar_url
      }
      return dadosUser;
    })
  }

  const findPatient = async (receiverId: any) => {
    const id: any = {
      id: receiverId,
    }
    return await findByIdService.findProfileByIdPacient(id).then((resp) => {
      const dadosUser = {
        nameUser: resp.data.name,
        avatarUser: resp.data.avatar_url
      }
    })
  }
  
  const findMeChat = async (id: any) => {
     await findByIdService.findProfileByIdMe().then((resp) => {
      if (resp.data.role !== 'DOCTOR') {
        return findDoctor(id);
      } else {
        return findPatient(id).then((resp) => {
          console.log(resp)
        });
      }
    });
  };

  const renderize = () => {
    
    if (chatList.length == 0) {
      return "";
    } else {
      let userName;
      let userAvatar;
      chatList.map((element: any, index: any) => (
        findMeChat(element.members[1]).then((resp: any) => {
          console.log(resp)
          // userName = resp.data.user.name;
          // userAvatar = resp.data.user.avatar;
        })
        
      ))
      // return chatList.map((element: any, index: any) => (
      //   <IonCard
      //     key={index}
      //     className="mx-0 mt-10 mb-1 h-32"
      //     routerLink="./conversation"
      //   >
      //     <IonCardContent className="flex justify-start w-full">
      //       <IonAvatar slot="start">
      //         <img
      //           className="max-w-[51px] w-full"
      //           alt="Pic-Doctor"
      //           src="./assets/avatar/dra-maria.jpg"
      //         />
      //       </IonAvatar>
      //       <IonLabel>
      //         <h2 className="font-bold">{findMeChat(element.members[1])}</h2>
      //         <p>Dipirona de 4 em 4 horas</p>
      //       </IonLabel>
      //       <IonBadge className="badge">1</IonBadge>
      //       <div className="info-div">
      //         <p>16:40</p>
      //       </div>
      //     </IonCardContent>
      //   </IonCard>
      // ));
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

