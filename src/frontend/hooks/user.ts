import UserService from "@/frontend/services/user";
import { UserResponse } from "@/schemas/user";

export function useLogin() {
    const login = async (email: string, password: string): Promise<UserResponse> => {
        const response = await UserService.login({ email, password });
        return response;
    };

    return login;
}

export function useRegister() {
    const register = async (username: string, email: string, password: string): Promise<UserResponse> => {
        const response = await UserService.add({ username, email, password });
        return response;
    };

    return register;
}