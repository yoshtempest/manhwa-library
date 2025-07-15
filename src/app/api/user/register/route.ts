import db from "@/backend/core/db";
import UserService from "@/backend/services/user";
import { UserRequest } from "@/schemas/user";


/**
    Função responsável por registrar(ativar a conta) um novo usuário

    - Recebe os dados de cadastro via request.
    - Cria uma sessão no banco de dados.
    - Instancia o serviço de usuário.
    - Verifica se já existe um usuário com o mesmo e-mail.
    - Se não existir, cadastra o novo usuário.
    - Retorna erro 409 se o e-mail já estiver cadastrado.
    - Retorna os dados do usuário cadastrado em caso de sucesso.
*/

export async function POST (request: Request): Promise<Response> {
    try {
        /** Recebe e valida os dados de cadastro enviados pelo cliente */
        const userData: UserRequest = await request.json();

        /** Cria uma nova sessão com o banco de dados */
        const session = await db.getSession();

        /** Instancia o serviço de usuário, passando a sessão */
        const service = new UserService(session);


        try {
            /** Tenta adicionar o usuário(verifica se já existe internamente) */
            const newUser = await service.add(userData);

            // Retorna os dados do usuário cadastrado
            return new Response(JSON.stringify(newUser), {
                status: 201,
                headers: {
                    "Content-Type": "application/json",
                },
            });
        } catch (error: any) {
            // Se o erro for devido a "usuário já existente", retorna 409
            if (error.message === "User already exists") {
                return new Response(JSON.stringify({ error: "User already exists" }), {
                    status: 409,
                    headers: {
                        "Content-Type": "application/json",
                    },
            })
        }}
    }catch (error) {
        return new Response(JSON.stringify({ error: "Internal server error" }), {
            status: 500,
            headers: {
                "Content-Type": "application/json",
            },
        });
    }
    return new Response(JSON.stringify({ error: "Unknown error" }), {
        status: 500,
        headers: {
            "Content-Type": "application/json",
        },
    });
}