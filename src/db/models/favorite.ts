export default class FavoriteModel{
    constructor(
        public id: string,
        public user_id: string,
        public book_id: string,
        public created_at: Date = new Date(),
    ){}
}