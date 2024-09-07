'use client'
import Link from 'next/link';
import Card from '../components/Card'
import { Button } from 'primereact/button';

export default function Home() {

    return (
        <div className="grid">
            <div className="col-12">
                <div className="card">
                    <h5>Relatórios disponíveis</h5>
                    <div className='flex justify-center gap-10'>

                        <div className="flex justify-center mt-10">
                            <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-sm">
                                <img
                                    alt="Card"
                                    src="https://primefaces.org/cdn/primereact/images/usercard.png"
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="text-xl font-semibold mb-2">Automóvel</h3>
                                    <p className="text-gray-700 mb-4">
                                        Nesta workspace, você encontrará relatórios direcionados para estrutura do Automóvel, como Cotações da fácil, Inove, entre outros.
                                    </p>
                                    <Link href="/Automovel">
                                    <Button label="Ir para lista de Relatórios" icon="pi pi-arrow-right" className="w-full"></Button></Link>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center mt-10">
                            <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-sm">
                                <img
                                    alt="Card"
                                    src="https://primefaces.org/cdn/primereact/images/usercard.png"
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="text-xl font-semibold mb-2">Sinistro</h3>
                                    <p className="text-gray-700 mb-4">
                                        Nesta workspace, você encontrará relatórios direcionados para estrutura do Sinistro, como relatório institucional do sinistro, relatórios criados pela área.
                                    </p>
                                    <Link href="/Sinistro">
                                    <Button label="Ir para lista de Relatórios" icon="pi pi-arrow-right" className="w-full" />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center mt-10">
                            <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-sm">
                                <img
                                    alt="Card"
                                    src="https://primefaces.org/cdn/primereact/images/usercard.png"
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="text-xl font-semibold mb-2">Gestão Comercial</h3>
                                    <p className="text-gray-700 mb-4">
                                        Nesta workspace, você encontrará relatórios direcionados para estrutura do Sinistro, como relatório institucional do sinistro, relatórios criados pela área.
                                    </p>
                                    <Link href="/Comercial">
                                    <Button label="Ir para lista de Relatórios" icon="pi pi-arrow-right" className="w-full" />
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
  }
