import { environment } from '../../../environments/environment';

export const API_URLS = {
    'AUTHENTICATION': {
        'LOGIN': environment.backendApiBaseUrl + 'authentication/{userMailId}'
    },
    'AUCTION': {
        'ALL': environment.backendApiBaseUrl + 'auction/salesman/{userMailId}/_all'
    }
}