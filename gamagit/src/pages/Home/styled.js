import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  border: 1px solid #999;
  height: 2.76rem;
  padding: 0 .5rem;
  border-radius: .25rem 0 0 .25rem;

  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }
`;

export const Button = styled.button`
  height: 3rem;
  margin-top: -1px;
  border: 1px solid dodgerblue;
  background-color: dodgerblue;
  color: #fff;
  border-radius: 0 .25rem .25rem 0;

  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }
`;

export const ErrorMsg = styled.span`
  display: block;
  font-size: .65rem;
  color: #f00;
  font-weight: 600;
  margin-top: 1rem;
`;