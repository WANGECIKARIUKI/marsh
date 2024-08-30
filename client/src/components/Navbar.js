import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <Link to = "/" class="navbar-brand">Marshware</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to = "./" class="nav-link active" aria-current="page">Home</Link>
        </li>
        <li class="nav-item">
          <Link to = './General Features' class="nav-link">General Features</Link>
        </li>
        <li class="nav-item dropdown">
          <Link to = './Social-media' class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Social Media
          </Link>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Whatsapp</a></li>
            <li><a class="dropdown-item" href="#">Twitter</a></li>
            <li><a class="dropdown-item" href="#">SnapChat</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <Link to = './Dashboard' class="nav-link">Dashboard</Link>
        </li>
        <li class="nav-item">
          <Link to = './Signup' class="nav-link">Signup</Link>
        </li>
        <li class="nav-item">
          <Link to = './Login' class="nav-link">Login</Link>
        </li>
        <li class="nav-item">
          <Link to = './Calendar' class="nav-link">Calendar</Link>
        </li>
        <li class="nav-item">
          <Link to = './Contacts' class="nav-link">Contacts</Link>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
)};
export default Navbar;