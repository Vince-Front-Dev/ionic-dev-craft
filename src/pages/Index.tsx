import {
  IonContent,
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonIcon,
  IonText,
  IonAvatar,
} from '@ionic/react';
import { arrowForward, downloadOutline } from 'ionicons/icons';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <IonPage>
      <Header />
      
      <IonContent>
        {/* Hero Section */}
        <section style={{ 
          minHeight: '90vh', 
          display: 'flex', 
          alignItems: 'center',
          background: 'var(--portfolio-gradient)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div className="glass-effect" style={{
            position: 'absolute',
            top: '20%',
            right: '10%',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            opacity: 0.1
          }} />
          
          <IonGrid>
            <IonRow className="ion-align-items-center">
              <IonCol size="12" sizeMd="8">
                <div className="fade-in-up" style={{ color: 'white', padding: '2rem' }}>
                  <IonText>
                    <h1 style={{ 
                      fontSize: 'clamp(2rem, 5vw, 4rem)', 
                      fontWeight: 'bold',
                      marginBottom: '1rem',
                      lineHeight: '1.2'
                    }}>
                      Hi, I'm Alex Developer
                    </h1>
                  </IonText>
                  
                  <IonText>
                    <h2 style={{ 
                      fontSize: 'clamp(1.2rem, 3vw, 2rem)',
                      fontWeight: '300',
                      marginBottom: '1.5rem',
                      opacity: 0.9
                    }}>
                      Front-End Developer & UI/UX Enthusiast
                    </h2>
                  </IonText>
                  
                  <IonText>
                    <p style={{ 
                      fontSize: '1.1rem',
                      lineHeight: '1.6',
                      marginBottom: '2rem',
                      opacity: 0.8,
                      maxWidth: '600px'
                    }}>
                      I create modern, responsive web applications with a focus on user experience
                      and clean, maintainable code. Let's build something amazing together!
                    </p>
                  </IonText>
                  
                  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    <IonButton 
                      size="large"
                      fill="solid"
                      color="light"
                      routerLink="/projects"
                    >
                      View My Work
                      <IonIcon icon={arrowForward} slot="end" />
                    </IonButton>
                    
                    <IonButton 
                      size="large"
                      fill="outline"
                      color="light"
                      href="/resume.pdf"
                    >
                      <IonIcon icon={downloadOutline} slot="start" />
                      Download Resume
                    </IonButton>
                  </div>
                </div>
              </IonCol>
              
              <IonCol size="12" sizeMd="4" className="ion-text-center">
                <div className="slide-in-left">
                  <IonAvatar style={{ 
                    width: '250px', 
                    height: '250px', 
                    margin: '0 auto',
                    border: '4px solid rgba(255,255,255,0.2)',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
                  }}>
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face" 
                      alt="Alex Developer"
                    />
                  </IonAvatar>
                </div>
              </IonCol>
            </IonRow>
          </IonGrid>
        </section>

        {/* Quick Intro Section */}
        <section style={{ padding: '4rem 0' }}>
          <IonGrid>
            <IonRow>
              <IonCol size="12" sizeMd="8" offsetMd="2">
                <div className="ion-text-center fade-in-up">
                  <IonText>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>
                      Welcome to My Digital Space
                    </h2>
                  </IonText>
                  
                  <IonText color="medium">
                    <p style={{ 
                      fontSize: '1.1rem', 
                      lineHeight: '1.8', 
                      marginBottom: '2rem',
                      maxWidth: '700px',
                      margin: '0 auto 2rem'
                    }}>
                      I'm passionate about creating digital experiences that matter. 
                      With expertise in modern web technologies, I bring ideas to life 
                      through code, design, and user-centered thinking.
                    </p>
                  </IonText>
                  
                  <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <IonButton fill="outline" routerLink="/about">
                      Learn More About Me
                    </IonButton>
                    <IonButton fill="clear" routerLink="/contact">
                      Get In Touch
                    </IonButton>
                  </div>
                </div>
              </IonCol>
            </IonRow>
          </IonGrid>
        </section>
      </IonContent>
      
      <Footer />
    </IonPage>
  );
};

export default Index;
