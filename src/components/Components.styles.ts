import styled from "styled-components";

export const HomeContainer = styled.main`
  flex: 1;
  padding: 0.5rem;
  margin-top: 120px;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 2.5rem;
  }

  @media (max-width: 576px) {
    padding: 1.5rem;
  }

  h2 {
    font-size: 1.5rem;
    color: ${( { theme } ) => theme["gray-100"]};
    margin-bottom: 120px;
    text-align: center;

    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
  }

`;

export const HomeForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.5rem;

  .hidden {
    display: none;
  }

  h1 {
    color: ${( { theme } ) => theme["gray-100"]};
  }
`;

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${( { theme } ) => theme["gray-100"]};
  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap;

  @media (max-width: 576px) {
    font-size: 0.75rem;
  }
`;

export const FormContainerJ = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${( { theme } ) => theme["gray-100"]};
  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap;
  margin-bottom: 20px;

  @media (max-width: 576px) {
    font-size: 0.75rem;
    gap: 1rem;
  }
`;

export const Button = styled.button`
  background-color: ${( { theme } ) => theme["green-700"]};
  color: ${( { theme } ) => theme["white"]};
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    background-color: ${( { theme } ) => theme["green-500"]};
    transition: background-color 0.2s;
  }

  @media (max-width: 576px) {
    font-size: 0.875rem;
    padding: 5px 10px;
  }
`;

export const ButtonClean = styled.button`
  background-color: ${( { theme } ) => theme["red-700"]};
  color: ${( { theme } ) => theme["white"]};
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    background-color: ${( { theme } ) => theme["red-500"]};
    transition: background-color 0.2s;
  }

  @media (max-width: 576px) {
    font-size: 0.875rem;
    padding: 5px 10px;
  }
`;

export const NumerosSorteados = styled.span`
  background-color: ${( { theme } ) => theme["green-500"]};
  font-weight: bold;
  font-size: 1.25rem;
  color: ${( { theme } ) => theme["gray-100"]};
  border-radius: 100%;
  display: inline-flex;
  padding: 10px;
  width: 3rem;
  align-items: center;
  justify-content: center;

  @media (max-width: 576px) {
    font-size: 0.875rem;
    width: 2.5rem;
  }

  @media (max-width: 392px) {
    font-size: 0.8rem;
    width: 2rem;
    height: 2rem;
  }
`;

export const NumberInput = styled.input`
  width: 4rem;
  font-weight: bold;
  font-size: 1.125rem;
  padding: 1rem 0.5rem;
  background: transparent;
  height: 2.5rem;
  border: 0;
  border-bottom: 2px solid ${( { theme } ) => theme["gray-100"]};
  color: ${( { theme } ) => theme["yellow-logo"]};

  @media (max-width: 768px) {
    width: 3rem;
    font-size: 1rem;
    padding: 0.75rem 0.25rem;
    height: 2rem;
  }

  @media (max-width: 576px) {
    width: 2.5rem;
    font-size: 0.875rem;
    padding: 0.5rem 0.25rem;
    height: 1.75rem;
  }
`;

export const SpanAlert = styled.span`
    font-weight: bold;
    color: ${( { theme } ) => theme["red"]};
`;

export const NumberGridLoto = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;

  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;

export const NumberGridMega = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  gap: 1rem;

  @media (max-width: 798px) {
    grid-template-columns: repeat(5, 1fr);
    gap: 0.5rem;
  }
`;

export const NumberGridQuina = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  gap: 1rem;

  @media (max-width: 798px) {
    grid-template-columns: repeat(5, 1fr);
    gap: 0.5rem;
  }
`;

interface NumberButtonProps {
  isSelected: boolean;
  onClick: () => void;
};

export const NumberButton = styled.button<NumberButtonProps>`
background-color: ${(props) => props.isSelected ? props.theme['green-500'] : props.theme['gray-100']};
color: ${(props) => props.isSelected ? props.theme['gray-100'] : props.theme['gray-700']};
font-weight: bold;
font-size: 1.25rem;
border: none;
border-radius: 50%;
width: 3rem;
height: 3rem;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;

/*&:hover {
  background-color: ${( { theme } ) => theme["green-500"]};
  color: ${( { theme } ) => theme["gray-100"]};
}*/
@media (max-width: 392px) {
    font-size: 0.9rem;
    width: 2rem;
    height: 2rem;
  }
`;