import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonButton,
  IonIcon,
  IonChip,
  IonLabel,
} from '@ionic/react';
import { openOutline, logoGithub } from 'ionicons/icons';
import { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <IonCard className="project-card fade-in-up">
      <img 
        src={project.image} 
        alt={`${project.title} screenshot`}
        style={{ height: '200px', objectFit: 'cover' }}
      />
      
      <IonCardHeader>
        <IonCardTitle>{project.title}</IonCardTitle>
        <IonCardSubtitle>{project.short}</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>
        <div style={{ marginBottom: '1rem' }}>
          {project.tech.map((tech, index) => (
            <IonChip key={index} color="primary" outline>
              <IonLabel>{tech}</IonLabel>
            </IonChip>
          ))}
        </div>
        
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <IonButton 
            expand="block" 
            fill="solid" 
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IonIcon icon={openOutline} slot="start" />
            Live Demo
          </IonButton>
          
          <IonButton 
            expand="block" 
            fill="outline" 
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IonIcon icon={logoGithub} slot="start" />
            GitHub
          </IonButton>
          
          <IonButton 
            expand="block" 
            fill="clear" 
            routerLink={`/projects/${project.id}`}
          >
            View Details
          </IonButton>
        </div>
      </IonCardContent>
    </IonCard>
  );
};

export default ProjectCard;