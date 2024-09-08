import dynamic from 'next/dynamic';

// Instalar npm install swagger-ui-react
const SwaggerUI = dynamic(() => import('swagger-ui-react'), { ssr: false });

export default function SwaggerPage() {
    return (
        <SwaggerUI url="/api/docs" />
    );
}
