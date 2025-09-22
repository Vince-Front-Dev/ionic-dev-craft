import {
  IonContent,
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
  IonText,
  IonCard,
  IonCardContent,
  IonItem,
  IonLabel,
  IonInput,
  IonTextarea,
  IonButton,
  IonIcon,
  IonToast,
} from '@ionic/react';
import { 
  mail, 
  logoGithub, 
  logoLinkedin, 
  downloadOutline,
  sendOutline,
  locationOutline,
  callOutline 
} from 'ionicons/icons';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showToast, setShowToast] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    // Create mailto link with form data
    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    const mailtoLink = `mailto:alex@example.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    
    window.location.href = mailtoLink;
    
    // Show success toast
    setShowToast(true);
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    setErrors({});
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

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
                      Get In Touch
                    </h1>
                  </IonText>
                  
                  <IonText color="medium">
                    <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
                      I'd love to hear from you! Whether you have a project in mind,
                      want to collaborate, or just want to say hello.
                    </p>
                  </IonText>
                </div>
              </IonCol>
            </IonRow>
          </IonGrid>
        </section>

        {/* Contact Form and Info */}
        <section style={{ padding: '2rem 0 4rem' }}>
          <IonGrid>
            <IonRow>
              {/* Contact Form */}
              <IonCol size="12" sizeMd="8">
                <IonCard className="fade-in-up">
                  <IonCardContent style={{ padding: '2rem' }}>
                    <IonText>
                      <h2 style={{ 
                        marginBottom: '1.5rem',
                        color: 'var(--ion-color-primary)'
                      }}>
                        Send me a message
                      </h2>
                    </IonText>
                    
                    <form onSubmit={handleSubmit}>
                      <IonItem>
                        <IonLabel position="stacked">Name *</IonLabel>
                        <IonInput
                          value={formData.name}
                          onIonInput={(e) => handleInputChange('name', e.detail.value!)}
                          placeholder="Your full name"
                          required
                        />
                      </IonItem>
                      {errors.name && (
                        <IonText color="danger">
                          <small>{errors.name}</small>
                        </IonText>
                      )}
                      
                      <IonItem>
                        <IonLabel position="stacked">Email *</IonLabel>
                        <IonInput
                          type="email"
                          value={formData.email}
                          onIonInput={(e) => handleInputChange('email', e.detail.value!)}
                          placeholder="your.email@example.com"
                          required
                        />
                      </IonItem>
                      {errors.email && (
                        <IonText color="danger">
                          <small>{errors.email}</small>
                        </IonText>
                      )}
                      
                      <IonItem>
                        <IonLabel position="stacked">Message *</IonLabel>
                        <IonTextarea
                          value={formData.message}
                          onIonInput={(e) => handleInputChange('message', e.detail.value!)}
                          placeholder="Tell me about your project or just say hello!"
                          rows={6}
                          required
                        />
                      </IonItem>
                      {errors.message && (
                        <IonText color="danger">
                          <small>{errors.message}</small>
                        </IonText>
                      )}
                      
                      <div style={{ marginTop: '2rem' }}>
                        <IonButton 
                          expand="block" 
                          size="large"
                          type="submit"
                        >
                          <IonIcon icon={sendOutline} slot="start" />
                          Send Message
                        </IonButton>
                      </div>
                    </form>
                    
                    <IonText color="medium">
                      <small style={{ marginTop: '1rem', display: 'block' }}>
                        * This form will open your email client with the message pre-filled.
                        For EmailJS integration, see the README for setup instructions.
                      </small>
                    </IonText>
                  </IonCardContent>
                </IonCard>
              </IonCol>
              
              {/* Contact Info */}
              <IonCol size="12" sizeMd="4">
                <div className="slide-in-left">
                  {/* Contact Details */}
                  <IonCard style={{ marginBottom: '1rem' }}>
                    <IonCardContent>
                      <IonText>
                        <h3 style={{ 
                          marginBottom: '1rem',
                          color: 'var(--ion-color-primary)'
                        }}>
                          Contact Information
                        </h3>
                      </IonText>
                      
                      <div style={{ marginBottom: '1rem' }}>
                        <IonIcon icon={mail} color="primary" />
                        <span style={{ marginLeft: '0.5rem' }}>alex@example.com</span>
                      </div>
                      
                      <div style={{ marginBottom: '1rem' }}>
                        <IonIcon icon={locationOutline} color="primary" />
                        <span style={{ marginLeft: '0.5rem' }}>San Francisco, CA</span>
                      </div>
                      
                      <div>
                        <IonIcon icon={callOutline} color="primary" />
                        <span style={{ marginLeft: '0.5rem' }}>Available for calls</span>
                      </div>
                    </IonCardContent>
                  </IonCard>
                  
                  {/* Social Links */}
                  <IonCard style={{ marginBottom: '1rem' }}>
                    <IonCardContent>
                      <IonText>
                        <h3 style={{ 
                          marginBottom: '1rem',
                          color: 'var(--ion-color-primary)'
                        }}>
                          Connect With Me
                        </h3>
                      </IonText>
                      
                      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        <IonButton
                          fill="outline"
                          href="https://github.com/yourname"
                          target="_blank"
                        >
                          <IonIcon icon={logoGithub} slot="start" />
                          GitHub
                        </IonButton>
                        
                        <IonButton
                          fill="outline"
                          href="https://linkedin.com/in/yourname"
                          target="_blank"
                        >
                          <IonIcon icon={logoLinkedin} slot="start" />
                          LinkedIn
                        </IonButton>
                      </div>
                    </IonCardContent>
                  </IonCard>
                  
                  {/* Resume Download */}
                  <IonCard>
                    <IonCardContent>
                      <IonText>
                        <h3 style={{ 
                          marginBottom: '1rem',
                          color: 'var(--ion-color-primary)'
                        }}>
                          Resume
                        </h3>
                      </IonText>
                      
                      <IonButton
                        expand="block"
                        fill="outline"
                        href="/resume.pdf"
                        target="_blank"
                      >
                        <IonIcon icon={downloadOutline} slot="start" />
                        Download Resume
                      </IonButton>
                    </IonCardContent>
                  </IonCard>
                </div>
              </IonCol>
            </IonRow>
          </IonGrid>
        </section>
        
        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message="Message prepared! Your email client should open shortly."
          duration={3000}
          color="success"
        />
      </IonContent>
      
      <Footer />
    </IonPage>
  );
};

export default Contact;