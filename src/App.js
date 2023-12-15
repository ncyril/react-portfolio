import HomePage from "./homepage";
import About from "./about";
import contact from "./contact";
import projects from "./projects";

function App() {
  return (
    //Basically the body
    <div className="App"> 
     
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand" href="#">Nigel Cyril</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="#about">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#skills">Skills</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#projects">Projects</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <section id="about" class="py-5">
      <div class="container">
        <h2 class="text-center mb-4">About Me</h2>
        <div class="row">
          <div class="col-md-6 about-content">
            <p>
              Hi, I'm Nigel.<br />
              I'm a Full Stack Developer Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Laboriosam vel veritatis cupiditate sapiente
              perspiciatis, iure ipsam consequuntur labore odio hic.
            </p>
          </div>
          <div class="col-md-6">
            <img
              src="https://scontent-lga3-2.xx.fbcdn.net/v/t39.30808-6/332806793_948479603192134_575194367246201795_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=npilIlDt44UAX8afva-&_nc_ht=scontent-lga3-2.xx&oh=00_AfBJmxtZUnWGoifzVT_eHHJbHe21E8OwcEBQoiQu54bC4Q&oe=657D1BB7"
              width="300"
              alt="Profile Picture"
              class="img-fluid rounded-circle"
            />
          </div>
        </div>
      </div>
    </section>

    <section id="skills" class="bg-light border-light py-5">
      <div class="container">
        <h2 class="text-center mb-4">Skills</h2>
        <div class="row">
          <div class="col-md-4">
            <h4>Frontend</h4>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Bootstrap</li>
            </ul>
          </div>
          <div class="col-md-4">
            <h4>Backend</h4>
            <ul>
              <li>Node.js</li>
              <li>Express</li>
              <li>Python</li>
              <li>SQL</li>
              <li>MongoDB</li>
            </ul>
          </div>
          <div class="col-md-4">
            <h4>Other</h4>
            <ul>
              <li>Git</li>
              <li>RESTful APIs</li>
              <li>Responsive Design</li>
              <li>Agile Methodologies</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section id="projects" class="py-5">
      <div class="container">
        <h2 class="text-center mb-4">Projects</h2>

        <div class="row">
          <div class="col-md-4 mb-4">
            <div class="card">
              <img src="project1.jpg" alt="Project 1" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">Project 1</h5>
                <p class="card-text">Description of Project 1</p>
                <a href="#" class="btn btn-primary">View Project</a>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="card">
              <img src="project2.jpg" alt="Project 2" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">Project 2</h5>
                <p class="card-text">Description of Project 2</p>
                <a href="#" class="btn btn-primary">View Project</a>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="card">
              <img src="project3.jpg" alt="Project 3" class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">Project 3</h5>
                <p class="card-text">Description of Project 3</p>
                <a href="#" class="btn btn-primary">View Project</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="contact" class="bg-dark text-white py-5">
      <div class="container">
        <h2 class="text-center mb-4">Contact</h2>
        <div class="row">
          <div class="col-md-6 mx-auto">
            <form action="#">
              <div class="form-group">
                <label for="name">Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div class="form-group">
                <label for="message">Message</label>
                <textarea
                  class="form-control"
                  id="message"
                  rows="5"
                  placeholder="Enter your message"
                  required
                ></textarea>
              </div>
              <button type="submit" class="btn btn-primary btn-block">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <section id="social-media" class="bg-light py-5">
      <div class="container text-center">
        <h2 class="mb-4">Connect with me:</h2>
        <div class="social-icons">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            class="social-icon"
          >
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com/" target="_blank" class="social-icon">
            <i class="fab fa-twitter"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/"
            target="_blank"
            class="social-icon"
          >
            <i class="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </section>

    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    </div>
  );
}

export default App;
