'use client';

import React from 'react';
import styles from './Loader.module.css';

const Loader = () => {
  console.log('Rendering new spinner loader component'); // Adding log as per user rules
  
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.spinner}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;