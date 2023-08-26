import React, { createContext, useContext, useState, useEffect } from 'react';
import { apistudenturl } from '../apiURL';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [ student, setStudent ] = useState([]);
  useEffect(()=>{
    axios.get(`${apistudenturl}fetch?role=student`).then((res)=>{
      setStudent(res.data);
    }).catch(()=>{
      console.log('Response not get');
    });
  });

  return (
    <DataContext.Provider value={data}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);