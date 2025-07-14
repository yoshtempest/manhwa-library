import { SqliteDatabase } from "@/backend/core/db";
import { userIdGenerator } from "@/backend/core/generator";
import { UserRequest, UserResponse } from "@/backend/schemas/user";
import UserModel from "../models/user";

export default class UserRepository {
    constructor(
        private dbSession: SqliteDatabase
    ) {}
    /** 
        - Método para adicionar um novo usuário ao banco de dados.
        - Retorna uma instância de UserModel com o ID gerado.
    */
    async add(model: UserModel): Promise<UserModel> {
        const id = userIdGenerator();
        await this.dbSession.run(
            `INSERT INTO users
            (
                id,
                username,
                email,
                password,
                active,
                created_at,
                updated_at
            )
            VALUES (?, ?, ?, ?, ?, ?, ?)`,
            [
                id,
                model.username,
                model.email,
                model.password,
                model.active,
                model.created_at.toISOString(),
                model.updated_at.toISOString()
            ]
        );
        return new UserModel(
            id,
            model.username,
            model.email,
            model.password,
            model.active,
            model.created_at,
            model.updated_at
        );
    }
    /** atualiza os dados do usuário no banco de dados. */
    async update(model: UserModel): Promise<void> {
        await this.dbSession.run(
            `
                UPDATE users SET username = ?,
                email = ?,
                password = ?,
                active = ?,
                updated_at = ? WHERE id = ?
            `,
            [
                model.username,
                model.email,
                model.password,
                model.active,
                model.updated_at.toISOString(),
                model.id
            ]
        );
    }
    /** Remove o usuário do banco de dados. */
    async delete(id: string): Promise<void> {
        await this.dbSession.run(
            `DELETE FROM users WHERE id = ?`,
            [id]
        );
    }
    /**
        -  Busca um usuário pelo ID.
        - Retorna uma instância de UserModel ou null se não encontrado. 
    */
    async getById(id: string): Promise<UserModel | null> {
        const row = await this.dbSession.get(
            `SELECT * FROM users WHERE id = ?`,
            [id]
        );
        if (!row) {
            return null;
        }
        return UserRepository.mapRowToModel(row);
    }
    /** Retorna todos os usuários cadastrados no banco de dados. */
    async getAll(): Promise<UserModel[]> {
        const rows = await this.dbSession.all(`SELECT * FROM users`);
        return rows.map((row: any) => UserRepository.mapRowToModel(row));
    }
    // A única diferença entre getByEmail e getById é o critério de busca.
    async getByEmail(email: string): Promise<UserModel | null> {
        const row = await this.dbSession.get(
            `SELECT * FROM users WHERE email = ?`,
            [email]
        );
        if (!row) {
            return null;
        }
        return UserRepository.mapRowToModel(row);
    }
    /**
        - Converte um userRequest em um UserModel.
        - Define o usuário como ativo e define as datas de criação e atualização.
    */
    static mapRequestToModel(request: UserRequest): UserModel {
        return new UserModel(
            "", // Gera um novo ID para o usuário
            request.username,
            request.email,
            request.password,
            true,
            new Date(),
            new Date() 
        );
    }
    /**
        - Converte um UserModel em um userResponse. Basicamente, converte um modelo em uma resposta.
        - Formata as datas para string ISO.
    */
    static mapModelToResponse(model: UserModel): UserResponse {
        return {
            id: model.id,
            username: model.username,
            email: model.email,
            active: model.active,
            created_at: model.created_at.toISOString(),
            updated_at: model.updated_at.toISOString(),
        };
    }
    /**
       Converte uma linha do banco de dados em uma instância de UserModel.
       @param row - Objeto representando uma linha do banco de dados
       @returns Nova instância de UserModel com os dados mapeados
       Método estático e privado para:
       - Mapear campos da linha para UserModel;
       - Converter datas para objetos Date;
       - E para centralizar a lógica de conversão
     */
    static mapRowToModel(row: any): UserModel {
        return new UserModel(
            row.id,
            row.username,
            row.email,
            row.password,
            row.active,
            new Date(row.created_at),
            new Date(row.updated_at)
        );
    }
}