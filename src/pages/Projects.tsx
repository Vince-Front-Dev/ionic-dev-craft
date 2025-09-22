import {
  IonContent,
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
  IonText,
  IonSearchbar,
  IonSelect,
  IonSelectOption,
  IonItem,
  IonLabel,
} from '@ionic/react';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

const Projects: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [selectedTech, setSelectedTech] = useState<string>('');

  // Get all unique technologies
  const allTech = Array.from(new Set(projects.flatMap(project => project.tech)));

  // Filter projects based on search and tech filter
  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchText.toLowerCase()) ||
                         project.short.toLowerCase().includes(searchText.toLowerCase());
    const matchesTech = !selectedTech || project.tech.includes(selectedTech);
    return matchesSearch && matchesTech;
  });

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
                      My Projects
                    </h1>
                  </IonText>
                  
                  <IonText color="medium">
                    <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
                      A collection of projects that showcase my skills and passion 
                      for creating meaningful digital experiences.
                    </p>
                  </IonText>
                </div>
              </IonCol>
            </IonRow>
          </IonGrid>
        </section>

        {/* Filters Section */}
        <section style={{ padding: '2rem 0' }}>
          <IonGrid>
            <IonRow>
              <IonCol size="12" sizeMd="8" offsetMd="2">
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <div style={{ flex: 1, minWidth: '250px' }}>
                    <IonSearchbar
                      value={searchText}
                      onIonInput={(e) => setSearchText(e.detail.value!)}
                      placeholder="Search projects..."
                      showClearButton="focus"
                    />
                  </div>
                  
                  <div style={{ minWidth: '200px' }}>
                    <IonItem>
                      <IonLabel>Filter by Technology</IonLabel>
                      <IonSelect
                        value={selectedTech}
                        onIonChange={(e) => setSelectedTech(e.detail.value)}
                        placeholder="All Technologies"
                      >
                        <IonSelectOption value="">All Technologies</IonSelectOption>
                        {allTech.map(tech => (
                          <IonSelectOption key={tech} value={tech}>
                            {tech}
                          </IonSelectOption>
                        ))}
                      </IonSelect>
                    </IonItem>
                  </div>
                </div>
              </IonCol>
            </IonRow>
          </IonGrid>
        </section>

        {/* Projects Grid */}
        <section style={{ padding: '2rem 0 4rem' }}>
          <IonGrid>
            <IonRow>
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project, index) => (
                  <IonCol 
                    key={project.id}
                    size="12" 
                    sizeSm="6" 
                    sizeLg="4"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <ProjectCard project={project} />
                  </IonCol>
                ))
              ) : (
                <IonCol size="12">
                  <div className="ion-text-center" style={{ padding: '4rem 0' }}>
                    <IonText color="medium">
                      <h3>No projects found</h3>
                      <p>Try adjusting your search or filter criteria</p>
                    </IonText>
                  </div>
                </IonCol>
              )}
            </IonRow>
          </IonGrid>
        </section>
      </IonContent>
      
      <Footer />
    </IonPage>
  );
};

export default Projects;