/* eslint-disable @next/next/no-img-element */
'use client';
import { useRouter } from 'next/navigation';
import React, { useContext, useState } from 'react';
import { Checkbox } from 'primereact/checkbox';
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';
import { LayoutContext } from '../context/layoutcontext';
import { InputText } from 'primereact/inputtext';
import { classNames } from 'primereact/utils';
import '../styles/Login.module.css'


const LoginPage = () => {
    const [password, setPassword] = useState('');
    const [checked, setChecked] = useState(false);
    const { layoutConfig } = useContext(LayoutContext);

    const router = useRouter();
    const containerClassName = classNames('surface-ground flex align-items-start justify-content-center min-h-screen min-w-screen overflow-hidden', { 'p-input-filled': layoutConfig.inputStyle === 'filled' });

    return (
        <div className={containerClassName}>
            <div className="flex flex-column">
                <div
                    style={{
                        borderRadius: '56px',
                        padding: '0.3rem',
                        background: 'linear-gradient(180deg, #4CBEA2 10%, rgba(33, 150, 243, 0) 30%)'
                    }}
                >
                    <div className="w-full surface-card py-8 px-5 sm:px-8" style={{ borderRadius: '53px'  }}>
                        <div className="text-center mb-5">

                            <div className="text-900 text-3xl font-medium mb-3">Bem vindo</div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-900 text-xl font-medium mb-2">
                                Email
                            </label>
                            <InputText id="email" type="text" placeholder="Email address" className="w-full md:w-30rem mb-5 border" style={{ padding: '1rem' }} />

                            <label htmlFor="password" className="block text-900 font-medium text-xl mb-2">
                                Password
                            </label>
                            <Password inputId="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" toggleMask className="w-full mb-5 border rounded-md" inputClassName="w-full p-3 md:w-30rem"></Password>

                            <div className="flex align-items-center justify-content-between mb-5 gap-5">
                                <div className="flex align-items-center text-black">
                                    <Checkbox inputId="rememberme1" checked={checked} onChange={(e) => setChecked(e.checked ?? false)} className="custom-checkbox mr-2 border rounded-md"
                                    ></Checkbox>
                                    <label htmlFor="rememberme1">Gravar dados</label>
                                </div>
                                <a className="font-medium no-underline ml-2 text-right cursor-pointer text-green" style={{ color: '#4CBEA2' }}>
                                    Esqueceu a senha?
                                </a>
                            </div>
                            <Button label="Acessar"
                            className="w-full p-3 text-xl" onClick={() => router.push('/')}
                            style={{ backgroundColor: '#4CBEA2', color: '#ffffff', border:'none'}}></Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
