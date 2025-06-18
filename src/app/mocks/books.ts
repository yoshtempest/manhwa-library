import { BookResponse } from '@/schemas/book';

export async function getBooks():  Promise<BookResponse[]> {
    return [
        {
            id: "1",
            title: "Magic Emperor",
            author: "Zhuo Yifan",
            genres: "Fantasy, Adventure",
            description: "Follow the journey of",
            note: 4.5,
            image_path: "https://example.com/magic-emperor.jpg"
        },
        {
            id: "2",
            title: "Magic Emperor",
            author: "Zhuo Yifan",
            genres: "Fantasy, Adventure",
            description: "Follow the journey of",
            note: 4.5,
            image_path: "https://example.com/magic-emperor.jpg"
        },
        {
            id: "3",
            title: "Magic Emperor",
            author: "Zhuo Yifan",
            genres: "Fantasy, Adventure",
            description: "Follow the journey of",
            note: 4.5,
            image_path: "https://example.com/magic-emperor.jpg"
        }
    ]
}
