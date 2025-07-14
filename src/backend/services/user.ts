import { SqliteDatabase } from "@/backend/core/db";
import SecurityHandler from "@/backend/core/security";
import UserRepository from "@/backend/db/repositories/user";
import { UserRequest, UserLogin, UserResponse } from "@/backend/schemas/user";


/*
    Serviço responsável pelas operações do usuário.
    Realiza cadastro, autenticação e mapeamento de dados entre modelos e respostas.
*/
class UserService {
    private userRepository: UserRepository;

    // Recebe uma sessão ativa do banco de dados para executar as operações.
    constructor(dbSession: SqliteDatabase) {
        this.userRepository = new UserRepository(dbSession);
    }
    /**
     * Verifica se o usuário já existe no banco de dados.
     * Se já existir, lança um erro.
     * Se não existir, adiciona e retorna os dados do usuário.
     * @param request - Dados do usuário a serem adicionados.
     * @returns Dados do usuário adicionado.
    */
    async add(request: UserRequest): Promise<UserResponse> {
        
        const userModel = UserRepository.mapRequestToModel(request);

        userModel.password = await SecurityHandler.hashPassword(userModel.password);

        const onDB = await this.userRepository.getByEmail(userModel.email);
        if (onDB) {
            throw new Error("User already exists");
        }
        const newUser = await this.userRepository.add(userModel);
        
        return UserRepository.mapModelToResponse(newUser);
        }

    /*
        Realiza o login do usuário.
        - Verifica se o usuário existe e se a senha está correta.
        - Se tudo estiver correto, retorna os dados do usuário.
        - Se não, retorna null.
    */
    async login(request: UserLogin): Promise<UserResponse | null> {
        
        const onDB = await this.userRepository.getByEmail(request.email);
        if (!onDB) {
            return null;
        }
        if (! (await SecurityHandler.verifyPassword(request.password, onDB.password))) {
            return null;
        }
        return UserRepository.mapModelToResponse(onDB);
    }

    async getUserById(id: string): Promise<UserResponse | null> {
        const user = await this.userRepository.getById(id);
        if (!user) {
            return null;
        }
        return UserRepository.mapModelToResponse(user);
    }
}


export default UserService;