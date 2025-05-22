import db from "@/core/db";
import UserService from "@/services/user";
import { userRequest } from "@/schemas/user";
// import { json } from "stream/consumers";


/*
    Função responsável por registrar(ativar a conta) um novo usuário

    1. Recebe os dados de cadastro via request.
    2. Cria uma sessão no banco de dados.
    3. Instancia o serviço de usuário.
    4. Verifica se já existe um usuário com o mesmo e-mail.
    5. Se não existir, cadastra o novo usuário.
    6. Retorna erro 409 se o e-mail já estiver cadastrado.
    7. Retorna os dados do usuário cadastrado em caso de sucesso.
*/

export async function POST (request: Request): Promise<Response> {
    try {
        // 1. Recebe e valida os dados de cadastro enviados pelo cliente
        const userData: userRequest = await request.json();

        // 2. Cria uma nova sessão(aqui é necessário mudar) com o banco de dados
        const session = await db.getSession();

        // 3. Instancia o serviço de usuário, passando a sessão
        const service = new UserService(session);

        try {
            // 4. Tenta adicionar o usuário(verifica se já existe internamente)
            const newUser = await service.add(userData);

            // 5. Retorna os dados do usuário cadastrado
            return new Response(JSON.stringify(newUser), {
                status: 201,
                headers: {
                    "Content-Type": "application/json",
                },
            });
        } catch (error: any) {
            // 6. Se o erro for devido a "usuário já existente", retorna 409
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
    // Fallback return in case no other return was hit
    return new Response(JSON.stringify({ error: "Unknown error" }), {
        status: 500,
        headers: {
            "Content-Type": "application/json",
        },
    });
}