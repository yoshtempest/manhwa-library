import { TokenResponse, UserLogin, UserRequest, UserResponse } from "@/backend/schemas/user";
import RequestHandler from "../core/requests";

export default class UserService{

    private static baseUrl = '/api/user';

    static async add(request: UserRequest): Promise<UserResponse> {
        const url = `${this.baseUrl}/register`;
        const response = await RequestHandler.post(url, request);
        return response;
    }

    static async login(request: UserLogin): Promise<TokenResponse> {
        const url = `${this.baseUrl}/login`;
        const response = await RequestHandler.post(url, request);
        return response;
    }
}