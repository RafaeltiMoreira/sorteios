import { useState } from 'react';
import { Play, Broom } from '@phosphor-icons/react';
import { Button, ButtonClean, NumerosSorteados, NumberInput, HomeContainer, HomeForm, FormContainer, FormContainerJ, HeaderH2 } from '../../components/Components.styles';

export function Loto() {
  const [apostas, setApostas] = useState<number[][]>( [] );
  const [numerosApostar, setNumerosApostar] = useState( 15 );
  const [quantidadeJogos, setQuantidadeJogos] = useState( 1 );
  const [inputNumerosApostar, setInputNumerosApostar] = useState( numerosApostar.toString() );
  const [inputQuantidadeJogos, setInputQuantidadeJogos] = useState( quantidadeJogos.toString() );
  const [numerosApostarError, setNumerosApostarError] = useState( '' );
  const [quantidadeJogosError, setQuantidadeJogosError] = useState( '' );
  const [isButtonDisabled, setIsButtonDisabled] = useState( true );

  const gerarAposta = () => {
    if ( !isButtonDisabled ) {
      const allApostas: number[][] = [];

      for ( let i = 0; i < quantidadeJogos; i++ ) {
        const numeros: number[] = [];

        while ( numeros.length < numerosApostar ) {
          const numero = Math.floor( Math.random() * 25 ) + 1;

          if ( !numeros.includes( numero ) ) {
            numeros.push( numero );
          }
        }

        allApostas.push( numeros );
      }

      setApostas( allApostas );
    }
  };

  const handleNumerosApostarChange = ( event: React.ChangeEvent<HTMLInputElement> ) => {
    const value = parseInt( event.target.value );

    if ( value >= 15 && value <= 18 ) {
      setNumerosApostar( value );
      setInputNumerosApostar( event.target.value );
      setNumerosApostarError( '' );
    } else {
      setInputNumerosApostar( event.target.value );
      setNumerosApostarError( 'Digite um número entre 15 a 18' );
    }

    setIsButtonDisabled( value < 15 || value > 18 || isNaN( value ) || quantidadeJogos < 1 || quantidadeJogos > 5 );
  };

  const handleQuantidadeJogosChange = ( event: React.ChangeEvent<HTMLInputElement> ) => {
    const value = parseInt( event.target.value );

    if ( value >= 1 && value <= 5 ) {
      setQuantidadeJogos( value );
      setInputQuantidadeJogos( event.target.value );
      setQuantidadeJogosError( '' );
    } else {
      setInputQuantidadeJogos( event.target.value );
      setQuantidadeJogosError( 'Digite um número entre 1 a 5' );
    }

    setIsButtonDisabled( (value < 1 || value > 5 || isNaN(value)) ||
    (numerosApostar < 15 || numerosApostar > 18 || isNaN(numerosApostar)));
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
              value={inputNumerosApostar}
              onChange={handleNumerosApostarChange}
            />
            {numerosApostarError && <span style={{ color: 'red' }}>{numerosApostarError}</span>}
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
            />
            {quantidadeJogosError && <span style={{ color: 'red' }}>{quantidadeJogosError}</span>}
          </FormContainer>
          <Button onClick={gerarAposta} disabled={isButtonDisabled}><Play size={24} />Gerar números</Button>
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
