import { IonFooter, IonToolbar, IonTitle, IonButtons, IonButton, IonIcon } from '@ionic/react';
import { logoGithub, logoLinkedin, mail } from 'ionicons/icons';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <IonFooter>
      <IonToolbar>
        <IonTitle size="small" className="ion-text-center">
          © {currentYear} Alex Developer. Built with React + Ionic
        </IonTitle>
        
        <IonButtons slot="end">
          <IonButton
            fill="clear"
            href="https://github.com/yourname"
            target="_blank"
            aria-label="GitHub Profile"
          >
            <IonIcon icon={logoGithub} />
          </IonButton>
          <IonButton
            fill="clear"
            href="https://linkedin.com/in/yourname"
            target="_blank"
            aria-label="LinkedIn Profile"
          >
            <IonIcon icon={logoLinkedin} />
          </IonButton>
          <IonButton
            fill="clear"
            href="mailto:alex@example.com"
            aria-label="Email Contact"
          >
            <IonIcon icon={mail} />
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonFooter>
  );
};

export default Footer;