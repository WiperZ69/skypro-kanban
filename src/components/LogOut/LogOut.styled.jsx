import styled from 'styled-components';
import { Hover01, Hover02, Hover03 } from '../../styles/GlobalStyles';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 15;
`;

export const ModalContainer = styled.div`
  background: #ffffff;
  padding: 50px 30px;
  border: 0.70px solid #d4dbe5;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 370px;
`;

export const QuestionText = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: #000;
  margin-bottom: 20px;
`;


export const ModalBlock = styled.div`
    display: flex;
    gap: 7px;
`

export const ModalButton = styled.button`
  width: 153px;
  padding: 10px 20px;
  border: 0.70px solid #565eef;
  border-radius: 4px;
  font-size: 14px;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s;

  &:first-child {
    background-color: #565eef;
    color: #ffffff;
    ${Hover01}
  }

  &:last-child {
    color: #333;
    ${Hover03}
  }
`;