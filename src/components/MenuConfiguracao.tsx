'use client';

import { PrimeReactContext } from 'primereact/api';
import { Button } from 'primereact/button';
import { InputSwitchChangeEvent } from 'primereact/inputswitch';
import { RadioButton, RadioButtonChangeEvent } from 'primereact/radiobutton';
import { Sidebar } from 'primereact/sidebar';
import { classNames } from 'primereact/utils';
import React, { useContext, useEffect, useState } from 'react';
import { AppConfigProps, LayoutConfig, LayoutState } from '@/types';
import { LayoutContext } from '../context/layoutcontext';

const MenuConfiguracao = (props: AppConfigProps) => {
    const [scales] = useState([12, 13, 14, 15, 16]);
    const { layoutConfig, setLayoutConfig, layoutState, setLayoutState } = useContext(LayoutContext);
    const { setRipple, changeTheme } = useContext(PrimeReactContext);

    const onConfigButtonClick = () => {
        setLayoutState((prevState: LayoutState) => ({ ...prevState, configSidebarVisible: true }));
    };

    const onConfigSidebarHide = () => {
        setLayoutState((prevState: LayoutState) => ({ ...prevState, configSidebarVisible: false }));
    };

    const changeMenuMode = (e: RadioButtonChangeEvent) => {
        setLayoutConfig((prevState: LayoutConfig) => ({ ...prevState, menuMode: e.value }));
    };

    const _changeTheme = (theme: string, colorScheme: string) => {
        changeTheme?.(layoutConfig.theme, theme, 'theme-css', () => {
            setLayoutConfig((prevState: LayoutConfig) => ({ ...prevState, theme, colorScheme }));
        });
    };

    const decrementScale = () => {
        setLayoutConfig((prevState: LayoutConfig) => ({ ...prevState, scale: prevState.scale - 1 }));
    };

    const incrementScale = () => {
        setLayoutConfig((prevState: LayoutConfig) => ({ ...prevState, scale: prevState.scale + 1 }));
    };

    const applyScale = () => {
        document.documentElement.style.fontSize = layoutConfig.scale + 'px';
    };

    useEffect(() => {
        applyScale();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [layoutConfig.scale]);

    return (
        <>
            <button className="layout-config-button config-link" type="button" onClick={onConfigButtonClick}>
                <i className="pi pi-cog"></i>
            </button>

            <Sidebar visible={layoutState.configSidebarVisible} onHide={onConfigSidebarHide} position="right" className="layout-config-sidebar w-20rem">
                {!props.simple && (
                    <>
                        <h5>Fonte</h5>
                        <div className="flex align-items-center">
                            <Button icon="pi pi-minus" type="button" onClick={decrementScale} rounded text className="w-2rem h-2rem mr-2" disabled={layoutConfig.scale === scales[0]}></Button>
                            <div className="flex gap-2 align-items-center">
                                {scales.map((item) => {
                                    return <i className={classNames('pi pi-circle-fill', { 'text-primary-500': item === layoutConfig.scale, 'text-300': item !== layoutConfig.scale })} key={item}></i>;
                                })}
                            </div>
                            <Button icon="pi pi-plus" type="button" onClick={incrementScale} rounded text className="w-2rem h-2rem ml-2" disabled={layoutConfig.scale === scales[scales.length - 1]}></Button>
                        </div>

                    </>
                )}

                <h5>Tema</h5>
                <div className="grid">
                    <div className="col-3">

                        <button className="p-link w-2rem h-2rem" onClick={() => _changeTheme('bootstrap4-light-blue', 'light')}>
                            Claro
                        </button>
                    </div>

                    <div className="col-3">
                        <button className="p-link w-2rem h-2rem" onClick={() => _changeTheme('bootstrap4-dark-blue', 'dark')}>
                            Escuro
                        </button>
                    </div>

                </div>


            </Sidebar>
        </>
    );
};

export default MenuConfiguracao;
