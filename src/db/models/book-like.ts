export default class BookLikeModel {
    constructor(
        public id: string,
        public book_id: string,
        public user_id: string,
        public created_at: Date = new Date(),
    ) {}

    toJson(): any {
        return {
            id: this.id,
            book_id: this.book_id,
            user_id: this.user_id,
            created_at: this.created_at.toISOString(),
        };
    }

    static fromJson(json: any): BookLikeModel {
        return new BookLikeModel(
            json.id,
            json.book_id,
            json.user_id,
            new Date(json.created_at),
        );
    }
}