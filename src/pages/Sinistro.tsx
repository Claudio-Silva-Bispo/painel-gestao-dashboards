import React, { useState, useEffect } from 'react';
import { FilterMatchMode } from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

interface Relatorio {
    id: number;
    nome: string;
    responsavel: string;
    ultimaAtualizacao: string;
    link: string;
}

export default function FiltroBasico() {
    const [relatorios, setRelatorios] = useState<Relatorio[]>([]);
    const [filtros, setFiltros] = useState({
        global: { value: '', matchMode: FilterMatchMode.CONTAINS },
        nome: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
        responsavel: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    });
    const [carregando, setCarregando] = useState(true);
    const [valorFiltroGlobal, setValorFiltroGlobal] = useState('');

    // Dados estáticos para os relatórios
    const relatoriosEstaticos: Relatorio[] = [
        {
            id: 1,
            nome: 'Relatório de Cotações',
            responsavel: 'Roseli',
            ultimaAtualizacao: '2023-09-01',
            link: 'https://www.microsoft.com/pt-br/power-platform/products/power-bi'
        },
        {
            id: 2,
            nome: 'Gestão Comercial',
            responsavel: 'Diego',
            ultimaAtualizacao: '2023-08-15',
            link: 'https://www.microsoft.com/pt-br/power-platform/products/power-bi'
        },
        {
            id: 3,
            nome: 'Cotações Fácil',
            responsavel: 'Adriana',
            ultimaAtualizacao: '2023-07-30',
            link: 'https://www.microsoft.com/pt-br/power-platform/products/power-bi'
        }
    ];

    useEffect(() => {
        setRelatorios(relatoriosEstaticos);
        setCarregando(false);
    }, []);

    const aoMudarFiltroGlobal = (e: React.ChangeEvent<HTMLInputElement>) => {
        const valor = e.target.value;
        let _filtros = { ...filtros };
        _filtros['global'].value = valor;
        setFiltros(_filtros);
        setValorFiltroGlobal(valor);
    };

    const renderizarCabecalho = () => {
        return (
            <div className="flex justify-content-end">
                <InputText value={valorFiltroGlobal} onChange={aoMudarFiltroGlobal} placeholder="Pesquisar..." />
            </div>
        );
    };

    const abrirRelatorio = (url: string) => {
        window.open(url, '_blank');
    };

    const cabecalho = renderizarCabecalho();

    return (
        <div className="card">
            <DataTable
                value={relatorios}
                paginator
                rows={10}
                filters={filtros}
                loading={carregando}
                globalFilterFields={['nome', 'responsavel']}
                header={cabecalho}
                emptyMessage="Nenhum relatório encontrado."
            >
                <Column field="nome" header="Nome do Relatório" filter filterPlaceholder="Pesquisar por nome" />
                <Column field="responsavel" header="Responsável" filter filterPlaceholder="Pesquisar por responsável" />
                <Column field="ultimaAtualizacao" header="Última Atualização" body={(rowData) => new Date(rowData.ultimaAtualizacao).toLocaleDateString()} />
                <Column field="link" header="Link de Acesso" body={(rowData) => (
                    <Button label="Abrir" onClick={() => abrirRelatorio(rowData.link)} />
                )} />
            </DataTable>
        </div>
    );
}
