import React, { useEffect, useState } from 'react';
import { Play, Broom } from '@phosphor-icons/react';
import {
  Button,
  ButtonClean,
  NumerosSorteados,
  NumberInput,
  HomeContainer,
  HomeForm,
  FormContainer,
  FormContainerJ,
  SpanAlert
} from '../../components/Components.styles';

export function Loto() {
  const [apostas, setApostas] = useState<number[][]>( [] );
  const [numerosApostar, setNumerosApostar] = useState( 15 );
  const [quantidadeJogos, setQuantidadeJogos] = useState( 1 );
  const [inputNumerosApostar, setInputNumerosApostar] = useState( numerosApostar.toString() );
  const [inputQuantidadeJogos, setInputQuantidadeJogos] = useState( quantidadeJogos.toString() );
  const [numerosApostarError, setNumerosApostarError] = useState( '' );
  const [quantidadeJogosError, setQuantidadeJogosError] = useState( '' );
  const [hideJogosButtons, setHideJogosButtons] = useState( false );
  const [hasNumerosGerados, setHasNumerosGerados] = useState( false );
  const [isInputsEmpty, setIsInputsEmpty] = useState( true );
  const [isLoading, setIsLoading] = useState( false );

  useEffect( () => {
    const isNumerosApostarValid = numerosApostar >= 15 && numerosApostar <= 20;
    const isQuantidadeJogosValid = quantidadeJogos >= 1 && quantidadeJogos <= 5;

    setHideJogosButtons( !( isNumerosApostarValid && isQuantidadeJogosValid ) );
  }, [numerosApostar, quantidadeJogos] );

  useEffect( () => {
    setHasNumerosGerados( apostas.length > 0 );
  }, [apostas] );

  useEffect( () => {
    setIsInputsEmpty(
      inputNumerosApostar.trim() === '' &&
      inputQuantidadeJogos.trim() === ''
    );
  }, [inputNumerosApostar, inputQuantidadeJogos] );

  const gerarApostas = async () => {
    if ( numerosApostar >= 15 && numerosApostar <= 20 && quantidadeJogos >= 1 && quantidadeJogos <= 5 ) {
      setIsLoading( true );

      // Tempo para simular o carregamento
      await new Promise( ( resolve ) => setTimeout( resolve, 1300 ) );
      const allApostas: number[][] = [];
      let jogosGerados = 0;

      while ( jogosGerados < quantidadeJogos ) {
        const numeros: number[] = [];
        // Preenche o restante dos números aleatórios
        while ( numeros.length < numerosApostar ) {
          const numero = Math.floor( Math.random() * 25 ) + 1;

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
      localStorage.setItem( 'apostas', JSON.stringify( allApostas ) );

      setIsLoading( false );
    }
  };

  const handleNumerosApostarChange = ( event: React.ChangeEvent<HTMLInputElement> ) => {
    const value = parseInt( event.target.value );

    if ( value >= 15 && value <= 20 ) {
      setNumerosApostar( value );
      setInputNumerosApostar( event.target.value );
      setNumerosApostarError( '' );
      setHideJogosButtons( false ); // Mostra os botões novamente
    } else {
      setInputNumerosApostar( event.target.value );
      setNumerosApostarError( 'Digite um número entre 15 e 20' );
      setHideJogosButtons( true ); // Oculta os botões

      // Limpa os números gerados
      setApostas( [] );
      localStorage.removeItem( 'apostas' );
    }

    setQuantidadeJogosError( '' );
  };

  const handleQuantidadeJogosChange = ( event: React.ChangeEvent<HTMLInputElement> ) => {
    const value = parseInt( event.target.value );

    if ( value >= 1 && value <= 5 ) {
      setQuantidadeJogos( value );
      setInputQuantidadeJogos( event.target.value );
      setQuantidadeJogosError( '' );
      setHideJogosButtons( false ); // Mostra os botões novamente
    } else {
      setInputQuantidadeJogos( event.target.value );
      setQuantidadeJogosError( 'Digite um número entre 1 e 5' );
      setHideJogosButtons( true ); // Oculta os botões

      // Limpa os números gerados
      setApostas( [] );
      localStorage.removeItem( 'apostas' );
    }

    setNumerosApostarError( '' );
  };

  const handleQuantidadeJogosKeyPress = ( event: React.KeyboardEvent<HTMLInputElement> ) => {
    if ( event.key === 'Enter' ) {
      event.preventDefault();
      if ( !quantidadeJogos ) {
        gerarApostas();
      }
    }
  };

  const handleNumerosApostarKeyPress = ( event: React.KeyboardEvent<HTMLInputElement> ) => {
    if ( event.key === 'Enter' ) {
      event.preventDefault();
      if ( !numerosApostar ) {
        gerarApostas();
      }
    }
  };

  const limpar = () => {
    setApostas( [] );
    setInputNumerosApostar( '' );
    setInputQuantidadeJogos( '' );
    setNumerosApostar( 15 );
    setQuantidadeJogos( 1 );
    setHideJogosButtons( false );
    setNumerosApostarError( '' ); // Remover a mensagem de erro
    setQuantidadeJogosError( '' ); // Remover a mensagem de erro
    setHasNumerosGerados( false );
  };

  useEffect( () => {
    setInputNumerosApostar( numerosApostar.toString() );
    setInputQuantidadeJogos( quantidadeJogos.toString() );
  }, [numerosApostar, quantidadeJogos] );

  return (
    <HomeContainer>
      <h2>Simulação Lotofácil</h2>
      <HomeForm>
        <FormContainerJ>
          <FormContainer>
            <label htmlFor="numerosApostar">Números de 15 a 20:</label>
            <NumberInput
              type="number"
              id="numerosApostar"
              min={15}
              max={20}
              value={inputNumerosApostar}
              onChange={handleNumerosApostarChange}
              onKeyDown={handleNumerosApostarKeyPress}
            />
            {inputNumerosApostar !== '' && (
              <>
                {numerosApostarError && <SpanAlert>{numerosApostarError}</SpanAlert>}
                {!numerosApostarError && ( parseInt( inputNumerosApostar ) < 15 || parseInt( inputNumerosApostar ) > 20 ) && (
                  <SpanAlert>Digite números entre 15 e 20</SpanAlert>
                )}
              </>
            )}
          </FormContainer>
          <FormContainer>
            <label htmlFor="quantidadeJogos">Jogos de 1 a 5:</label>
            <NumberInput
              type="number"
              id="quantidadeJogos"
              min={1}
              max={5}
              value={inputQuantidadeJogos}
              onChange={handleQuantidadeJogosChange}
              onKeyDown={handleQuantidadeJogosKeyPress}
            />
            {inputQuantidadeJogos !== '' && (
              <>
                {quantidadeJogosError && <SpanAlert>{quantidadeJogosError}</SpanAlert>}
                {!quantidadeJogosError && ( parseInt( inputQuantidadeJogos ) < 1 || parseInt( inputQuantidadeJogos ) > 5 ) && (
                  <SpanAlert>Digite números entre 1 e 5</SpanAlert>
                )}
              </>
            )}
          </FormContainer>
          <Button
            onClick={gerarApostas}
            disabled={isLoading}
            className={hideJogosButtons ? 'hidden' : ''}
          >
            {isLoading ? <span>Gerando...</span> : <><Play size={20} />Gerar números</>}
          </Button>
          {hasNumerosGerados && !isInputsEmpty && (
            <ButtonClean
              title='Limpar'
              onClick={limpar}
              className={hideJogosButtons ? 'hidden' : ''}
            >
              <Broom size={20} />Apagar
            </ButtonClean>
          )}
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