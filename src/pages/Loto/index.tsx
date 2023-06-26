import { useState } from 'react';
import { Play, Broom } from '@phosphor-icons/react';
import { Button, ButtonClean, NumerosSorteados, NumberInput, HomeContainer, HomeForm, FormContainer, FormContainerJ, HeaderH2 } from '../../components/Components.styles';

export function Loto() {
  const [apostas, setApostas] = useState<number[][]>( [] );
  const [numerosApostar, setNumerosApostar] = useState( 15 );
  const [quantidadeJogos, setQuantidadeJogos] = useState( 1 );

  const gerarAposta = () => {
    const allApostas: number[][] = [];

    for ( let i = 0; i < quantidadeJogos; i++ ) {
      const numeros: number[] = [];

      while ( numeros.length < numerosApostar ) {
        const numero = Math.floor( Math.random() * 80 ) + 1;

        if ( !numeros.includes( numero ) ) {
          numeros.push( numero );
        }
      }

      allApostas.push( numeros );
    }

    setApostas( allApostas );
  };

  const handleNumerosApostarChange = ( event: React.ChangeEvent<HTMLInputElement> ) => {
    const value = parseInt( event.target.value );

    if ( value >= 15 && value <= 18 ) {
      setNumerosApostar( value );
    }
  };

  const handleQuantidadeJogosChange = ( event: React.ChangeEvent<HTMLInputElement> ) => {
    const value = parseInt( event.target.value );

    if ( value >= 1 && value <= 5 ) {
      setQuantidadeJogos( value );
    }
  };

  const limpar = () => {
    setApostas( [] );
  };

  return (
    <HomeContainer>
      <HomeForm>
        <FormContainerJ>
          <HeaderH2>Simulação Lotofácil</HeaderH2>
          <FormContainer>
            <label htmlFor="numerosApostar">Qtd de números (15 a 18):</label>
            <NumberInput
              type="number"
              id="numerosApostar"
              min={15}
              max={18}
              value={numerosApostar}
              onChange={handleNumerosApostarChange}
            />
          </FormContainer>
          <FormContainer>
            <label htmlFor="quantidadeJogos">Qtd de jogos (1 a 5):</label>
            <NumberInput
              type="number"
              id="quantidadeJogos"
              min={1}
              max={5}
              value={quantidadeJogos}
              onChange={handleQuantidadeJogosChange}
            />
          </FormContainer>
          <Button onClick={gerarAposta}><Play size={24} />Gerar números</Button>
          <ButtonClean title='Limpar' onClick={limpar}><Broom size={24} /></ButtonClean>
        </FormContainerJ>
      </HomeForm>

      {apostas.length > 0 && (
        <FormContainer>
          {apostas.map( ( aposta, index ) => (
            <FormContainer key={index}>
              <h3>Jogo {index + 1}:</h3>
              {aposta.sort( ( a, b ) => a - b ).map( numero => (
                <NumerosSorteados key={numero}>{numero}</NumerosSorteados>
              ) )}
            </FormContainer>
          ) )}
        </FormContainer>
      )}
    </HomeContainer>
  );
};
