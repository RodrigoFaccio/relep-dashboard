import DashboardComun from "./pages/DashboardComun";
//@ts-ignore
function App() {
  return (
    <div>
    <h2>Player de Vídeo Simples em React</h2>
    <video controls width="600">
      <source src="file:///Users/rodrigofacio/Downloads/uber/uber2.mp4" type="video/mp4" />
      Seu navegador não suporta o elemento de vídeo.
    </video>
  </div>
  );
}

export default App;
