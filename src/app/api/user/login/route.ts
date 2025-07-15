import db from "@/backend/core/db";
import UserService from "@/backend/services/user";
import { UserLogin } from "@/schemas/user";

/**
  Função responsável por autenticar um usuário.
  
  - Recebe os dados de login via request.
  - Cria uma sessão de banco de dados.
  - Instancia o serviço de usuário.
  - Tenta autenticar o usuário.
  - Retorna erro 401 se as credenciais forem inválidas.
  - Retorna os dados do usuário autenticado em caso de sucesso.
*/
export async function POST(request: Request): Promise<Response> {
    try {
        /** Recebe e valida os dados de login enviados pelo cliente  */
        const login: UserLogin = await request.json();

        /** Cria uma nova sessão com o banco de dados */
        const session = await db.getSession();

        /** Instancia o serviço de usuário, passando a sessão */
        const service = new UserService(session);

        /**  Tenta autenticar o usuário com as credenciais fornecidas */
        const response = await service.login(login);

        // Se não encontrar usuário ou a senha for inválida, retorna o erro 401
        // Retorna os dados do usuário autenticado
        return new Response(JSON.stringify(response), {
            status: 200,
            headers: {
                "Content-Type": "application/json",
            },
        });
    } catch (error) {
        // Tratamento de erros inesperados
        return new Response(JSON.stringify({ error: error }), {
            status: 400,
            headers: {
                "Content-Type": "application/json",
            },
        });
    }
}