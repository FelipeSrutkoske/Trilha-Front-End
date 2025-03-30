import React from 'react';
import styles from './ProfileCard.module.css';

interface ProfileCardProps {
  imageUrl: string;
  name: string;
  description: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ imageUrl, name, description }) => {
  return (
    <div className={styles.card}>
      <img src={imageUrl} alt={name} className={styles.image} />
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
};

export default ProfileCard;