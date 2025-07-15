export default class RequestHandler {
    
    static async get(url: string, token?: string): Promise<any> {
        const headers: HeadersInit = {};
        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }
        const response = await fetch(url, { method: 'GET', headers });
        if (!response.ok) {
            throw new Error(`GET request failed with status ${response.status}`);
        }
        return response.json();
    }

    static async post(url: string, data: any, token?: string): Promise<any> {
        const headers: HeadersInit = {
            'Content-Type': 'application/json'
        };
        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }
        const response = await fetch(url, {
            method: 'POST',
            headers,
            body: JSON.stringify(data)
        });
        if (!response.ok) {
            throw new Error(`POST request failed with status ${response.status}`);
        }
        return response.json();
    }

    static async put(url: string, data: any, token?: string): Promise<any> {
        const headers: HeadersInit = {
            'Content-Type': 'application/json'
        };
        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }
        const response = await fetch(url, {
            method: 'PUT',
            headers,
            body: JSON.stringify(data)
        });
        if (!response.ok) {
            throw new Error(`PUT request failed with status ${response.status}`);
        }
        return response.json();
    }

    static async delete(url: string, token?: string): Promise<any> {
        const headers: HeadersInit = {};
        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }
        const response = await fetch(url, { method: 'DELETE', headers });
        if (!response.ok) {
            throw new Error(`DELETE request failed with status ${response.status}`);
        }
        return response.json();
    }
}

