import db from "@/backend/core/db";
import BookService from "@/backend/services/book";
import { BookRequest } from "@/schemas/book";


export async function POST(request: Request): Promise<Response> {
    try {

        const bookData: BookRequest = await request.json();
        const session = await db.getSession();
        const service = new BookService(session);

        try {
            const newBook = await service.add(bookData);

            return new Response(JSON.stringify(newBook), {
                status: 201,
                headers: {
                    "Content-Type": "application/json",
                },
            });
        }
        catch (error: any) {
            if (error.message === "Book already exists") {
                return new Response(JSON.stringify ({ error: "Book already exists" }), {
                    status: 409,
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
            }
        }
    }
    catch (error) {
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