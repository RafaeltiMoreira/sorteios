import React, { useEffect, useState } from 'react';
import { Play, Broom } from '@phosphor-icons/react';
import { Button, ButtonClean, NumerosSorteados, NumberInput, HomeContainer, HomeForm, FormContainer, FormContainerJ, HeaderH2, SpanAlert } from '../../components/Components.styles';

export function Quina() {
  const [apostas, setApostas] = useState<number[][]>( [] );
  const [numerosApostar, setNumerosApostar] = useState( 5 );
  const [quantidadeJogos, setQuantidadeJogos] = useState( 1 );
  const [inputNumerosApostar, setInputNumerosApostar] = useState( numerosApostar.toString() );
  const [inputQuantidadeJogos, setInputQuantidadeJogos] = useState( quantidadeJogos.toString() );
  const [numerosApostarError, setNumerosApostarError] = useState( '' );
  const [quantidadeJogosError, setQuantidadeJogosError] = useState( '' );
  const [isButtonDisabled, setIsButtonDisabled] = useState( true );

  useEffect( () => {
    setIsButtonDisabled(
      numerosApostar < 5 ||
      numerosApostar > 15 ||
      isNaN( numerosApostar ) ||
      quantidadeJogos < 1 ||
      quantidadeJogos > 5 ||
      isNaN( quantidadeJogos )
    );
  }, [numerosApostar, quantidadeJogos] );

  const gerarApostas = () => {
    if ( numerosApostar >= 5 && numerosApostar <= 15 && quantidadeJogos >= 1 && quantidadeJogos <= 5 ) {
      const allApostas: number[][] = [];
      let jogosGerados = 0;

      while ( jogosGerados < quantidadeJogos ) {
        const numeros: number[] = [];

        // Preenche o restante dos números aleatórios
        while ( numeros.length < numerosApostar ) {
          const numero = Math.floor( Math.random() * 80 ) + 1;

          if ( !numeros.includes( numero ) ) {
            numeros.push( numero );
          }
        }

        // Verifica se o jogo já existe na lista
        const jogoDuplicado = allApostas.some( ( aposta ) => {
          return JSON.stringify( aposta ) === JSON.stringify( numeros.sort( ( a, b ) => a - b ) );
        } );

        // Se o jogo for duplicado, gera um novo jogo
        if ( jogoDuplicado ) {
          continue;
        }

        allApostas.push( numeros.sort( ( a, b ) => a - b ) );
        jogosGerados++;
      }

      setApostas( allApostas );
    }
  };

  const handleNumerosApostarChange = ( event: React.ChangeEvent<HTMLInputElement> ) => {
    const value = parseInt( event.target.value );

    if ( value >= 6 && value <= 15 ) {
      setNumerosApostar( value );
      setInputNumerosApostar( event.target.value );
      setNumerosApostarError( '' );
    } else {
      setInputNumerosApostar( event.target.value );
      setNumerosApostarError( 'Digite um número entre 5 e 15' );
    }

    setIsButtonDisabled(
      ( value < 5 || value > 15 || isNaN( value ) ) || ( quantidadeJogos < 1 || quantidadeJogos > 5 || isNaN( quantidadeJogos ) )
    );
  };

  const handleQuantidadeJogosChange = ( event: React.ChangeEvent<HTMLInputElement> ) => {
    const value = parseInt( event.target.value );

    if ( value >= 1 && value <= 5 ) {
      setQuantidadeJogos( value );
      setInputQuantidadeJogos( event.target.value );
      setQuantidadeJogosError( '' );
    } else {
      setInputQuantidadeJogos( event.target.value );
      setQuantidadeJogosError( 'Digite um número entre 1 e 5' );
    }

    setIsButtonDisabled(
      ( numerosApostar < 5 || numerosApostar > 15 || isNaN( numerosApostar ) ) ||
      ( value < 1 || value > 5 || isNaN( value ) ) ||
      ( numerosApostarError !== '' || ( quantidadeJogosError !== '' && value === 1 ) )
    );
  };

  const handleQuantidadeJogosKeyPress = ( event: React.KeyboardEvent<HTMLInputElement> ) => {
    if ( event.key === 'Enter' ) {
      event.preventDefault();
      if ( !isButtonDisabled ) {
        gerarApostas();
      }
    }
  };

  const handleNumerosApostarKeyPress = ( event: React.KeyboardEvent<HTMLInputElement> ) => {
    if ( event.key === 'Enter' ) {
      event.preventDefault();
      if ( !isButtonDisabled ) {
        gerarApostas();
      }
    }
  };

  const limpar = () => {
    setApostas( [] );
  };

  return (
    <HomeContainer>
      <HomeForm>
        <FormContainerJ>
          <HeaderH2>Simulação Quina</HeaderH2>
          <FormContainer>
            <label htmlFor="numerosApostar">Qtd de números (5 a 15):</label>
            <NumberInput
              type="number"
              id="numerosApostar"
              min={5}
              max={15}
              value={inputNumerosApostar}
              onChange={handleNumerosApostarChange}
              onKeyDown={handleNumerosApostarKeyPress}
            />
            {numerosApostarError && <SpanAlert>{numerosApostarError}</SpanAlert>}
          </FormContainer>
          <FormContainer>
            <label htmlFor="quantidadeJogos">Qtd de jogos (1 a 5):</label>
            <NumberInput
              type="number"
              id="quantidadeJogos"
              min={1}
              max={5}
              value={inputQuantidadeJogos}
              onChange={handleQuantidadeJogosChange}
              onKeyDown={handleQuantidadeJogosKeyPress}
            />
            {quantidadeJogosError && <SpanAlert>{quantidadeJogosError}</SpanAlert>}
          </FormContainer>
          <Button onClick={gerarApostas} disabled={isButtonDisabled}><Play size={24} />Gerar números</Button>
          <ButtonClean title='Limpar' onClick={limpar}><Broom size={24} /></ButtonClean>
        </FormContainerJ>
      </HomeForm>

      {apostas.length > 0 && (
        <FormContainer>
          {apostas.map( ( aposta, index ) => (
            <FormContainer key={index}>
              <h3>Jogo {index + 1}:</h3>
              {aposta.map( ( numero, subIndex ) => (
                <NumerosSorteados key={subIndex}>{numero}</NumerosSorteados>
              ) )}
            </FormContainer>
          ) )}
        </FormContainer>
      )}
    </HomeContainer>
  );
};
