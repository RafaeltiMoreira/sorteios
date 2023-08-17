import { useState, useEffect } from 'react';
import { Play, Broom } from '@phosphor-icons/react';
import {
  Button,
  ButtonClean,
  NumberInput,
  HomeContainer,
  HomeForm,
  NumberButton,
  FormContainer,
  FormContainerJ,
  NumerosSorteados,
  SpanAlert,
  NumberGridQuina,
} from '../../components/Components.styles';


export function CartelaQuina() {
  const [selectedNumbers, setSelectedNumbers] = useState<number[]>( [] );
  const [sortedNumbers, setSortedNumbers] = useState<number[]>( [] );
  const [numerosApostar, setNumerosApostar] = useState( 5 );
  const [inputNumerosApostar, setInputNumerosApostar] = useState( numerosApostar.toString() );
  const [numerosApostarError, setNumerosApostarError] = useState( '' );
  const [hideJogosButtons, setHideJogosButtons] = useState( false );
  const [hasNumerosGerados, setHasNumerosGerados] = useState( false );
  const [isInputsEmpty, setIsInputsEmpty] = useState( true );
  const [isLoading, setIsLoading] = useState( false );

  useEffect( () => {
    const isNumerosApostarValid = numerosApostar >= 5 && numerosApostar <= 15;
    setHideJogosButtons( !isNumerosApostarValid );
  }, [numerosApostar] );

  useEffect( () => {
    setHasNumerosGerados( sortedNumbers.length > 0 );
  }, [sortedNumbers] );

  useEffect( () => {
    setIsInputsEmpty(
      inputNumerosApostar.trim() === ''
    );
  }, [inputNumerosApostar] );

  const handleNumberClick = ( number: number ) => {
    if ( selectedNumbers.includes( number ) ) {
      setSelectedNumbers( selectedNumbers.filter( ( n ) => n !== number ) );
    } else {
      setSelectedNumbers( [...selectedNumbers, number] );
    }
  };

  const handleSortNumbers = () => {
    setIsLoading( true );

    setTimeout( () => {
     
        const shuffledNumbers = [...selectedNumbers];
        for ( let i = shuffledNumbers.length - 1; i > 0; i-- ) {
          const j = Math.floor( Math.random() * ( i + 1 ) );
          [shuffledNumbers[i], shuffledNumbers[j]] = [
            shuffledNumbers[j],
            shuffledNumbers[i],
          ];
        }
        const sortedSelectedNumbers = shuffledNumbers.slice( 0, numerosApostar ).sort( ( a, b ) => a - b );
        setSortedNumbers( sortedSelectedNumbers );

        setSortedNumbers( sortedSelectedNumbers );
        setIsLoading( false ); // Finaliza o carregamento
      
    }, 1300 );

  };

  const handleNumerosApostarChange = ( event: React.ChangeEvent<HTMLInputElement> ) => {
    const value = parseInt( event.target.value );

    if ( value >= 5 && value <= 15 ) {
      setNumerosApostar( value );
      setInputNumerosApostar( event.target.value );
      setNumerosApostarError( '' );
      setHideJogosButtons( false );
    } else {
      setInputNumerosApostar( event.target.value );
      setNumerosApostarError( 'Escolha números entre 5 e 15' );
      setHideJogosButtons( true );
      setSortedNumbers( [] );
    }
  };

  const limpar = () => {
    setSelectedNumbers( [] );
    setSortedNumbers( [] );
    setInputNumerosApostar( '' );
    setNumerosApostar( 5 );
    setNumerosApostarError( '' );
    setHideJogosButtons( false );
    setHasNumerosGerados( false );
  };

  return (
    <HomeContainer>
      <h2>Cartela Quina 🍀</h2>
      <HomeForm>
        <FormContainer>

          <NumberInput
            type="number"
            id="numerosApostar"
            min={5}
            max={15}
            value={inputNumerosApostar}
            onChange={handleNumerosApostarChange}
          />
          {numerosApostarError && <SpanAlert>{numerosApostarError}</SpanAlert>}
          <label htmlFor="numerosApostar"> para sortear.</label>
        </FormContainer>
        <NumberGridQuina>
          {Array.from( { length: 80 }, ( _, i ) => i + 1 ).map( ( number ) => (
            <NumberButton
              key={number}
              isSelected={selectedNumbers.includes( number )}
              onClick={() => handleNumberClick( number )}
            >
              {number}
            </NumberButton>
          ) )}
        </NumberGridQuina>
        <FormContainerJ>
          <Button onClick={handleSortNumbers} disabled={selectedNumbers.length < numerosApostar || isLoading}
            className={hideJogosButtons ? 'hidden' : ''}
          >
            {isLoading ? <span>Gerando...</span> : <><Play size={20} />Gerar números</>}
          </Button>
          {hasNumerosGerados && !isInputsEmpty && (
            <ButtonClean title='Limpar' onClick={limpar} className={hideJogosButtons ? 'hidden' : '' && selectedNumbers.length === 0 ? 'hidden' : ''}>
              <Broom size={20} />Apagar
            </ButtonClean>
          )}
        </FormContainerJ>

        {sortedNumbers.length > 0 && (
          <FormContainer>
            <h3>Jogo:</h3>
            {sortedNumbers.map( ( numero, index ) => (
              <NumerosSorteados key={index}>{numero}</NumerosSorteados>
            ) )}
          </FormContainer>
        )}

      </HomeForm>
    </HomeContainer>
  );
}