import '../styles/auth.scss';

export function Home() {
  return (
    <div id="page-auth">
      <aside>
        <strong>Crie salas de Q&amp;A ao vivo</strong>
        <p>Tire dúvidas da sua audiência em tempo real</p>
      </aside>
      <main>
        <div>
          <img src="" alt="Liveask" />
          <button>
            <img src="" alt="Google Icon" />
            Crie a sua sala com o Google
          </button>
          <div>ou entre em uma sala</div>
          <form>
            <input 
              type="text"
              placeholder="Digite o código da sala"
            />
            <button type="submit">
              Entrar na sala
            </button>
          </form>
        </div>
      </main>
    </div>
  )
}