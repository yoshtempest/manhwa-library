import db from "@/backend/core/db";
import BookService from "@/backend/services/book";
import SecurityHandler from "@/backend/core/security";


export async function GET(request: Request) {

    const token  = request.headers.get("Authorization")?.replace("Bearer ", "");

    if (!token) {
        return new Response(JSON.stringify({ error: "Unauthorized" }), {
            status: 401,
            headers: {
                "Content-Type": "application/json",
            },
        });
    }

    const bookId = SecurityHandler.getIdFromToken(token);

    if (!bookId) {
        return new Response(JSON.stringify({ error: "Invalid token" }), {
            status: 401,
            headers: {
                "Content-Type": "application/json",
            },
        });
    }

    const service = new BookService(await db.getSession());

    const book = await service.getBookById(bookId);

    if (!book) {
        return new Response(JSON.stringify({ error: "Book not found" }), {
            status: 404,
            headers: {
                "Content-Type" : "application/json",
            },
        });
    }

    return new Response(JSON.stringify(book), {
        status: 200,
        headers: {
            "Content-Type": "application/json",
        },
    });
}