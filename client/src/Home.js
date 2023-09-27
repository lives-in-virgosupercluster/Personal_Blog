import { Link } from "react-router-dom";



function Home(){
return (
    <main>
      <div className="content">
      <header>
        MyBlog
        </header>
        <nav>
        <Link to='/Login' style={{ textDecoration: 'none' }}>
          Login</Link>
          <Link to='/Register' style={{ textDecoration: 'none' }}>
            Register</Link>
        </nav>
        
        </div>
      
      <div className="post">
        <div className="posts">
          <img src="https://www.pluralsight.com/content/dam/pluralsight2/siege-blog-assets/scrum-SAFe-thumbnail.png" alt=""></img>
          
          <p><header>
            ChatWithGit
          </header>A relative newcomer on the ChatGPT store, ChatWithGit allows you to search GitHub with ChatGPT to find code that can help you out. It provides a snippet of the code and a link to the actual repository. Needless to say, this is a big time saver when you are trying not to reinvent the wheel.</p>

        </div>
        <div className="posts">
          <img src="https://www.pluralsight.com/content/dam/pluralsight2/siege-blog-assets/scrum-SAFe-thumbnail.png" alt=""></img>
          
          <p><header>
            ChatWithGit
          </header>A relative newcomer on the ChatGPT store, ChatWithGit allows you to search GitHub with ChatGPT to find code that can help you out. It provides a snippet of the code and a link to the actual repository. Needless to say, this is a big time saver when you are trying not to reinvent the wheel.</p>

        </div>
        <div className="posts">
          <img src="https://www.pluralsight.com/content/dam/pluralsight2/siege-blog-assets/scrum-SAFe-thumbnail.png" alt=""></img>

          <p><header>
            ChatWithGit
          </header>A relative newcomer on the ChatGPT store, ChatWithGit allows you to search GitHub with ChatGPT to find code that can help you out. It provides a snippet of the code and a link to the actual repository. Needless to say, this is a big time saver when you are trying not to reinvent the wheel.</p>

        </div>
      </div>
    </main>
)
}
export default Home;