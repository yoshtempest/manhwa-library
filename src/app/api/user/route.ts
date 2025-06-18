import SecurityHandler from "@/core/security";
import db from "@/core/db";
import UserService from "@/services/user";

export async function GET(request: Request) {
    
    const token = request.headers.get("Authorization")?.replace("Bearer ", "");

    if (!token) {
        return new Response(JSON.stringify({ error: "Unauthorized" }), {
            status: 401,
            headers: {
                "Content-Type": "application/json",
            },
        });
    }

    const userId = SecurityHandler.getIdFromToken(token);

    if (!userId) {
        return new Response(JSON.stringify({ error: "Invalid token" }), {
            status: 401,
            headers: {
                "Content-Type": "application/json",
            },
        });
    }

    const service = new UserService(await db.getSession());

    const user = await service.getUserById(userId);

    if (!user) {
        return new Response(JSON.stringify({ error: "User not found" }), {
            status: 404,
            headers: {
                "Content-Type": "application/json",
            },
        });
    }

    return new Response(JSON.stringify(user), {
        status: 200,
        headers: {
            "Content-Type": "application/json",
        },
    });

}