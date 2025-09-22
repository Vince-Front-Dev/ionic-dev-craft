import {
  IonContent,
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
  IonText,
  IonButton,
  IonIcon,
  IonChip,
  IonLabel,
  IonCard,
  IonCardContent,
  IonBackButton,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonTitle,
} from '@ionic/react';
import { openOutline, logoGithub, arrowBack } from 'ionicons/icons';
import { useParams } from 'react-router-dom';
import { projects } from '../data/projects';
import Footer from '../components/Footer';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton defaultHref="/projects" />
            </IonButtons>
            <IonTitle>Project Not Found</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        <IonContent>
          <div className="ion-text-center" style={{ padding: '4rem 0' }}>
            <IonText>
              <h2>Project not found</h2>
              <p>The project you're looking for doesn't exist.</p>
            </IonText>
            <IonButton routerLink="/projects">
              <IonIcon icon={arrowBack} slot="start" />
              Back to Projects
            </IonButton>
          </div>
        </IonContent>
        
        <Footer />
      </IonPage>
    );
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/projects" />
          </IonButtons>
          <IonTitle>{project.title}</IonTitle>
        </IonToolbar>
      </IonHeader>
      
      <IonContent>
        {/* Hero Image */}
        <section>
          <img 
            src={project.image} 
            alt={`${project.title} screenshot`}
            style={{ 
              width: '100%', 
              height: '400px', 
              objectFit: 'cover' 
            }}
          />
        </section>

        {/* Project Details */}
        <section style={{ padding: '2rem 0' }}>
          <IonGrid>
            <IonRow>
              <IonCol size="12" sizeMd="8" offsetMd="2">
                <div className="fade-in-up">
                  <IonText>
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                      {project.title}
                    </h1>
                  </IonText>
                  
                  <div style={{ marginBottom: '2rem' }}>
                    {project.tech.map((tech, index) => (
                      <IonChip key={index} color="primary">
                        <IonLabel>{tech}</IonLabel>
                      </IonChip>
                    ))}
                  </div>
                  
                  <div style={{ 
                    display: 'flex', 
                    gap: '1rem', 
                    marginBottom: '2rem',
                    flexWrap: 'wrap'
                  }}>
                    <IonButton 
                      size="large"
                      fill="solid" 
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IonIcon icon={openOutline} slot="start" />
                      Live Demo
                    </IonButton>
                    
                    <IonButton 
                      size="large"
                      fill="outline" 
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IonIcon icon={logoGithub} slot="start" />
                      GitHub Repository
                    </IonButton>
                  </div>
                </div>
              </IonCol>
            </IonRow>
          </IonGrid>
        </section>

        {/* Description */}
        <section style={{ padding: '1rem 0' }}>
          <IonGrid>
            <IonRow>
              <IonCol size="12" sizeMd="8" offsetMd="2">
                <IonCard className="fade-in-up">
                  <IonCardContent style={{ padding: '2rem' }}>
                    <IonText>
                      <h2 style={{ 
                        marginBottom: '1.5rem',
                        color: 'var(--ion-color-primary)'
                      }}>
                        About This Project
                      </h2>
                    </IonText>
                    
                    <IonText>
                      <p style={{ 
                        fontSize: '1.1rem', 
                        lineHeight: '1.8',
                        marginBottom: '1.5rem'
                      }}>
                        {project.long}
                      </p>
                    </IonText>
                    
                    <IonText>
                      <h3 style={{ 
                        marginBottom: '1rem',
                        color: 'var(--ion-color-primary)'
                      }}>
                        Technologies Used
                      </h3>
                    </IonText>
                    
                    <div style={{ marginBottom: '1.5rem' }}>
                      {project.tech.map((tech, index) => (
                        <IonChip key={index} color="secondary" outline>
                          <IonLabel>{tech}</IonLabel>
                        </IonChip>
                      ))}
                    </div>
                    
                    {project.featured && (
                      <IonChip color="success">
                        <IonLabel>⭐ Featured Project</IonLabel>
                      </IonChip>
                    )}
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
          </IonGrid>
        </section>

        {/* Demo Placeholder */}
        <section style={{ padding: '2rem 0 4rem' }}>
          <IonGrid>
            <IonRow>
              <IonCol size="12" sizeMd="10" offsetMd="1">
                <IonCard className="fade-in-up">
                  <IonCardContent>
                    <div style={{ 
                      height: '400px',
                      backgroundColor: 'var(--ion-color-light)',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '2px dashed var(--ion-color-medium)'
                    }}>
                      <IonText color="medium" className="ion-text-center">
                        <h3>Live Demo Embed</h3>
                        <p>Interactive demo would be embedded here</p>
                        <IonButton 
                          fill="outline" 
                          href={project.demo}
                          target="_blank"
                        >
                          Open in New Tab
                        </IonButton>
                      </IonText>
                    </div>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
          </IonGrid>
        </section>
      </IonContent>
      
      <Footer />
    </IonPage>
  );
};

export default ProjectDetail;