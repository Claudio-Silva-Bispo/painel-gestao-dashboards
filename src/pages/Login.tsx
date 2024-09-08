
'use client';
import { useRouter } from 'next/navigation';
import React, { useContext, useState } from 'react';
import { Checkbox } from 'primereact/checkbox';
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';
import { LayoutContext } from '../context/layoutcontext';
import { InputText } from 'primereact/inputtext';
import { classNames } from 'primereact/utils';
import '../styles/login.module.css'

// Implementar a lógica para Logar na página
import { useAuth } from '@/context/authContext';


const Login = () => {

    // Login
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();
    const router = useRouter();

    const handleLogin = () => {
        // Aqui você pode melhorar a lógica de autenticação
        const isAuthenticated = true; // Simulando uma autenticação bem-sucedida

        // Se a autenticação for bem-sucedida
        if (isAuthenticated) {
            login(); // Chama a função de login do contexto
            router.push('/'); // Redireciona para a página inicial após o login
        } else {
            // Aqui você pode definir um estado de erro, se necessário
            console.error("Falha na autenticação"); // Simulação de falha. Escrever mais aqui.
        }
    };

    const [checked, setChecked] = useState(false);
    const { layoutConfig } = useContext(LayoutContext);

    const containerClassName = classNames('surface-ground flex align-items-start justify-content-center min-h-screen min-w-screen overflow-hidden', { 'p-input-filled': layoutConfig.inputStyle === 'filled' });

    return (
        <div className={containerClassName}>
            <div className="flex flex-column justify-center items-center w-full">
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
                                E-mail
                            </label>
                            <InputText
                            id="email"
                            type="text"
                            placeholder="Email address"
                            className="w-full md:w-30rem mb-5 border"
                            style={{ padding: '1rem' }}

                            // atualizar estado do email e receber informações
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            />

                            <label htmlFor="password" className="block text-900 font-medium text-xl mb-2">
                                Senha
                            </label>
                            <Password
                            inputId="password"
                            placeholder="Password"
                            toggleMask
                            className="w-full mb-5 border rounded-md" inputClassName="w-full p-3 md:w-30rem"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}/>

                            <div className="flex align-items-center justify-content-between mb-5 gap-5">
                                <div className="flex align-items-center text-black">
                                    <Checkbox
                                    inputId="rememberme1"
                                    checked={checked}
                                    onChange={(e) => setChecked(e.checked ?? false)}
                                    className="custom-checkbox mr-2 border rounded-md"
                                    />
                                    <label htmlFor="rememberme1">Gravar dados</label>
                                </div>
                                <a href='/AlterarDados' className="font-medium no-underline ml-2 text-right cursor-pointer text-green" style={{ color: '#4CBEA2' }}>
                                    Esqueceu a senha?
                                </a>
                            </div>
                            <Button label="Acessar"
                            className="w-full p-3 text-xl"
                            //onClick={() => router.push('/')}
                            onClick={handleLogin}
                            style={{ backgroundColor: '#4CBEA2', color: '#ffffff', border:'none'}}></Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
