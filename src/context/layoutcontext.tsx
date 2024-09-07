'use client';
import React, { useState, createContext } from 'react';
import { LayoutState, ChildContainerProps, LayoutConfig, LayoutContextProps } from '@/types';
export const LayoutContext = createContext({} as LayoutContextProps);

export const LayoutProvider = ({ children }: ChildContainerProps) => {
    const [layoutConfig, setLayoutConfig] = useState<LayoutConfig>({
        ripple: false,
        inputStyle: 'outlined',
        menuMode: 'static',
        colorScheme: 'light',
        theme: 'lara-light-indigo',
        scale: 14
    });

    const [layoutState, setLayoutState] = useState<LayoutState>({
        staticMenuDesktopInactive: false,
        overlayMenuActive: false,
        profileSidebarVisible: false,
        configSidebarVisible: false,
        staticMenuMobileActive: false,
        menuHoverActive: false
    });

    const onMenuToggle = () => {
        console.log("Menu toggle foi acionado");
        if (isOverlay()) {
            setLayoutState((prev:any) => ({
                ...prev,
                overlayMenuActive: !prev.overlayMenuActive,
            }));
        }

        if (isDesktop()) {
            setLayoutState((prev:any) => ({
                ...prev,
                staticMenuDesktopInactive: !prev.staticMenuDesktopInactive,
            }));
        } else {
            setLayoutState((prev:any) => ({
                ...prev,
                staticMenuMobileActive: !prev.staticMenuMobileActive,
            }));
        }
    };

    const showProfileSidebar = () => {
        setLayoutState((prevLayoutState:any) => ({ ...prevLayoutState, profileSidebarVisible: !prevLayoutState.profileSidebarVisible }));
    };

    const isOverlay = () => {
        return layoutConfig.menuMode === 'overlay';
    };

    const isDesktop = () => {
        return window.innerWidth > 991;
    };

    const value: LayoutContextProps = {
        layoutConfig,
        setLayoutConfig,
        layoutState,
        setLayoutState,
        onMenuToggle,
        showProfileSidebar
    };

    return <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>;
};
