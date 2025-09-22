import {
  IonContent,
  IonPage,
  IonText,
  IonButton,
  IonIcon,
} from '@ionic/react';
import { home } from 'ionicons/icons';
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <IonPage>
      <Header />
      
      <IonContent>
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '70vh',
          textAlign: 'center',
          padding: '2rem'
        }}>
          <IonText>
            <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>404</h1>
          </IonText>
          
          <IonText color="medium">
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
              Oops! Page not found
            </h2>
          </IonText>
          
          <IonText color="medium">
            <p style={{ fontSize: '1.1rem', marginBottom: '2rem', maxWidth: '400px' }}>
              The page you're looking for doesn't exist or has been moved.
            </p>
          </IonText>
          
          <IonButton size="large" routerLink="/">
            <IonIcon icon={home} slot="start" />
            Return to Home
          </IonButton>
        </div>
      </IonContent>
      
      <Footer />
    </IonPage>
  );
};

export default NotFound;
