import React, { createContext, useState, useContext, useEffect } from 'react';

// Create a context
const SavedDoctorsContext = createContext();

// Create a provider component
export const SavedDoctorsProvider = ({ children }) => {
  const [savedDoctors, setSavedDoctors] = useState(() => {
    // Get saved doctors from localStorage
    const saved = localStorage.getItem('savedDoctors');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    // Update localStorage whenever savedDoctors changes
    localStorage.setItem('savedDoctors', JSON.stringify(savedDoctors));
  }, [savedDoctors]);

  const saveDoctor = (doctor) => {
    setSavedDoctors((prev) => [...prev, doctor]);
  };

  const removeSavedDoctor = (doctorId) => {
    setSavedDoctors((prev) => prev.filter((doc) => doc.id !== doctorId));
  };

  const isDoctorSaved = (doctorId) => {
    return savedDoctors.some((doc) => doc.id === doctorId);
  };

  return (
    <SavedDoctorsContext.Provider value={{ savedDoctors, saveDoctor, removeSavedDoctor, isDoctorSaved }}>
      {children}
    </SavedDoctorsContext.Provider>
  );
};

// Custom hook to use the context
export const useSavedDoctors = () => useContext(SavedDoctorsContext);
