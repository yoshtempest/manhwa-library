export default class StorageHandler{
    static async getItemLocalStorage(key: string): Promise<any> {
        try {
            const value = localStorage.getItem(key);
            return value ? JSON.parse(value) : null;
        } catch (error) {
            console.error(`Error getting item from storage: ${error}`);
            throw error;
        }
    }

    static async setItemLocalStorage(key: string, value: any): Promise<void> {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error(`Error setting item in storage: ${error}`);
            throw error;
        }
    }

    static async removeItemLocalStorage(key: string): Promise<void> {
        try {
            localStorage.removeItem(key);
        } catch (error) {
            console.error(`Error removing item from storage: ${error}`);
            throw error;
        }
    }

    static async clearLocalStorage(): Promise<void> {
        try {
            localStorage.clear();
        } catch (error) {
            console.error(`Error clearing local storage: ${error}`);
            throw error;
        }
    }

    static async getItemSessionStorage(key: string): Promise<any> {
        try {
            const value = sessionStorage.getItem(key);
            return value ? JSON.parse(value) : null;
        } catch (error) {
            console.error(`Error getting item from session storage: ${error}`);
            throw error;
        }
    }

    static async setItemSessionStorage(key: string, value: any): Promise<void> {
        try {
            sessionStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error(`Error setting item in session storage: ${error}`);
            throw error;
        } 
    }

    static async removeItemSessionStorage(key: string): Promise<void> {
        try {
            sessionStorage.removeItem(key);
        } catch (error) {
            console.error(`Error removing item from session storage: ${error}`);
            throw error;
        }
    }

    static async clearSessionStorage(): Promise<void> {
        try {
            sessionStorage.clear();
        } catch (error) {
            console.error(`Error clearing session storage: ${error}`);
            throw error;
        }
    }

    static async getItemCookies(key: string): Promise<string | null> {
        try {
            const cookies = document.cookie.split('; ');
            const cookie = cookies.find(row => row.startsWith(`${key}=`));
            return cookie ? cookie.split('=')[1] : null;
        } catch (error) {
            console.error(`Error getting cookie: ${error}`);
            throw error;
        }
    }

    static async setItemCookies(key: string, value: string, days?: number): Promise<void> {
        try {
            let expires = '';
            if (days) {
                const date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                expires = `; expires=${date.toUTCString()}`;
            }
            document.cookie = `${key}=${value}${expires}; path=/`;
        } catch (error) {
            console.error(`Error setting cookie: ${error}`);
            throw error;
        }
    }

    static async removeItemCookies(key: string): Promise<void> {
        try {
            document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        } catch (error) {
            console.error(`Error removing cookie: ${error}`);
            throw error;
        }
    }

    static async clearCookies(): Promise<void> {
        try {
            const cookies = document.cookie.split('; ');
            for (const cookie of cookies) {
                const key = cookie.split('=')[0];
                document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
            }
        } catch (error) {
            console.error(`Error clearing cookies: ${error}`);
            throw error;
        }
    }
}