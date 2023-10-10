import { Post } from './Post';

export function App() {
  return (
    <div>
      <Post 
        author="Kevin Juliano" 
        content="Eu sou o melhor jogador de futebol da minha sala da FATEC." 
      />
      <Post 
        author="Vinicius Oliveira" 
        content="Eu sou o pior jogador de futebol dentre meus amigos." 
      />
    </div>
  )
}
