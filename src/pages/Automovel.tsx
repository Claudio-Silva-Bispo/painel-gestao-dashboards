import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { FilterMatchMode } from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Toast } from 'primereact/toast';
import { Toolbar } from 'primereact/toolbar';

// Personalização
import 'primereact/resources/themes/saga-blue/theme.css'; // ou outro tema
import 'primereact/resources/primereact.min.css'; // CSS do PrimeReact
import 'primeicons/primeicons.css'; // Ícones


interface Relatorio {
    id: string;
    name: string;
    responsible: string;
    data: string;
    link: string;
}

export default function FiltroBasico() {
    const emptyRelatorio: Relatorio = {
        id: '',
        name: '',
        responsible: '',
        data: '',
        link: '',
    };

    const [relatorios, setRelatorios] = useState<Relatorio[]>([]);
    const [filtros, setFiltros] = useState({
        global: { value: '', matchMode: FilterMatchMode.CONTAINS },
        name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        responsible: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    });
    const [carregando, setCarregando] = useState(true);
    const [valorFiltroGlobal, setValorFiltroGlobal] = useState('');
    const [relatorioDialog, setRelatorioDialog] = useState(false);
    const [relatorio, setRelatorio] = useState<Relatorio>(emptyRelatorio);
    const [submitted, setSubmitted] = useState(false);
    const toast = useRef<Toast>(null);

    // Para abrir os relatórios sem acessar o link
    const [relatorioUrl, setRelatorioUrl] = useState<string | null>(null);

    useEffect(() => {
        fetchRelatorios();
    }, []);

    const fetchRelatorios = async () => {
        try {
            const response = await axios.get('/api/buscarRelatorios');
            setRelatorios(response.data);
            setCarregando(false);
        } catch (error) {
            console.error('Erro ao buscar relatórios', error);
        }
    };

    const aoMudarFiltroGlobal = (e: React.ChangeEvent<HTMLInputElement>) => {
        const valor = e.target.value;
        setFiltros({
            ...filtros,
            global: { ...filtros.global, value: valor },
        });
        setValorFiltroGlobal(valor);
    };

    const renderizarCabecalho = () => {
        return (
            <div className="flex justify-content-between">
                <InputText className='text-left w-1/3 pl-10 text-xl' value={valorFiltroGlobal} onChange={aoMudarFiltroGlobal} placeholder="Pesquisar..." />
                <Toolbar  left={() => (
                    <div className='flex gap-5'>
                        <Button
                        label="Novo Relatório"
                        icon="pi pi-plus"
                        onClick={abrirNovoRelatorio}
                        className='p-3'
                        style={{ backgroundColor: '#4CAF50', color: 'white' }}/>

                        <Button
                        label="Atualizar Base"
                        icon="pi pi-refresh"
                        onClick={fetchRelatorios}
                        className='p-3'
                        style={{ backgroundColor: '#e1c511', color: 'white' }} />
                    </div>
                )} />
            </div>
        );
    };

    const abrirNovoRelatorio = () => {
        setRelatorio(emptyRelatorio);
        setSubmitted(false);
        setRelatorioDialog(true);
    };

    const hideDialog = () => {
        setSubmitted(false);
        setRelatorioDialog(false);
    };

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>, name: keyof Relatorio) => {
        const val = (e.target && e.target.value) || '';
        setRelatorio((prevRelatorio) => ({
            ...prevRelatorio,
            [name]: val,
        }));
    };

    const salvarRelatorio = async () => {
        setSubmitted(true);
        const { id, ...dataToSend } = relatorio;

        if (dataToSend.name.trim() && dataToSend.responsible.trim() && dataToSend.data.trim() && dataToSend.link.trim()) {
            try {
                const response = await axios.post('/api/criarRelatorio', dataToSend);
                const newRelatorio = response.data;

                setRelatorios([...relatorios, newRelatorio]);
                toast.current?.show({
                    severity: 'success',
                    summary: 'Sucesso',
                    detail: 'Relatório criado com sucesso',
                    life: 3000,
                });

                hideDialog();
            } catch (error) {
                toast.current?.show({
                    severity: 'error',
                    summary: 'Erro',
                    detail: 'Falha ao salvar o relatório',
                    life: 3000,
                });
            }
        }
    };

    const atualizarRelatorio = async () => {
        setSubmitted(true);

        if (relatorio.name.trim() && relatorio.responsible.trim() && relatorio.data.trim() && relatorio.link.trim()) {
            try {
                const { id, ...dataToSend } = relatorio; // Extraímos o ID aqui
                const response = await axios.put('/api/atualizarRelatorio', { id, ...dataToSend });

                const updatedRelatorio = response.data;

                setRelatorios(relatorios.map(r => (r.id === updatedRelatorio.id ? updatedRelatorio : r)));
                toast.current?.show({
                    severity: 'success',
                    summary: 'Sucesso',
                    detail: 'Relatório atualizado com sucesso',
                    life: 3000,
                });
                hideDialog();
            } catch (error) {
                console.error('Erro ao atualizar relatório', error);
                toast.current?.show({
                    severity: 'error',
                    summary: 'Erro',
                    detail: 'Falha ao atualizar o relatório',
                    life: 3000,
                });
            }
        }
    };

    const excluirRelatorio = async (id: string) => {
        if (confirm("Tem certeza que deseja deletar este relatório?")) {
            try {
                await axios.delete('/api/excluirRelatorio', {
                    data: { id } // Enviando o ID no corpo
                });
                setRelatorios(relatorios.filter(r => r.id !== id));
                toast.current?.show({
                    severity: 'success',
                    summary: 'Sucesso',
                    detail: 'Relatório excluído com sucesso',
                    life: 3000,
                });
            } catch (error) {
                console.error('Erro ao excluir relatório:', error);
                toast.current?.show({
                    severity: 'error',
                    summary: 'Erro',
                    detail: 'Falha ao excluir o relatório',
                    life: 3000,
                });
            }
        }
    };

    /*
    const abrirRelatorio = (url: string) => {
        window.open(url, '_blank');
    };

    */

    const abrirRelatorio = async (id: string) => {
        try {
            const response = await axios.post('/api/buscarRelatorio', { id });
            const url = response.data.link; // Obtém o link da resposta
            setRelatorioUrl(url); // Atualiza o estado com o link do relatório
        } catch (error) {
            console.error('Erro ao buscar relatório:', error);
        }
    };

    const cabecalho = renderizarCabecalho();

    return (
        <div className="card">
            <Toast ref={toast} />
            <DataTable
                value={relatorios}
                paginator
                rows={10}
                filters={filtros}
                loading={carregando}
                globalFilterFields={['name', 'responsible']}
                header={cabecalho}
                emptyMessage="Nenhum relatório encontrado."

            >
                <Column field="name" header="Nome do Relatório" filter filterPlaceholder="Pesquisar por nome" />

                <Column field="responsible" header="Responsável" filter filterPlaceholder="Pesquisar por responsável" />

                <Column field="data" header="Data de atualização" body={(rowData) => new Date(rowData.data).toLocaleDateString()} />

                <Column field="link" header="Acessar painel" body={(rowData) => (
                    <Button
                    label="Abrir"
                    icon="pi pi-search"
                    onClick={() =>
                    abrirRelatorio(rowData.id)}
                    className='custom-button p-2 w-2/3'
                    style={{ backgroundColor: '#4CAF50', color: 'white' }}  />
                )} />

                <Column header="Atualizar informações" body={(rowData) => (
                    <Button
                    label="Editar"
                    icon="pi pi-pencil"
                    onClick={() => {
                        setRelatorio(rowData);
                        setRelatorioDialog(true);
                    }}
                    className='custom-button p-2 w-2/3'
                    style={{ backgroundColor: '#e1c511', color: 'white' }}/>
                )} />

                <Column header="Excluir Relatório" body={(rowData) => (
                    <Button
                    label="Excluir"
                    icon="pi pi-trash"
                    onClick={() => excluirRelatorio(rowData.id)}
                    severity="danger"
                    className='custom-button p-2 w-2/3'
                    style={{ backgroundColor: '#e11b11', color: 'white' }}/>
                )} />
            </DataTable>

            {/* Aqui é onde você insere o Iframe */}
                {relatorioUrl && (
                    <div style={{ marginTop: '20px' }}>
                        <h2>Relatório Exibido</h2>
                        <iframe
                            title="Relatório Power BI"
                            width="100%"
                            height="1200"
                            src={relatorioUrl}
                            frameBorder="0"
                        ></iframe>
                    </div>
                )}

            <Dialog visible={relatorioDialog} style={{ width: '450px' }} header="Detalhes do Relatório" modal onHide={hideDialog}>
                <div className="field">
                    <label htmlFor="name">Nome</label>
                    <InputText id="name" value={relatorio.name} onChange={(e) => onInputChange(e, 'name')} required className='p-2 border w-full'/>
                </div>

                <div className="field">
                    <label htmlFor="responsible">Responsável</label>
                    <InputText id="responsible" value={relatorio.responsible} onChange={(e) => onInputChange(e, 'responsible')} required className='p-2 border w-full'/>
                </div>

                <div className="field">
                    <label htmlFor="data">Data</label>
                    <InputText id="data" value={relatorio.data} onChange={(e) => onInputChange(e, 'data')} required className='p-2 border w-full'/>
                </div>

                <div className="field">
                    <label htmlFor="link">Link</label>
                    <InputText id="link" value={relatorio.link} onChange={(e) => onInputChange(e, 'link')} required className='p-2 border w-full'/>
                </div>

                <div className="field">
                    <Button label="Salvar" icon="pi pi-check" onClick={relatorio.id ? atualizarRelatorio : salvarRelatorio} className='custom-button p-2 w-2/6'
                    style={{ backgroundColor: '#4CAF50', color: 'white' }} />
                </div>
            </Dialog>
        </div>
    );
}
