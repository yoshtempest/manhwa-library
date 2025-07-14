export default class BookGenreModel {
    constructor(
        public id: string,
        public book_id: string,
        public genre_id: string,
        public created_at: Date = new Date(),
    ) {}

    // Converte para JSON
    toJson(): any {
        return {
            id: this.id,
            book_id: this.book_id,
            genre_id: this.genre_id,
            created_at: this.created_at.toISOString(),
        };
    }

    // Cria uma instância a partir do JSON
    static fromJson(json: any): BookGenreModel {
        return new BookGenreModel(
            json.id,
            json.book_id,
            json.genre_id,
            new Date(json.created_at),
        );
    }
}