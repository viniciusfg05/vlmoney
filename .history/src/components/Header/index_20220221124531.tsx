import logoImg from '../../assets/logo.svg'

export function Header() {
  return (
    <header>
      <img src={logoImg} alt="vlmoney" />
      <button>
        Nova Transação
      </button>
    </header>
  )
}