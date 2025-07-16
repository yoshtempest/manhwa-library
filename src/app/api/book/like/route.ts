import BookService from "@/backend/services/book";
import db from "@/backend/core/db";
import { LikeRequest, LikeResponse } from "@/schemas/like";


export async function POST(request: Request): Promise<Response> {
    try {
        const likeRequest: LikeRequest = await request.json();

        const session = await db.getSession();

        const service = new BookService(session);
        
        const response: LikeResponse = await service.likeBook(likeRequest)
    }
}