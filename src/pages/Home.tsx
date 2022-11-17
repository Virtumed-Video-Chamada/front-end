import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import VideoChat from '../components/VideoChat';
import './Home.css';
import { IonIcon } from '@ionic/react';
import Logo from '../assets/logo.svg';

// const SvgListen = () => (
//   <IonIcon src={Logo} font-size="48px" />
// );

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home
          </IonTitle>
       
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
          <IonIcon src={Logo} font-size="300px" className="logo" />
          </IonToolbar>
        </IonHeader>
        <VideoChat />
      </IonContent>
    </IonPage>
  );
};

export default Home;
