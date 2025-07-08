export default class GenreModel {
    constructor(
        public id: string,
        public name: string,
        public created_at: Date = new Date(),
        public updated_at: Date = new Date()
    ) {}

    // Converte para JSON
    toJson(): any {
        return {
            id: this.id,
            name: this.name,
            created_at: this.created_at.toISOString(),
            updated_at: this.updated_at.toISOString()
        };
    }

    // Cria uma instância a partir do JSON
    static fromJson(json: any): GenreModel {
        return new GenreModel(
            json.id,
            json.name,
            new Date(json.created_at),
            new Date(json.updated_at)
        );
    }
}