/* eslint-disable @next/next/no-img-element */

import React, { useContext } from 'react';
import { LayoutContext } from '../context/layoutcontext';

const Rodape = () => {
    const { layoutConfig } = useContext(LayoutContext);

    return (
        <div className="layout-footer">
            <span className="font-medium ml-2">Relatórios gerados pela área de BI</span>
        </div>
    );
};

export default Rodape;
