import { useState } from "react";

function App() {
  const [categoria, setCategoria] = useState("Todos");

  const produtos = [
    {
      id: 1,
      nome: "Café Espresso",
      categoria: "Cafés",
      descricao: "Café intenso e preparado na hora.",
      preco: "R$ 6,00",
      imagem:
       "/imagens/cafeexpresso.jpg"
    },
    {
      id: 2,
      nome: "Cappuccino",
      categoria: "Cafés",
      descricao: "Cappuccino cremoso com espuma de leite.",
      preco: "R$ 10,00",
      imagem:
        "/imagens/cappuccino.jpg"
    },
    {
      id: 3,
      nome: "Café com Leite",
      categoria: "Cafés",
      descricao: "Café com leite preparado na hora.",
      preco: "R$ 8,00",
      imagem:
        "/imagens/cafecomleite.jpg"
    },
    {
      id: 4,
      nome: "Chocolate Quente",
      categoria: "Bebidas",
      descricao: "Chocolate quente cremoso e delicioso.",
      preco: "R$ 11,00",
      imagem:
        "/imagens/chocolatequente.webp"
    },
    {
      id: 5,
      nome: "Suco Natural",
      categoria: "Bebidas",
      descricao: "Suco natural preparado na hora.",
      preco: "R$ 8,00",
      imagem:
        "/imagens/suco.jpg"
    },
    {
      id: 6,
      nome: "Bolo de Chocolate",
      categoria: "Doces",
      descricao: "Bolo caseiro de chocolate.",
      preco: "R$ 9,00",
      imagem:
        "/imagens/bolodechocolate.jpg"
    },
    {
      id: 7,
      nome: "Cheesecake",
      categoria: "Doces",
      descricao: "Cheesecake cremoso com cobertura.",
      preco: "R$ 12,00",
      imagem:
        "/imagens/cheesecake.jpg"
    },
    {
      id: 8,
      nome: "Cookie",
      categoria: "Doces",
      descricao: "Cookie crocante por fora e macio por dentro.",
      preco: "R$ 7,00",
      imagem:
        "/imagens/cookie.webp"
    }
  ];

  const categorias = ["Todos", "Cafés", "Bebidas", "Doces"];

  const produtosFiltrados =
    categoria === "Todos"
      ? produtos
      : produtos.filter((produto) => produto.categoria === categoria);

  return (
    <div>
      <header className="cabecalho">
        <div className="container menu">
          <a href="#inicio" className="logo">
           Café Aroma
          </a>

          <nav>
            <a href="#inicio">Início</a>
            <a href="#sobre">Sobre</a>
            <a href="#cardapio">Cardápio</a>
            <a href="#contato">Contato</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="container hero-conteudo">
            <div className="hero-texto">
              <span className="hero-tag">
                CAFÉ ESPECIAL TODOS OS DIAS
              </span>

              <h1>
                Uma pausa
                <br />
                saborosa para
                <br />
                o seu dia.
              </h1>

              <p>
                Cafés especiais, doces artesanais e um ambiente
                acolhedor para aproveitar cada momento.
              </p>

              <a href="#cardapio" className="botao">
                Conheça nosso cardápio
              </a>
            </div>

            <div className="hero-imagem">
              <img
                src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1000&q=85"
                alt="Interior aconchegante de uma cafeteria"
              />
            </div>
          </div>
        </section>

        <section className="sobre" id="sobre">
          <div className="container sobre-conteudo">
            <div className="sobre-texto">
              <span className="titulo-pequeno">
                NOSSA HISTÓRIA
              </span>

              <h2>
                Mais que café,
                <br />
                um lugar para
                <br />
                se encontrar.
              </h2>

              <p>
                A Cafeteria Aroma nasceu para criar um espaço
                aconchegante onde bons cafés e bons momentos
                pudessem estar juntos.
              </p>

              <p>
                Selecionamos nossos ingredientes com carinho
                para oferecer uma experiência especial em cada
                visita.
              </p>
            </div>

            <div className="sobre-imagem">
              <img
                src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=900&q=85"
                alt="Cafeteria Aroma"
              />
            </div>
          </div>
        </section>

        <section className="cardapio" id="cardapio">
          <div className="container">
            <div className="titulo-secao">
              <span className="titulo-pequeno">
                ESCOLHA SEU FAVORITO
              </span>

              <h2>Nosso Cardápio</h2>

              <p>
                Sabores preparados para deixar seu dia ainda melhor.
              </p>
            </div>

            <div className="filtros">
              {categorias.map((item) => (
                <button
                  key={item}
                  className={categoria === item ? "ativo" : ""}
                  onClick={() => setCategoria(item)}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="produtos">
              {produtosFiltrados.map((produto) => (
                <article className="produto" key={produto.id}>
                  <div className="produto-imagem">
                    <img
                      src={produto.imagem}
                      alt={produto.nome}
                    />
                  </div>

                  <div className="produto-conteudo">
                    <span>{produto.categoria}</span>

                    <h3>{produto.nome}</h3>

                    <p>{produto.descricao}</p>

                    <strong>{produto.preco}</strong>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contato" id="contato">
          <div className="container contato-conteudo">
            <div className="contato-texto">
              <span className="titulo-pequeno">
                VENHA NOS VISITAR
              </span>

              <h2>
                Seu próximo café começa aqui.
              </h2>

              <p>
                Estamos esperando você para um café e uma boa
                conversa.
              </p>

              <div className="informacoes">
                <div>
                  <strong>Endereço</strong>
                  <p>Rua dos Cafés, 100</p>
                </div>

                <div>
                  <strong>Horário</strong>
                  <p>Segunda a sábado, das 8h às 20h</p>
                </div>

                <div>
                  <strong>Telefone</strong>
                  <p>(19) 99999-9999</p>
                </div>
              </div>
            </div>

            <div className="contato-card">
              <div className="contato-imagem">
                <img
                  src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=85"
                  alt="Café servido na cafeteria"
                />
              </div>

              <h3>Vamos tomar um café?</h3>

              <p>
                Faça uma visita e conheça a Cafeteria Aroma.
              </p>

              <a href="#inicio" className="botao botao-claro">
                Voltar ao início
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container rodape">
          <div className="logo-rodape">
            ☕ Aroma
          </div>

          <p>© 2026 Cafeteria Aroma</p>
        </div>
      </footer>
    </div>
  );
}

export default App