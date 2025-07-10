import db from "@/core/db";
import UserService from "@/services/user";
import { UserLogin } from "@/schemas/user";
import SecurityHandler from "@/core/security";

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
        if (!response) {
            return new Response(JSON.stringify({ error: "Invalid credentials" }), {
                status: 401,
                headers: {
                    "Content-Type": "application/json",
                },
            });
        }

        // Retorna os dados do usuário autenticado
        return new Response(JSON.stringify({
            user: response,
            // Gera um token JWT com validade de 1 hora
            token: SecurityHandler.generateTokenFromId(String(response.id)),
        }), {
            status: 200,
            headers: {
                "Content-Type": "application/json",
            },
        });
    } catch (error) {
        // Tratamento de erros inesperados
        return new Response(JSON.stringify({ error: "Internal server error" }), {
            status: 500,
            headers: {
                "Content-Type": "application/json",
            },
        });
    }
}