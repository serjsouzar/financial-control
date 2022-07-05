import { useState } from 'react'
import Modal from 'react-modal';
import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

interface HeaderProps {
  onModalOpen: () => void;
}

export function Header({onModalOpen}: HeaderProps){

  return(
    <Container>
      <Content>
      <div className='logoTitle'>
      <img src={logoImg} alt="fin-control" width={35} height={35}/>
      <h4>Financial Control</h4>
      </div>
      <button onClick={onModalOpen}>Nova transação</button>
      </Content>

      
    </Container>
  )
}