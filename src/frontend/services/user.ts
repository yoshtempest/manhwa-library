import RequestHandler from "@/frontend/core/requests";
import StorageHandler from "@/frontend/core/storage";
import { TokenResponse, UserLogin, UserRequest, UserResponse } from "@/schemas/user";

export default class UserService{

    private static baseUrl = '/api/user';

    static async add(request: UserRequest): Promise<UserResponse> {
        try{
            const url = `${this.baseUrl}/register`;
            const response = await RequestHandler.post(url, request);
            return response;
        }
        catch (error) {
            console.error("Error on UserService add:", error);
            throw error; // Re-throw the error for further handling if needed
        }

    }

    static async login(request: UserLogin): Promise<UserResponse> {
        try{
            const url = `${this.baseUrl}/login`;
            const response: TokenResponse = await RequestHandler.post(url, request);
            StorageHandler.setItemLocalStorage('token', response.token);
            return response.user;
        }
        catch (error) {
            console.error("Error on UserService login:", error);
            throw error; // Re-throw the error for further handling if needed
        }
    }
}