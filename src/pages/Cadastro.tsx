/* eslint-disable @next/next/no-img-element */
'use client';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Toast } from 'primereact/toast';
import { Toolbar } from 'primereact/toolbar';
import { classNames } from 'primereact/utils';
import React, { useEffect, useRef, useState } from 'react';
import { Demo } from '@/types';

const Cadastro = () => {
    let emptyUser: Demo.User = {
        id: '',
        name: '',
        email: ''
    };

    const [users, setUsers] = useState(null);
    const [userDialog, setUserDialog] = useState(false);
    const [deleteUsersDialog, setDeleteUsersDialog] = useState(false);
    const [user, setUser] = useState<Demo.User>(emptyUser);
    const [selectedUsers, setSelectedUsers] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [globalFilter, setGlobalFilter] = useState('');
    const toast = useRef<Toast>(null);
    const dt = useRef<DataTable<any>>(null);

    useEffect(() => {
        // UserService.getUsers().then((data) => setUsers(data as any));
    }, []);

    const openNew = () => {
        setUser(emptyUser);
        setSubmitted(false);
        setUserDialog(true);
    };

    const hideDialog = () => {
        setSubmitted(false);
        setUserDialog(false);
    };

    const createId = () => {
        return Math.random().toString(36).substr(2, 9); // Gera um ID aleatório
    };

    const saveUser = () => {
        setSubmitted(true);

        if (user.name.trim()) {
            let _users = [...(users as any)];
            let _user = { ...user };
            if (user.id) {
                const index = findIndexByUserId(user.id);

                _users[index] = _user;
                toast.current?.show({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'User Updated',
                    life: 3000
                });
            } else {
                _user.id = createId();
                _users.push(_user);
                toast.current?.show({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'User Created',
                    life: 3000
                });
            }

            setUsers(_users as any);
            setUserDialog(false);
            setUser(emptyUser);
        }
    };

    const findIndexByUserId = (id: string) => {
        let index = -1;
        for (let i = 0; i < (users as any)?.length; i++) {
            if ((users as any)[i].id === id) {
                index = i;
                break;
            }
        }

        return index;
    };

    const confirmDeleteSelectedUsers = () => {
        setDeleteUsersDialog(true);
    };

    const deleteSelectedUsers = () => {
        let _users = (users as any)?.filter((val: any) => !(selectedUsers as any)?.includes(val));
        setUsers(_users);
        setDeleteUsersDialog(false);
        setSelectedUsers(null);
        toast.current?.show({
            severity: 'success',
            summary: 'Successful',
            detail: 'Users Deleted',
            life: 3000
        });
    };

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>, name: string) => {
        const val = (e.target && e.target.value) || '';
        let _user = { ...user };
        _user[`${name}`] = val;

        setUser(_user);
    };

    const leftToolbarTemplate = () => {
        return (
            <React.Fragment>
                <div className="my-2">
                    <Button label="Novo" icon="pi pi-plus" severity="success" className="mr-2" onClick={openNew} />
                    <Button label="Deletar" icon="pi pi-trash" severity="danger" onClick={confirmDeleteSelectedUsers} disabled={!selectedUsers || !(selectedUsers as any).length} />
                </div>
            </React.Fragment>
        );
    };

    const userDialogFooter = (
        <>
            <Button label="Cancelar" icon="pi pi-times" text onClick={hideDialog} />
            <Button label="Salvar" icon="pi pi-check" text onClick={saveUser} />
        </>
    );

    return (
        <div className="grid border border-green-700 min-h-svh">
            <div className="col-12">
                <div className="card">
                    <Toast ref={toast} />
                    <Toolbar className="mb-4" left={leftToolbarTemplate}></Toolbar>

                    <DataTable
                        ref={dt}
                        value={users}
                        selection={selectedUsers}
                        onSelectionChange={(e) => setSelectedUsers(e.value as any)}
                        dataKey="id"
                        paginator
                        rows={10}
                        rowsPerPageOptions={[5, 10, 25]}
                        className="datatable-responsive"
                        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                        currentPageReportTemplate="Showing {first} to {last} of {totalRecords} users"
                        globalFilter={globalFilter}
                        emptyMessage="No users found."
                        responsiveLayout="scroll"
                    >
                        {/* Colunas podem ser adicionadas aqui conforme necessário */}
                    </DataTable>

                    <Dialog visible={userDialog} style={{ width: '450px' }} header="User Details" modal className="p-fluid" footer={userDialogFooter} onHide={hideDialog}>
                        <div className="field">
                            <label htmlFor="name">Name</label>
                            <InputText
                                id="name"
                                value={user.name}
                                onChange={(e) => onInputChange(e, 'name')}
                                required
                                autoFocus
                                className={classNames({
                                    'p-invalid': submitted && !user.name
                                })}
                            />
                            {submitted && !user.name && <small className="p-invalid">Name is required.</small>}
                        </div>
                        <div className="field">
                            <label htmlFor="email">Email</label>
                            <InputText
                                id="email"
                                value={user.email}
                                onChange={(e) => onInputChange(e, 'email')}
                                required
                                className={classNames({
                                    'p-invalid': submitted && !user.email
                                })}
                            />
                            {submitted && !user.email && <small className="p-invalid">Email is required.</small>}
                        </div>
                        {/* Adicione outros campos conforme necessário */}
                    </Dialog>
                </div>
            </div>
        </div>
    );
};

export default Cadastro;
