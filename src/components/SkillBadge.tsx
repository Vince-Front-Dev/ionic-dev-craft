import { IonCard, IonCardContent, IonIcon, IonText } from '@ionic/react';

interface SkillBadgeProps {
  name: string;
  icon?: string;
  proficiency: number; // 0-100
  color?: string;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ 
  name, 
  icon, 
  proficiency, 
  color = 'primary' 
}) => {
  return (
    <IonCard className="skill-badge fade-in-up">
      <IonCardContent className="ion-text-center">
        {icon && (
          <IonIcon 
            icon={icon} 
            style={{ fontSize: '2rem', marginBottom: '0.5rem' }}
            color={color}
          />
        )}
        
        <IonText>
          <h3 style={{ margin: '0.5rem 0', fontSize: '1rem' }}>{name}</h3>
        </IonText>
        
        <div className="skill-bar">
          <div 
            className="skill-bar-fill" 
            style={{ width: `${proficiency}%` }}
          />
        </div>
        
        <IonText color="medium">
          <small>{proficiency}%</small>
        </IonText>
      </IonCardContent>
    </IonCard>
  );
};

export default SkillBadge;