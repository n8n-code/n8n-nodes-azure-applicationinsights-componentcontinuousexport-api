import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AzureApplicationinsightsComponentcontinuousexportApiApi implements ICredentialType {
        name = 'N8nDevAzureApplicationinsightsComponentcontinuousexportApiApi';

        displayName = 'Azure Applicationinsights Componentcontinuousexport API';

        icon: Icon = { light: 'file:../nodes/AzureApplicationinsightsComponentcontinuousexportApi/azure-applicationinsights-componentcontinuousexport-api.png', dark: 'file:../nodes/AzureApplicationinsightsComponentcontinuousexportApi/azure-applicationinsights-componentcontinuousexport-api.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '',
                        required: true,
                        placeholder: 'https://api.example.com',
                        description: 'The base URL of your Azure Applicationinsights Componentcontinuousexport API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
