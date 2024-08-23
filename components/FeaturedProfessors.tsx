// src/components/FeaturedProfessors.tsx
import React from 'react';

type Professor = {
  name: string;
  department: string;
  rating: number;
};

const professors: Professor[] = [
  { name: 'John Doe', department: 'Computer Science', rating: 4.8 },
  { name: 'Jane Smith', department: 'Mathematics', rating: 4.7 },
  { name: 'Alan Turing', department: 'AI Research', rating: 5.0 },
];

const FeaturedProfessors: React.FC = () => {
  return (
    <section style={styles.featured}>
      <h2>Top Rated Professors</h2>
      <div style={styles.professorList}>
        {professors.map((professor) => (
          <div key={professor.name} style={styles.professorCard}>
            <h3>{professor.name}</h3>
            <p>{professor.department}</p>
            <p>Rating: {professor.rating}</p>
          </div>
        ))}
      </div>
      <button style={styles.viewMoreButton}>View More</button>
    </section>
  );
};

const styles = {
  featured: {
    padding: '40px 20px',
    backgroundColor: '#f1f1f1',
    textAlign: 'center' as const,
  },
  professorList: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    flexWrap: 'wrap' as const,
  },
  professorCard: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  viewMoreButton: {
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default FeaturedProfessors;
