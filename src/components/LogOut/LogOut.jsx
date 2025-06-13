import { useNavigate } from "react-router-dom";
import { ModalBlock, ModalButton, ModalContainer, Overlay, QuestionText } from "./LogOut.styled";


const LogoutModal = ({ setIsAuth }) => {

    const navigate = useNavigate()
    
    function handleLogout(e) {
        e.preventDefault()
        setIsAuth(false)
        navigate('/sign-in')
    }
    function cancelLogout(e) {
        e.preventDefault()
        setIsAuth(true)
        navigate('/')
    }

  return (
    <Overlay>
      <ModalContainer>
        <QuestionText>Выйти из аккаунта?</QuestionText>
        <ModalBlock>
          <ModalButton onClick={handleLogout}>Да, выйти</ModalButton>
          <ModalButton onClick={cancelLogout}>Нет, остаться</ModalButton>
        </ModalBlock>
      </ModalContainer>
    </Overlay>
  );
};

export default LogoutModal;