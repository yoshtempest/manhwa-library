import { SqliteDatabase } from "@/core/db";
import UserModel from "@/models/user";
import { userRequest, UserLogin, userResponse } from "@/schemas/user";


/*
    Serviço responsável pelas operações do usuário.
    Realiza cadastro, autenticação e mapeamento de dados entre modelos e respostas.
*/
class UserService {
    private dbSession: SqliteDatabase;

    // Recebe uma sessão ativa do banco de dados para executar as operações.
    constructor(dbSession: SqliteDatabase) {
        this.dbSession = dbSession;
    }
    /*
        Verifica se o usuário já existe no banco de dados.
        Se já existir, lança um erro.
        Se não existir, adiciona e retorna os dados do usuário.
    */
    async add(request: userRequest): Promise<userResponse> {
        
        const userModel = UserService.mapRequestToModel(request);

        const onDB = await UserModel.getByEmail(this.dbSession, userModel.email);
        if (onDB) {
            throw new Error("User already exists");
        }
        const newUser = await userModel.add(this.dbSession);
        return UserService.mapModelToResponse(newUser);
        }

    /*
        Realiza o login do usuário.
        - Verifica se o usuário existe e se a senha está correta.
        - Se tudo estiver correto, retorna os dados do usuário.
        - Se não, retorna null.
    */
    async login(request: UserLogin): Promise<userResponse | null> {
        
        const onDB = await UserModel.getByEmail(this.dbSession, request.email);
        if (!onDB) {
            return null;
        }
        if (onDB.password !== request.password) {
            return null;
        }
        return UserService.mapModelToResponse(onDB);
    }
    /*
        Converte um userRequest em um UserModel.
        Define o usuário como ativo e define as datas de criação e atualização.
    */
    static mapRequestToModel(request: userRequest): UserModel {
        return new UserModel(
            0,
            request.username,
            request.email,
            request.password,
            true,
            new Date(),
            new Date()
        );
    }
    /*
        Converte um UserModel em um userResponse. Basicamente, converte um modelo em uma resposta.
        Formata as datas para string ISO.
    */
    static mapModelToResponse(model: UserModel): userResponse {
        return {
            id: model.id,
            username: model.username,
            email: model.email,
            active: model.active,
            created_at: model.createdAt.toISOString(),
            updated_at: model.updatedAt.toISOString(),
        };
    }
}


export default UserService;