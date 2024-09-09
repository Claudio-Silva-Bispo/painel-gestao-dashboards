/* eslint-disable @next/next/no-img-element */
'use client';

import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Toast } from 'primereact/toast';
import { Toolbar } from 'primereact/toolbar';
import { classNames } from 'primereact/utils';
import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import { Column } from 'primereact/column';

const Cadastro = () => {
    const emptyUser = {
        id: '',
        name: '',
        email: '',
        password: ''
    };

    const [users, setUsers] = useState<any[]>([]);
    const [userDialog, setUserDialog] = useState(false);
    const [user, setUser] = useState<any>(emptyUser);
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const toast = useRef<Toast>(null);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        setLoading(true);
        try {
            const response = await axios.get('https://painel-gestao-dashboards.vercel.app/Cadastro/api/buscarUsuarios');
            setUsers(response.data);
        } catch (error) {
            console.error('Erro ao buscar usuários:', error);
        }
        setLoading(false);
    };

    const openNew = () => {
        setUser(emptyUser);
        setSubmitted(false);
        setUserDialog(true);
    };

    const hideDialog = () => {
        setSubmitted(false);
        setUserDialog(false);
    };

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>, name: string) => {
        const val = (e.target && e.target.value) || '';
        let _user = { ...user };
        _user[`${name}`] = val;

        setUser(_user);
    };

    const saveUser = async () => {
        setSubmitted(true);

        console.log(user);

        // Enviar dados para o banco sem o id
        const { id, ...dataToSend} = user;

        console.log(dataToSend);

        if (dataToSend.name.trim() && dataToSend.email.trim() && dataToSend.password.trim()) {
            try {
                const response = await axios.post('https://painel-gestao-dashboards.vercel.app/Cadastro/api/criarUsuario', dataToSend);
                const newUser = response.data;

                setUsers([...users, newUser]);
                toast.current?.show({
                    severity: 'success',
                    summary: 'Sucesso',
                    detail: 'Usuário criado com sucesso',
                    life: 3000
                });

                setUserDialog(false);
                setUser(emptyUser);
            } catch (error) {
                toast.current?.show({
                    severity: 'error',
                    summary: 'Erro',
                    detail: 'Falha ao salvar o usuário',
                    life: 3000
                });
            }
        }
    };

    const updateUser = async () => {
        setSubmitted(true);

        // Verifique se os campos obrigatórios estão preenchidos
        if (user.name.trim() && user.email.trim() && user.password.trim()) {
            try {
                // Enviar dados para a API com o ID
                const { id, ...dataToSend } = user; // Extraímos o ID e enviamos o restante dos dados
                const response = await axios.put('https://painel-gestao-dashboards.vercel.app/Cadastro/api/atualizarUsuario', { id, ...dataToSend });

                const updatedUser = response.data;

                // Atualiza a lista de usuários
                setUsers(users.map(u => (u.id === updatedUser.id ? updatedUser : u)));

                // Mensagem de sucesso
                toast.current?.show({
                    severity: 'success',
                    summary: 'Sucesso',
                    detail: 'Usuário atualizado com sucesso',
                    life: 3000
                });

                // Fechar o diálogo e resetar o usuário
                setUserDialog(false);
                setUser(emptyUser);
            } catch (error) {
                console.error('Erro ao atualizar usuário:', error);
                toast.current?.show({
                    severity: 'error',
                    summary: 'Erro',
                    detail: 'Falha ao atualizar o usuário',
                    life: 3000
                });
            }
        }
    };

    const deleteUser = async (userId: string) => {
        console.log("ID do usuário a ser excluído:", userId); // Log para verificar o ID
        if (confirm("Tem certeza que deseja deletar este usuário?")) {
            try {
                const response = await axios.delete('https://painel-gestao-dashboards.vercel.app/Cadastro/api/excluirUsuario', {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    data: { id: userId } // Enviando o ID no corpo da requisição
                });
                // Atualiza a lista de usuários após a exclusão
                setUsers(users.filter(user => user._id !== userId));
                toast.current?.show({
                    severity: 'success',
                    summary: 'Sucesso',
                    detail: 'Usuário deletado com sucesso',
                    life: 3000
                });
            } catch (error) {
                console.error('Erro ao deletar usuário:', error); // Log do erro
                toast.current?.show({
                    severity: 'error',
                    summary: 'Erro',
                    detail: 'Falha ao deletar o usuário',
                    life: 3000
                });
            }
        }
    };

    const userDialogFooter = (
        <>
            <Button label="Cancelar" icon="pi pi-times" text onClick={hideDialog} />
            <Button label="Salvar" icon="pi pi-check" text onClick={user.id ? updateUser : saveUser} />
        </>
    );

    return (
        <div className="grid border border-green-700 min-h-svh">
            <div className="col-12">
                <div className="card">
                    <Toast ref={toast} />
                    <Toolbar className="mb-4 w-full" left={() => (
                        <React.Fragment>
                            <div className="my-2 min-w-full flex">

                                <Button
                                label="Novo"
                                icon="pi pi-plus"
                                severity="success"
                                className="mr-2 p-3 w-2/3 text-xl"
                                onClick={openNew}
                                style={{ backgroundColor: '#4CAF50', color: 'white' }}/>

                                <Button
                                label="Atualizar Base"
                                icon="pi pi-refresh"
                                severity="info"
                                className=" p-3 w-96 text-xl"
                                onClick={fetchUsers}
                                style={{ backgroundColor: '#e1c511', color: 'white' }} />


                            </div>
                            {/*<Column body={(rowData) => (
                                    <Button label="Deletar" icon="pi pi-trash" className="p-button-danger" onClick={() => deleteUser(rowData._id)} />
                                )} />*/}
                        </React.Fragment>
                    )}></Toolbar>

                    <DataTable
                        value={users}
                        paginator
                        rows={10}
                        className="datatable-responsive"
                        emptyMessage="Nenhum usuário encontrado."
                        loading={loading}
                    >
                        <Column field="name" header="Nome" />
                        <Column field="email" header="Email" />
                        <Column body={(rowData) => (
                            <Button label="Editar" icon="pi pi-pencil" onClick={() => {
                                setUser(rowData);
                                setUserDialog(true);
                            }} />
                        )} />
                        <Column body={(rowData) => (
                            <Button label="Deletar" icon="pi pi-trash" className="p-button-danger" onClick={() => deleteUser(rowData.id)} />
                        )} />
                    </DataTable>

                    <Dialog visible={userDialog} style={{ width: '450px' }} header="Detalhes do Usuário" modal className="p-fluid" footer={userDialogFooter} onHide={hideDialog}>
                        <div className="field">
                            <label htmlFor="name">Nome</label>
                            <InputText
                                id="name"
                                value={user.name}
                                onChange={(e) => onInputChange(e, 'name')}
                                required
                                autoFocus
                                className={classNames({ 'p-invalid': submitted && !user.name })}
                            />
                            {submitted && !user.name && <small className="p-invalid">Nome é obrigatório.</small>}
                        </div>

                        <div className="field">
                            <label htmlFor="email">Email</label>
                            <InputText
                                id="email"
                                value={user.email}
                                onChange={(e) => onInputChange(e, 'email')}
                                required
                                className={classNames({ 'p-invalid': submitted && !user.email })}
                            />
                            {submitted && !user.email && <small className="p-invalid">Email é obrigatório.</small>}
                        </div>

                        <div className="field">
                            <label htmlFor="password">Senha</label>
                            <InputText
                                id="password"
                                type="password"
                                value={user.password}
                                onChange={(e) => onInputChange(e, 'password')}
                                required
                                className={classNames({ 'p-invalid': submitted && !user.password })}
                            />
                            {submitted && !user.password && <small className="p-invalid">Senha é obrigatória.</small>}
                        </div>
                    </Dialog>
                </div>
            </div>
        </div>
    );
};

export default Cadastro;
