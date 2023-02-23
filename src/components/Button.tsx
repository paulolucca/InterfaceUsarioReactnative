import React from 'react';
import { Button as ButtonNativeBase, IButtonProps, Heading} from 'native-base';

type Props = IButtonProps &{
    title: string;
}

export function Button({title, ...rest } :Props) {
  return (

    <ButtonNativeBase 
    //cor de fundo
    bg="green.700"
    //tamanho
    h={24}
    //fontes da letra
    fontSize="sm"
    //arrodandamento dos cantos
    rounded="sm"
    //cor apos o toque
    _pressed={{bg:"green.500 "}}

    {...rest}
    >

        <Heading color="white" fontSize="sm">
            {title}
        </Heading>


    </ButtonNativeBase>

  );
}
