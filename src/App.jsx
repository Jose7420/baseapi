import { useEffect, useState } from 'react';
import './App.css';
import Post from './componentes/Post'
import { getAllPosts } from './servicios/posts/getAllPosts';
import AjaxLoader from './componentes/AjaxLoader';

function App() {

  // Estado con la lista de post que recuperamos de la REST API
  const [listaPost, setListaPost] = useState([]);
  const [buscando, setbuscando] = useState(false);


  function obtenerPosts() {
    setbuscando(true);
    

    // Usamos el servicio de obtención de posts que hemos creado
    getAllPosts().then(posts => {

      //Cargamos los post en el estado del componente
      setListaPost(posts);
      setbuscando(false);



    });

  }

  // Llamamos a la función de extracción de datos con un useEffect
  // para que solo se ejecute una vez
  useEffect(obtenerPosts, []);

  // Función encargada de llamar al componente Post con el post
  // que recibe como parámetro implícito de la función map
  function muestraPost(post) {

    return <Post key={post.id} post={post}></Post>;
  }
  return (




    <div id="divPost"> 
      {buscando ? <AjaxLoader></AjaxLoader> :
        <ul>
          <h1>Post</h1>
          {listaPost.map(muestraPost)}
        </ul>
      }
    </div>
  );
}
export default App;
