export default class BookModel {
    constructor(
        public id: string,
        public title: string,
        public author: string,
        public description: string,
        public note: number = 0, // Nota padrão é 0
        public image_path: string,
        public created_at: Date,
        public updated_at: Date
    ) {}

    // Converte para JSON
    toJson(): any {
        return {
            id: this.id,
            title: this.title,
            author: this.author,
            description: this.description,
            created_at: this.created_at,
            updated_at: this.updated_at
        };
    }

    // Cria uma instância a partir do JSON
    static fromJson(json: any): BookModel {
        return new BookModel(
            json.id,
            json.title,
            json.author,
            json.description,
            json.note || 0,
            json.imagePath,
            new Date(json.created_at),
            new Date(json.updated_at)
        );
    }
}
