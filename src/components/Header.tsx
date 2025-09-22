import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonIcon,
  IonMenuButton,
} from '@ionic/react';
import { moon, sunny } from 'ionicons/icons';
import { useTheme } from '../utils/theme';
import { useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <IonHeader>
      <IonToolbar>
        <IonTitle>
          <span className="hero-gradient">Alex Developer</span>
        </IonTitle>
        
        <IonButtons slot="start" className="ion-hide-md-up">
          <IonMenuButton />
        </IonButtons>

        <IonButtons slot="end">
          {/* Desktop Navigation */}
          <div className="ion-hide-md-down" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <IonButton 
              fill={isActive('/') ? 'solid' : 'clear'} 
              routerLink="/"
              size="small"
            >
              Home
            </IonButton>
            <IonButton 
              fill={isActive('/about') ? 'solid' : 'clear'} 
              routerLink="/about"
              size="small"
            >
              About
            </IonButton>
            <IonButton 
              fill={isActive('/projects') ? 'solid' : 'clear'} 
              routerLink="/projects"
              size="small"
            >
              Projects
            </IonButton>
            <IonButton 
              fill={isActive('/skills') ? 'solid' : 'clear'} 
              routerLink="/skills"
              size="small"
            >
              Skills
            </IonButton>
            <IonButton 
              fill={isActive('/contact') ? 'solid' : 'clear'} 
              routerLink="/contact"
              size="small"
            >
              Contact
            </IonButton>
          </div>
          
          {/* Theme Toggle */}
          <IonButton 
            fill="clear" 
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            <IonIcon icon={isDark ? sunny : moon} />
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;