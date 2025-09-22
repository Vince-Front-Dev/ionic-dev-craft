import { IonApp, IonRouterOutlet, IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonIcon, IonLabel, IonMenuToggle, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route } from 'react-router-dom';
import { home, person, briefcase, school, mail } from 'ionicons/icons';

import Index from './pages/Index';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonMenu side="start" menuId="main-menu" contentId="main-content">
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Alex Developer</IonTitle>
        </IonToolbar>
      </IonHeader>
      
      <IonContent>
        <IonList>
          <IonMenuToggle autoHide={false}>
            <IonItem routerLink="/" routerDirection="root">
              <IonIcon icon={home} slot="start" />
              <IonLabel>Home</IonLabel>
            </IonItem>
            
            <IonItem routerLink="/about" routerDirection="forward">
              <IonIcon icon={person} slot="start" />
              <IonLabel>About</IonLabel>
            </IonItem>
            
            <IonItem routerLink="/projects" routerDirection="forward">
              <IonIcon icon={briefcase} slot="start" />
              <IonLabel>Projects</IonLabel>
            </IonItem>
            
            <IonItem routerLink="/skills" routerDirection="forward">
              <IonIcon icon={school} slot="start" />
              <IonLabel>Skills</IonLabel>
            </IonItem>
            
            <IonItem routerLink="/contact" routerDirection="forward">
              <IonIcon icon={mail} slot="start" />
              <IonLabel>Contact</IonLabel>
            </IonItem>
          </IonMenuToggle>
        </IonList>
      </IonContent>
    </IonMenu>

    <IonReactRouter>
      <IonRouterOutlet id="main-content">
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
