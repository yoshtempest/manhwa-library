import { idGenerator } from "@/core/generator";


// Representa um usuário e fornece métodos para manipulação no banco de dados.
class UserModel {
  constructor(
    public id: string = idGenerator(),
    public username: string,
    public email: string,
    public password: string,
    public active: boolean,
    public created_at: Date,
    public updated_at: Date
  ) {}
    // Converte a instância do usuário em um objeto JSON.
    toJson(): any {
        return {
            id: this.id,
            username: this.username,
            email: this.email,
            password: this.password,
            active: this.active,
            created_at: this.created_at.toISOString(),
            updated_at: this.updated_at.toISOString(),
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
            new Date(json.created_at),
            new Date(json.updated_at)
        );
    }
}


export default UserModel;