import 'bootstrap/dist/css/bootstrap.min.css'

function Home() {
  return (
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-4">Bem-vindo à minha página inicial!</h1>
          <p className="lead">Aqui você pode encontrar informações sobre mim e meus projetos.</p>
          <hr className="my-4" />
          <p>Clique no botão abaixo para ver meus projetos.</p>
          <a className="btn btn-primary btn-lg" href="#" role="button">Meus projetos</a>
        </div>
      </div>
  );
}
export default Home
