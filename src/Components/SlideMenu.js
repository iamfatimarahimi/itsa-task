import '../App.css'
import './Button.css'
import logoPic from '../images/logo.png';
import {Link} from 'react-router-dom'
export default function Menu(){
  return(
    <div className="header">
      <div className="row">
        <div className="col-sm-4 col-md-12">
              <div className="buttons">
              <button id='login'>ثبت نام/ورود</button>
              <button id='submit'>ثبت سفارش</button>
       </div>
        </div>
      </div>
         
<div class="fixed">
      <nav class="navbar navbar-expand-lg ">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link to={"/"} className='nav-link'>خانه</Link>
            </li>
            <li class="nav-item">
              <Link to={"/Contact"} className='nav-link'>تماس با ما</Link>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                دسته بندی خدمات
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">مراقبت پوستی</a></li>
                <li><a class="dropdown-item" href="#">تمیزی خانه</a></li>
                <li><a class="dropdown-item" href="#">تعمیر</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
     <div className="logo ">
          <img src={logoPic} alt="logo image" />
        </div>
    </div>
    )
}