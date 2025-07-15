/**
 * UserRequest Schema Attributes:
 * - username: string
 * - email: string
 * - password: string
*/
export interface UserRequest {
    username: string;
    email: string;
    password: string;
}

/**
 * UserLogin Schema Attributes:
 * - email: string
 * - password: string
*/
export interface UserLogin {
    email: string;
    password: string;
}

/**
 * UserResponse Schema Attributes:
 * - id: string
 * - username: string
 * - email: string
 * - active: boolean
 * - created_at: string
 * - updated_at: string
*/
export interface UserResponse {
    id: string;
    username: string;
    email: string;
    active: boolean;
    created_at: string;
    updated_at: string;
}

/**
 * TokenData Schema Attributes:
 * - id: string
*/
export interface TokenData {
    id: string
}

/**
 * TokenResponse Schema Attributes:
 * - token: string
 * - user: UserResponse
*/
export interface TokenResponse {
    token: string;
    user: UserResponse;
}