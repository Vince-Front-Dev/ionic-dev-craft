import {
  IonContent,
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardContent,
  IonText,
  IonIcon,
  IonAvatar,
  IonItem,
  IonLabel,
} from '@ionic/react';
import { 
  schoolOutline, 
  briefcaseOutline, 
  codeSlashOutline,
  trophyOutline 
} from 'ionicons/icons';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About: React.FC = () => {
  const timeline = [
    {
      year: '2024',
      title: 'Front-End Developer',
      company: 'Tech Startup',
      description: 'Building modern web applications with React and TypeScript',
      icon: briefcaseOutline
    },
    {
      year: '2023',
      title: 'Freelance Developer',
      company: 'Various Clients',
      description: 'Delivered custom web solutions for small businesses',
      icon: codeSlashOutline
    },
    {
      year: '2022',
      title: 'CS Degree',
      company: 'University',
      description: 'Bachelor of Science in Computer Science',
      icon: schoolOutline
    },
    {
      year: '2021',
      title: 'First Website',
      company: 'Personal Project',
      description: 'Built my first responsive website with HTML, CSS, and JavaScript',
      icon: trophyOutline
    }
  ];

  return (
    <IonPage>
      <Header />
      
      <IonContent>
        {/* Hero Section */}
        <section style={{ padding: '4rem 0 2rem', textAlign: 'center' }}>
          <IonGrid>
            <IonRow>
              <IonCol size="12" sizeMd="8" offsetMd="2">
                <div className="fade-in-up">
                  <IonAvatar style={{ 
                    width: '150px', 
                    height: '150px', 
                    margin: '0 auto 2rem',
                    border: '4px solid var(--ion-color-primary)'
                  }}>
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face" 
                      alt="Alex Developer"
                    />
                  </IonAvatar>
                  
                  <IonText>
                    <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                      About Me
                    </h1>
                  </IonText>
                  
                  <IonText color="medium">
                    <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
                      Passionate front-end developer with a love for creating 
                      beautiful, functional web experiences.
                    </p>
                  </IonText>
                </div>
              </IonCol>
            </IonRow>
          </IonGrid>
        </section>

        {/* Bio Section */}
        <section style={{ padding: '2rem 0' }}>
          <IonGrid>
            <IonRow>
              <IonCol size="12" sizeMd="10" offsetMd="1">
                <IonCard className="fade-in-up">
                  <IonCardContent style={{ padding: '2rem' }}>
                    <IonText>
                      <h2 style={{ marginBottom: '1.5rem', color: 'var(--ion-color-primary)' }}>
                        My Story
                      </h2>
                    </IonText>
                    
                    <IonText>
                      <p style={{ 
                        fontSize: '1.1rem', 
                        lineHeight: '1.8', 
                        marginBottom: '1.5rem' 
                      }}>
                        My journey into web development started with curiosity and a desire to create. 
                        What began as tinkering with HTML and CSS has evolved into a passion for 
                        building comprehensive digital solutions that solve real-world problems.
                      </p>
                      
                      <p style={{ 
                        fontSize: '1.1rem', 
                        lineHeight: '1.8', 
                        marginBottom: '1.5rem' 
                      }}>
                        I specialize in front-end development with a strong focus on React, TypeScript, 
                        and modern CSS. My approach combines technical expertise with user-centered 
                        design principles to create applications that are not only functional but 
                        delightful to use.
                      </p>
                      
                      <p style={{ 
                        fontSize: '1.1rem', 
                        lineHeight: '1.8' 
                      }}>
                        When I'm not coding, you can find me exploring new technologies, contributing 
                        to open source projects, or sharing knowledge with the developer community. 
                        I believe in continuous learning and staying current with industry trends.
                      </p>
                    </IonText>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
          </IonGrid>
        </section>

        {/* Timeline Section */}
        <section style={{ padding: '2rem 0 4rem' }}>
          <IonGrid>
            <IonRow>
              <IonCol size="12" sizeMd="10" offsetMd="1">
                <IonText className="ion-text-center">
                  <h2 style={{ 
                    fontSize: '2.5rem', 
                    marginBottom: '2rem',
                    color: 'var(--ion-color-primary)'
                  }}>
                    My Journey
                  </h2>
                </IonText>
                
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                  {timeline.map((item, index) => (
                    <IonCard key={index} className="fade-in-up" style={{ 
                      marginBottom: '1rem',
                      animationDelay: `${index * 0.1}s`
                    }}>
                      <IonItem>
                        <IonIcon 
                          icon={item.icon} 
                          slot="start" 
                          color="primary"
                          style={{ fontSize: '1.5rem' }}
                        />
                        <IonLabel>
                          <h2 style={{ fontWeight: 'bold' }}>{item.title}</h2>
                          <h3 style={{ color: 'var(--ion-color-primary)' }}>
                            {item.company} • {item.year}
                          </h3>
                          <p>{item.description}</p>
                        </IonLabel>
                      </IonItem>
                    </IonCard>
                  ))}
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

export default About;