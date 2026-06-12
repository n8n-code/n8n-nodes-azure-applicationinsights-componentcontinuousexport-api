import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AzureApplicationinsightsComponentcontinuousexportApi implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Azure Applicationinsights Componentcontinuousexport API',
                name: 'N8nDevAzureApplicationinsightsComponentcontinuousexportApi',
                icon: { light: 'file:./azure-applicationinsights-componentcontinuousexport-api.png', dark: 'file:./azure-applicationinsights-componentcontinuousexport-api.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Azure Application Insights Continuous Export client for component telemetry.',
                defaults: { name: 'Azure Applicationinsights Componentcontinuousexport API' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevAzureApplicationinsightsComponentcontinuousexportApiApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
                ],
        };
}
