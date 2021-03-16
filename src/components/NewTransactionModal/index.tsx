import Modal from 'react-modal';
import { Container, TransactionTypeContainer, RadioButton } from './styles'

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import closeImg from '../../assets/close.svg'
import { useState } from 'react';

Modal.setAppElement('#root');

interface NewTransactionModalProps{
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose} :NewTransactionModalProps){
    const [transactionType, setTransactionType] = useState('deposit');

    return(
        <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      >

        <button
        onClick={onRequestClose}
        className="react-modal-close"
        >
            <img src={closeImg} alt="Fechar modal"/>
        </button>

          <Container>
          <h2>Cadastrar transição</h2>

          <input placeholder="Título" />

          <input type="number" placeholder="Valor" />

          <TransactionTypeContainer>
              <RadioButton
              type="button"
              onClick={() => setTransactionType('deposit')}
              isActive={transactionType === 'deposit'}
              >
                  <img src={incomeImg} alt="Entrada"/>
                  <span>Entrada</span>
              </RadioButton>

              <RadioButton
              type="button"
              onClick={() => setTransactionType('withdraw')}
              isActive={transactionType === 'withdraw'}
              >
                  <img src={outcomeImg} alt="Saída"/>
                  <span>Saída</span>
              </RadioButton>
          </TransactionTypeContainer>

          <input placeholder="Categoria" />

          <button type="submit">Cadastrar</button>
          </Container>

    </Modal>
    )
}
