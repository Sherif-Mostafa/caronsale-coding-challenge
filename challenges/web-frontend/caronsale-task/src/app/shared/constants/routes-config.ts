import { environment } from '../../../environments/environment';

export const API_URLS = {
    'AUTHENTICATION':{
        'LOGIN': environment.backendApiBaseUrl + 'authentication/{userMailId}'
    }
}