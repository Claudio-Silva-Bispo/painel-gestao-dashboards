import React, { useState } from 'react';

const PowerBIEmbed = () => {
    const [selectedReport, setSelectedReport] = useState('');

    const reports = {
        report1: 'https://app.powerbi.com/view?r=eyJrIjoiY2U0Zjc5N2QtM2FkOS00YjUzLTllZGEtMTgwMDQzNzE1MTA1IiwidCI6IjAxNTIyMjE5LTI4NWEtNGYyNy1hNGExLTQ1NDIxZTE3NzU3NiJ9',
        report2: 'https://app.powerbi.com/view?r=eyJrIjoiY2U0Zjc5N2QtM2FkOS00YjUzLTllZGEtMTgwMDQzNzE1MTA1IiwidCI6IjAxNTIyMjE5LTI4NWEtNGYyNy1hNGExLTQ1NDIxZTE3NzU3NiJ9',
        // Adicione mais relatórios conforme necessário
    };

    const handleReportChange = (reportKey) => {
        setSelectedReport(reports[reportKey]);
    };

    return (
        <div>
            <h1>Escolha um Relatório</h1>
            <div>
                <button onClick={() => handleReportChange('report1')}>Relatório 1</button>
                <button onClick={() => handleReportChange('report2')}>Relatório 2</button>
                {/* Adicione mais botões conforme necessário */}
            </div>

            {selectedReport && (
                <iframe
                    title="Relatório Power BI"
                    width="100%"
                    height="600"
                    src={selectedReport}
                    frameBorder="0"
                    allowFullScreen="true"
                ></iframe>
            )}
        </div>
    );
};

export default PowerBIEmbed;
