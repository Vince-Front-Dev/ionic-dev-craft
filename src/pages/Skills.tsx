import {
  IonContent,
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
  IonText,
} from '@ionic/react';
import { 
  logoHtml5, 
  logoCss3, 
  logoJavascript, 
  logoReact,
  logoNodejs,
  logoGithub,
  codeSlashOutline,
  colorPaletteOutline,
  phonePortraitOutline 
} from 'ionicons/icons';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SkillBadge from '../components/SkillBadge';

const Skills: React.FC = () => {
  const skills = [
    { name: 'HTML5', icon: logoHtml5, proficiency: 95, color: 'danger' },
    { name: 'CSS3', icon: logoCss3, proficiency: 90, color: 'primary' },
    { name: 'JavaScript', icon: logoJavascript, proficiency: 88, color: 'warning' },
    { name: 'React', icon: logoReact, proficiency: 85, color: 'tertiary' },
    { name: 'TypeScript', icon: codeSlashOutline, proficiency: 80, color: 'primary' },
    { name: 'Node.js', icon: logoNodejs, proficiency: 75, color: 'success' },
    { name: 'Ionic', icon: phonePortraitOutline, proficiency: 82, color: 'primary' },
    { name: 'UI/UX Design', icon: colorPaletteOutline, proficiency: 78, color: 'secondary' },
    { name: 'Git', icon: logoGithub, proficiency: 90, color: 'dark' }
  ];

  const categories = [
    {
      title: 'Frontend Technologies',
      description: 'Creating beautiful, responsive user interfaces',
      skills: skills.slice(0, 4)
    },
    {
      title: 'Development Tools',
      description: 'Tools and frameworks that power my workflow',
      skills: skills.slice(4, 7)
    },
    {
      title: 'Design & Collaboration',
      description: 'Design principles and version control',
      skills: skills.slice(7)
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
                  <IonText>
                    <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                      My Skills
                    </h1>
                  </IonText>
                  
                  <IonText color="medium">
                    <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
                      A comprehensive overview of my technical skills and proficiency levels
                      in various technologies and tools.
                    </p>
                  </IonText>
                </div>
              </IonCol>
            </IonRow>
          </IonGrid>
        </section>

        {/* Skills Categories */}
        {categories.map((category, categoryIndex) => (
          <section key={categoryIndex} style={{ padding: '2rem 0' }}>
            <IonGrid>
              <IonRow>
                <IonCol size="12">
                  <div className="ion-text-center fade-in-up" style={{ marginBottom: '2rem' }}>
                    <IonText>
                      <h2 style={{ 
                        fontSize: '2rem', 
                        marginBottom: '0.5rem',
                        color: 'var(--ion-color-primary)'
                      }}>
                        {category.title}
                      </h2>
                    </IonText>
                    
                    <IonText color="medium">
                      <p style={{ fontSize: '1.1rem' }}>
                        {category.description}
                      </p>
                    </IonText>
                  </div>
                </IonCol>
              </IonRow>
              
              <IonRow>
                {category.skills.map((skill, index) => (
                  <IonCol 
                    key={skill.name}
                    size="12" 
                    sizeSm="6" 
                    sizeMd="4"
                    style={{ animationDelay: `${(categoryIndex * 3 + index) * 0.1}s` }}
                  >
                    <SkillBadge
                      name={skill.name}
                      icon={skill.icon}
                      proficiency={skill.proficiency}
                      color={skill.color}
                    />
                  </IonCol>
                ))}
              </IonRow>
            </IonGrid>
          </section>
        ))}

        {/* Additional Info Section */}
        <section style={{ padding: '4rem 0', textAlign: 'center' }}>
          <IonGrid>
            <IonRow>
              <IonCol size="12" sizeMd="8" offsetMd="2">
                <div className="fade-in-up">
                  <IonText>
                    <h2 style={{ 
                      fontSize: '2rem', 
                      marginBottom: '1.5rem',
                      color: 'var(--ion-color-primary)'
                    }}>
                      Always Learning
                    </h2>
                  </IonText>
                  
                  <IonText color="medium">
                    <p style={{ 
                      fontSize: '1.1rem', 
                      lineHeight: '1.8',
                      maxWidth: '600px',
                      margin: '0 auto'
                    }}>
                      Technology evolves rapidly, and I'm committed to continuous learning. 
                      I regularly explore new frameworks, tools, and best practices to stay 
                      current with industry trends and deliver the best possible solutions.
                    </p>
                  </IonText>
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

export default Skills;