import { useState, useEffect } from 'react';
import { Play, Broom } from '@phosphor-icons/react';
import {
  Button,
  ButtonClean,
  NumberInput,
  HomeContainer,
  HomeForm,
  NumberGrid,
  NumberButton,
  FormContainer,
  FormContainerJ,
  NumerosSorteados,
  SpanAlert,
} from '../../components/Components.styles';


export function Cartela() {
  const [selectedNumbers, setSelectedNumbers] = useState<number[]>( [] );
  const [sortedNumbers, setSortedNumbers] = useState<number[]>( [] );
  const [numerosApostar, setNumerosApostar] = useState( 15 );
  const [inputNumerosApostar, setInputNumerosApostar] = useState( numerosApostar.toString() );
  const [numerosApostarError, setNumerosApostarError] = useState( '' );
  const [hideJogosButtons, setHideJogosButtons] = useState( false );
  const [hasNumerosGerados, setHasNumerosGerados] = useState( false );
  const [isInputsEmpty, setIsInputsEmpty] = useState( true );
  const [isLoading, setIsLoading] = useState( false );

  useEffect( () => {
    const isNumerosApostarValid = numerosApostar >= 15 && numerosApostar <= 18;
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

    if ( value >= 15 && value <= 18 ) {
      setNumerosApostar( value );
      setInputNumerosApostar( event.target.value );
      setNumerosApostarError( '' );
      setHideJogosButtons( false );
    } else {
      setInputNumerosApostar( event.target.value );
      setNumerosApostarError( 'Escolha números entre 15 e 18' );
      setHideJogosButtons( true );
      setSortedNumbers( [] );
    }
  };

  const limpar = () => {
    setSelectedNumbers( [] );
    setSortedNumbers( [] );
    setInputNumerosApostar( '' );
    setNumerosApostar( 15 );
    setNumerosApostarError( '' );
    setHideJogosButtons( false );
    setHasNumerosGerados( false );
  };

  return (
    <HomeContainer>
      <h2>Cartela Lotofácil</h2>
      <HomeForm>
        <FormContainer>

          <NumberInput
            type="number"
            id="numerosApostar"
            min={15}
            max={18}
            value={inputNumerosApostar}
            onChange={handleNumerosApostarChange}
          />
          {numerosApostarError && <SpanAlert>{numerosApostarError}</SpanAlert>}
          <label htmlFor="numerosApostar"> para sortear.</label>
        </FormContainer>
        <NumberGrid>
          {Array.from( { length: 25 }, ( _, i ) => i + 1 ).map( ( number ) => (
            <NumberButton
              key={number}
              isSelected={selectedNumbers.includes( number )}
              onClick={() => handleNumberClick( number )}
            >
              {number}
            </NumberButton>
          ) )}
        </NumberGrid>
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

/*
  

  return (
    <HomeContainer>
      <h2>Cartela</h2>
      <HomeForm>
        <FormContainerJ>
          <FormContainer>
            <label>Selecione até 25 números:</label>
            <div>
              {Array.from({ length: 25 }, (_, index) => (
                <NumberInput
                  key={index}
                  className={selectedNumbers.includes(index + 1) ? 'selected' : ''}
                  onClick={() => handleNumberClick(index + 1)}
                >
                  {index + 1}
                </NumberInput>
              ))}
            </div>
          </FormContainer>
          <FormContainer>
            <label>Quantidade de Números a Sortear:</label>
            <select value={selectedCount.toString()} onChange={handleSelectedCountChange}>
              {Array.from({ length: 4 }, (_, index) => (
                <option key={index} value={15 + index}>
                  {15 + index}
                </option>
              ))}
            </select>
          </FormContainer>
          <Button onClick={generateRandomNumbers} disabled={isGenerating}>
            {isGenerating ? <span>Gerando...</span> : <><Play size={20} />Sortear números</>}
          </Button>
          {selectedNumbers.length > 0 && (
            <ButtonClean title="Limpar" onClick={clearSelection}>
              <Broom size={20} />Apagar
            </ButtonClean>
          )}
        </FormContainerJ>
      </HomeForm>

      {selectedNumbers.length > 0 && (
        <FormContainer>
          <h3>Números Sorteados:</h3>
          <div>
            {selectedNumbers.map((number, index) => (
              <NumberInput key={index}>
                {number}
              </NumberInput>
            ))}
          </div>
        </FormContainer>
      )}
    </HomeContainer>
  );
};*/