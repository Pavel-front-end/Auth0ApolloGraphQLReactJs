import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import styles from  './layout.module.css'

export interface LayoutProps {
  children: React.ReactElement;
}

const Layout = ({ children }: LayoutProps) => {

  return (
    <div className={styles.root}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
