import { useEffect, useState } from 'react'
import Header from './components/Header'
import Produtos from './containers/Produtos'

import { GlobalStyle } from './styles'
import { Provider } from 'react-redux'
import { store } from './store'
import favoritar from './store/reducers/favoritar'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

export type Favorito = {
  id: number
  nome: string
}

function App() {
  const [produtos, setProdutos] = useState<Produto[]>([])
  const [favoritos, setFavoritos] = useState<Favorito[]>([])

  return (
    <Provider store={store}>
      <GlobalStyle />
      <div className="container">
        <Header />
        <Produtos produtos={produtos} favoritos={favoritos} />
      </div>
    </Provider>
  )
}

export default App
