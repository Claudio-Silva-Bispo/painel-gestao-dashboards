import React from 'react';
import { Button } from 'primereact/button';

export default function AdvancedDemo() {
    return (
        <div className="flex justify-center mt-10">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-sm">
                <img
                    alt="Card"
                    src="https://primefaces.org/cdn/primereact/images/usercard.png"
                    className="w-full h-48 object-cover"
                />
                <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">Advanced Card</h3>
                    <p className="text-gray-700 mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
                        numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                    </p>
                    <Button label="Ir para Relatórios" icon="pi pi-arrow-right" className="w-full" />
                </div>
            </div>
        </div>
    );
}
