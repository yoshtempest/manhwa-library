import db from "@/core/db";
import UserService from "@/services/user";
import { UserLogin } from "@/schemas/user";

/*
  Função responsável por autenticar um usuário.
  
  1. Recebe os dados de login via request.
  2. Cria uma sessão de banco de dados.
  3. Instancia o serviço de usuário.
  4. Tenta autenticar o usuário.
  5. Retorna erro 401 se as credenciais forem inválidas.
  6. Retorna os dados do usuário autenticado em caso de sucesso.
 */
export async function POST(request: Request): Promise<Response> {
    try {
        // 1. Recebe e valida os dados de login enviados pelo cliente
        const login: UserLogin = await request.json();

        // 2. Cria uma nova sessão com o banco de dados
        const session = await db.getSession();

        // 3. Instancia o serviço de usuário, passando a sessão
        const service = new UserService(session);

        // 4. Tenta autenticar o usuário com as credenciais fornecidas
        const response = await service.login(login);

        // 5. Se não encontrar usuário ou a senha for inválida, retorna o erro 401
        if (!response) {
            return new Response(JSON.stringify({ error: "Invalid credentials" }), {
                status: 401,
                headers: {
                    "Content-Type": "application/json",
                },
            });
        }

        // 6. Retorna os dados do usuário autenticado
        return new Response(JSON.stringify(response), {
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