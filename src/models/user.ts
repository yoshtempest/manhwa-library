import { SqliteDatabase } from "@/core/db";


// Representa um usuário e fornece métodos para manipulação no banco de dados.
class UserModel {
  constructor(
    public id: number = 0,
    public username: string,
    public email: string,
    public password: string,
    public active: boolean,
    public createdAt: Date,
    public updatedAt: Date
  ) {
    // Inicializa os atributos do usuário.
    this.id = id;
    this.username = username;
    this.email = email;
    this.password = password;
    this.active = active;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
    // Método para adicionar um novo usuário ao banco de dados.
    // Retorna uma instância de UserModel com o ID gerado.
    async add(dbSession: SqliteDatabase): Promise<UserModel> {

        const result = await dbSession.run(
            `INSERT INTO users (username, email, password, active, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?)`,
            [this.username, this.email, this.password, this.active, this.createdAt.toISOString(), this.updatedAt.toISOString()]
        );
        const userId = result.lastID;
        if (typeof userId !== "number") {
            throw new Error("Failed to retrieve last inserted user ID.");
        }
        return new UserModel(
            userId,
            this.username,
            this.email,
            this.password,
            this.active,
            this.createdAt,
            this.updatedAt
        );
    }
    // Atualiza os dados do usuário no banco de dados.
    async update(dbSession: SqliteDatabase): Promise<void> {
        await dbSession.run(
            `UPDATE users SET username = ?, email = ?, password = ?, active = ?, updated_at = ? WHERE id = ?`,
            [this.username, this.email, this.password, this.active, this.updatedAt.toISOString(), this.id]
        );
    }
    // Remove o usuário do banco de dados.
    async delete(dbSession: SqliteDatabase): Promise<void> {
        await dbSession.run(
            `DELETE FROM users WHERE id = ?`,
            [this.id]
        );
    }
    // Busca um usuário pelo ID.
    // Retorna uma instância de UserModel ou null se não encontrado.
    static async getById(dbSession: SqliteDatabase, id: string): Promise<UserModel | null> {
        const row = await dbSession.get(
            `SELECT * FROM users WHERE id = ?`,
            [id]
        );
        if (!row) {
            return null;
        }
        return UserModel.mapRowToModel(row);
    }
    // Retorna todos os usuários cadastrados no banco de dados.
    static async getAll(dbSession: SqliteDatabase): Promise<UserModel[]> {
        const rows = await dbSession.all(`SELECT * FROM users`);
        return rows.map((row: any) => {
            return this.mapRowToModel(row);
        });
    }
    // A única diferença entre getByEmail e getById é o critério de busca.
    static async getByEmail(dbSession: SqliteDatabase, email: string): Promise<UserModel | null> {
        const row = await dbSession.get(
            `SELECT * FROM users WHERE email = ?`,
            [email]
        );
        if (!row) {
            return null;
        }
        return this.mapRowToModel(row);
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
    // Converte a instância do usuário em um objeto JSON.
    toJson(): any {
        return {
        id: this.id,
        username: this.username,
        email: this.email,
        password: this.password,
        active: this.active,
        createdAt: this.createdAt.toISOString(),
        updatedAt: this.updatedAt.toISOString(),
        };
    }
    // Cria uma instância de UserModel a partir de um objeto JSON.
    static fromJson(json: any): UserModel {
    return new UserModel(
        json.id,
        json.username,
        json.email,
        json.password,
        json.active,
        new Date(json.createdAt),
        new Date(json.updatedAt)
    );
  }
}


export default UserModel;