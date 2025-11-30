'use client';

import { useState } from 'react';

export default function SkillFilter({ onFilterChange }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'Semua Keahlian' },
    { id: 'Jaringan', label: '🌐 Jaringan' },
    { id: 'Frontend', label: '🎨 Frontend' },
    { id: 'Backend', label: '💾 Backend' },
    { id: 'Soft Skill', label: '💪 Soft Skill' },
  ];

  const handleFilter = (category) => {
    setActiveCategory(category);
    onFilterChange(category);
  };

  return (
    <div className="skills-categories">
      {categories.map((cat) => (
        <button
          key={cat.id}
          className={`category-btn ${activeCategory === cat.id ? 'active' : ''}`}
          onClick={() => handleFilter(cat.id)}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
