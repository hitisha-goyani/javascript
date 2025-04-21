function navbar(){

    return `
        <nav class="navbar navbar-expand-lg bg-dark ">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand text-white" href="#">Navbar</a>
    <div class="collapse navbar-collapse" >
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 text-white ">
        <li class="nav-item text-white">
          <a class="nav-link activ text-white" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item text-white">
          <a class="nav-link text-white" href="#">Link</a>
        </li>
        <li class="nav-item text-white">
          <a class="nav-link disabled text-white" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    `
}

export default navbar