'use client';

import Link from 'next/link';
import { classNames } from 'primereact/utils';
import React, { forwardRef, useContext, useImperativeHandle, useRef, useState } from 'react';
import { AppTopbarRef } from '@/types';
import { LayoutContext } from '../context/layoutcontext';

const Menu = forwardRef<AppTopbarRef>((props, ref) => {
    const { layoutState, onMenuToggle, showProfileSidebar } = useContext(LayoutContext);
    const menubuttonRef = useRef(null);
    const topbarmenuRef = useRef(null);
    const topbarmenubuttonRef = useRef(null);
    const [sidebarVisible, setSidebarVisible] = useState(false);

    useImperativeHandle(ref, () => ({
        menubutton: menubuttonRef.current,
        topbarmenu: topbarmenuRef.current,
        topbarmenubutton: topbarmenubuttonRef.current
    }));

    const handleMenuToggle = () => {
        setSidebarVisible(!sidebarVisible);
        onMenuToggle();
    };

    return (
        <div className="layout-topbar">
            <Link href="/" className="layout-topbar-logo">
                <span>DASHBOARD EZZE SEGUROS</span>
            </Link>

            <button
                ref={menubuttonRef}
                type="button"
                className="p-link layout-menu-button layout-topbar-button"
                onClick={handleMenuToggle}>
                <i className="pi pi-bars" />
            </button>

            <button
                ref={topbarmenubuttonRef}
                type="button"
                className="p-link layout-topbar-menu-button layout-topbar-button"
                onClick={showProfileSidebar}>
                <i className="pi pi-ellipsis-v" />
            </button>

            <div
                ref={topbarmenuRef}
                className={classNames('layout-topbar-menu', { 'layout-topbar-menu-mobile-active': layoutState.profileSidebarVisible })}>
                <a href='./Login' className="p-link layout-topbar-button">
                    <i className="pi pi-user"></i>
                    <span>Login</span>
                </a>
            </div>

            {/* Sidebar */}
            {sidebarVisible && (
                <div className="sidebar p-5 text-xl">
                    <ul>
                        <li>
                            <Link href="/">
                                <i className="pi pi-home"></i> {/* Ícone para Início */}
                                Inicio
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <i className="pi pi-file"></i> {/* Ícone para Relatórios */}
                                Relatórios
                            </Link>
                        </li>
                        <li>
                            <Link href="/Cadastro">
                                <i className="pi pi-plus"></i> {/* Ícone para Cadastro */}
                                Cadastro
                            </Link>
                        </li>
                        <li>
                            <Link href="/Documentacao">
                                <i className="pi pi-book"></i> {/* Ícone para Documentações */}
                                Documentações
                            </Link>
                        </li>
                        <li>
                            <Link href="/login">
                                <i className="pi pi-user"></i> {/* Ícone para Login */}
                                Login
                            </Link>
                        </li>
                        <li onClick={handleMenuToggle}>
                            <i className="pi pi-times"></i> {/* Ícone para Fechar */}
                            Fechar
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
});

Menu.displayName = 'Menu';

export default Menu;
