import styled from "styled-components";

export const HomeContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const HomeForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.5rem;

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
`;

export const Button = styled.button`
  background-color: ${( { theme } ) => theme["green-500"]};
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    background-color: ${( { theme } ) => theme["green-700"]};
    transition: background-color 0.2s;
  }
`;

export const ButtonClean = styled.button`
  background-color: ${( { theme } ) => theme["blue-hover"]};
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    background-color: ${( { theme } ) => theme["blue-logo"]};
    transition: background-color 0.2s;
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

export const HeaderH2 = styled.h2`
    flex: 1;
    display: flex;
    flex-direction: column;
    text-align: start;
    justify-content: center;
    padding: 0 0 5rem 0;
`;