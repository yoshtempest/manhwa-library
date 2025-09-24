import { BookResponse } from '@/schemas/book';
import { IMAGES } from '@/uploads';


export async function getBooks(bookTitle?: string):  Promise<BookResponse[]> {
    
    const allBooks = [
        {
            id: "1",
            title: "Imperador Mágico",
            author: "Ye Xiao",
            genres: "Action, Adventure, Shounen",
            description: "Zhuo Yifan era um imperador mágico ou poderia ser chamado de imperador demônio porque ele tinha um livro do imperador antigo chamado Livro dos Nove Segredos, ele foi alvo de todos os especialistas e foi traído e morto por seus alunos. Então sua alma entra e volta à vida em um servo da família chamado Zhuo Fan. Alguma magia demoníaca o impede, ele deve unir as memórias de criança e não pode ignorar a família e a amante a quem serve.",
            note: 4.5,
            image_path: IMAGES.imperadorMagico.src
        },
        {
            id: "2",
            title: "O Melhor Amigo do Mundo",
            author: "Chugong",
            genres: "Action, Fantasy",
            description: "Em um mundo onde caçadores humanos que possuem habilidades mágicas devem lutar contra monstros mortais para proteger a raça humana de certa aniquilação, um caçador notoriamente fraco chamado Sung Jinwoo se encontra em uma luta aparentemente interminável pela sobrevivência. Um dia, depois de sobreviver por pouco a uma masmorra dupla esmagadoramente poderosa que quase acaba com todo o seu grupo, um programa misterioso chamado Sistema o escolhe como seu único jogador e, por sua vez, dá a ele a habilidade extremamente rara de subir de nível em força, possivelmente além de qualquer limites conhecidos. Jinwoo então parte em uma jornada enquanto luta contra todos os tipos de inimigos, tanto homens quanto monstros, para descobrir os segredos das masmorras e a verdadeira fonte de seus poderes.",
            note: 5,
            image_path: IMAGES.melhorAmigoDoMundo.src
        },
        {
            id: "3",
            title: "O restaurante do arquimago",
            author: "Maslow",
            genres: "Action, Fantasy",
            description: "Jinhyuk, um viciado completo, foi o único a ter visto o final da [Torre dos Testes], mas à medida que a popularidade do jogo diminui, fica difícil manter a vida com o jogo. Jinhyuk quer terminar o jogo assim porque ele viu o final. Naquele mesmo dia, a [Torre dos Testes] se tornou uma realidade. Jinhyuk, que conhece todos os elementos do jogo, controla tudo mais rápido do que qualquer um! “Vou te mostrar o que é um profissional de verdade.”",
            note: 4.5,
            image_path: IMAGES.restauranteDoArquimago.src
        }
    ]
    // filtro para buscar os livros por nome
    return bookTitle
        ? allBooks.filter(book => book.title.toLowerCase().includes(bookTitle.toLowerCase()))
        : allBooks;
}
