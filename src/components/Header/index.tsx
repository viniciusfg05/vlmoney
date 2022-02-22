import { useState } from 'react'
import Modal from 'react-modal'
import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

interface HeaderProps {
  onOpenNewTransationModal: () => void; // está função ele vai ser vazia e não recebe nenhum retorno 
}

export function Header({onOpenNewTransationModal}: HeaderProps) { //vamos desestruturar 
  
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="vlmoney" />
        <button type="button" onClick={onOpenNewTransationModal}>
          Nova Transação
        </button>
      </Content>
      
    </Container>
  )
}