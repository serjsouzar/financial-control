import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

export function Header(){
  return(
    <Container>
      <Content>
      <div className='logoTitle'>
      <img src={logoImg} alt="fin-control" width={35} height={35}/>
      <h4>Financial Control</h4>
      </div>
      <button>Nova transação</button>
      </Content>
    </Container>
  )
}