import db from "@/core/db";
import UserService from "@/services/user";
import { UserLogin } from "@/schemas/user";

export async function POST(request: Request) : Promise<Response> {
    const login: UserLogin = await request.json();

    const session =  await db.getSession()

    const service = new UserService(session);

    const response = await service.login(login);

    if (!response) {
        return new Response(JSON.stringify({ error: "Invalid credentials" }), {
            status: 401,
            headers: {
                "Content-Type": "application/json",
            },
        });
    }

    return new Response(JSON.stringify(response), {
        status: 200,
        headers: {
            "Content-Type": "application/json",
        },
    });

}