/**
 * GenreRequest Schema Atributes:
 * - name: string
 */
export interface GenreRequest {
    name: string;
}

/**
 * GenreResponse Schema Atributes:
 * - id: string
 * - name: string
 * - created_at: string
 * - updated_at: string
 */
export interface GenreResponse {
    id: string;
    name: string;
    created_at: string;
    updated_at: string;
}