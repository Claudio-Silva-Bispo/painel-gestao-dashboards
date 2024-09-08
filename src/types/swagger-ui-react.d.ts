declare module 'swagger-ui-react' {
    import { FC } from 'react';

    interface SwaggerUIProps {
        url: string;
        // Adicione mais propriedades conforme necessário
    }

    const SwaggerUI: FC<SwaggerUIProps>;
    export default SwaggerUI;
}
