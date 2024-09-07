// src/pages/_app.tsx
import type { AppProps } from 'next/app';
import { PrimeReactProvider } from 'primereact/api';
import { LayoutProvider, LayoutContext } from '../context/layoutcontext';
import '../globals.css';
import Head from 'next/head';
import React, { useContext, useEffect, useRef } from 'react';
import { classNames } from 'primereact/utils';
import Menu from '@/components/Menu';
import Rodape from '@/components/Rodape';
import MenuConfiguracao from '@/components/MenuConfiguracao';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import '../styles/layout/layout.scss';

function MyApp({ Component, pageProps }: AppProps) {
  const { layoutState } = useContext(LayoutContext);

  // Verifique se layoutState está definido
  const containerClass = classNames('layout-wrapper', {
    'layout-overlay': layoutState?.menuMode === 'overlay',
    'layout-static': layoutState?.menuMode === 'static',
    'layout-overlay-active': layoutState?.overlayMenuActive,
    'layout-mobile-active': layoutState?.staticMenuMobileActive,
  });

  return (
    <PrimeReactProvider>
      <LayoutProvider>
        <Head>
          <link
            id="theme-css"
            href={`/themes/lara-light-indigo/theme.css`}
            rel="stylesheet"
          />
        </Head>
        <div className={containerClass}>
          <Menu />
          <div className="layout-main-container">
            <div className="layout-main">
              <Component {...pageProps} />
            </div>
            <Rodape />
          </div>
          <MenuConfiguracao />
          <div className="layout-mask"></div>
        </div>
      </LayoutProvider>
    </PrimeReactProvider>
  );
}

export default MyApp;

