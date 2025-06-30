import React from 'react';
import Rating from 'react-rating-stars-component';


interface Props {
    averageRating: number; // possivelmente será um array []
}

const BookRating: React.FC<Props> = ({ averageRating }) => {
    return (
        <Rating 
            count={5} // referente a quantidade de estrelas
            value={averageRating}
            edit={false} // talvez devesse ser true para o usuário poder avaliar
            size={24} // tamanho em pixel creio eu
            activeColor="#ffee58" // cor ativa
            color="#ffffff" // cor padrão
            isHalf={true} // indica que pode não ser estrela cheia
        />
    )
}


export default BookRating;