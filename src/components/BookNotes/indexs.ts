declare module 'react-rating-stars-component' {
  import * as React from 'react';

  export interface RatingProps {
    count?: number;
    value?: number;
    edit?: boolean;
    size?: number;
    activeColor?: string;
    color?: string;
    isHalf?: boolean;
    char: string;
    onChange?: (newValue: number) => void;
    [key: string]: any;
  }

  const Rating: React.FC<RatingProps>;
  export default Rating;
}