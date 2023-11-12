const components = {}; // Đùng để lưu trữ giao diện các màn hình tại đây


components.nav = `
<div class="nav">
<ul>
  <li class="nav home">
    <a href="#">Home Page</a>
    </li>

    <li class="nav home">
      <a href="#">Contact</a>
    </li>
    
    <li class="nav home">
      <a href="#">About us</a>
    </li>
    
    <li class="nav home">
    <a href="#">List Manga</a>
    </li>
    <li class="nav home">
    <a href="#">Login</a>
    </li>
  </ul>
</div>`

components.registerScreen = `
<div class="nav">
  <ul>
    
    <li class="nav home">
      <a href="#">Home Page</a>
      </li>

      <li class="nav home">
        <a href="#">Contact</a>
      </li>
      
      <li class="nav home">
        <a href="#">About us</a>
      </li>
      
    </ul>
    
  </div>

<div class="register-container">
    <div class="aside-right">
      <div class="header">
        <h3>Join Manga</h3>
      </div>

      <form id="register-form">
        <div class="input-name-wrapper">
          <div class="input-wrapper">
            <input type="text" name="firstName" placeholder="Enter Firstname">
            <div class="error" id="first-name-error"></div>
          </div>

          <div class="input-wrapper">
            <input type="text" name="lastName" placeholder="Enter Lastname">
            <div class="error" id="last-name-error"></div>
          </div>

        </div>

        <div class="input-wrapper">
          <input type="email" name="email" placeholder="Enter Email">
          <div class="error" id="email-error"></div>
        </div>

        <div class="input-wrapper">
          <input type="password" name="password" placeholder="Enter Password">
          <div class="error" id="password-error"></div>
        </div>

        <div class="input-wrapper">
          <input type="password" name="confirmPassword" placeholder="Enter Confirm Password">
          <div class="error" id="confirm-password-error"></div>
        </div>

        <div class="form-action">
          <span class="cursor" id="redirect-to-login">
            Already have an account? Login
          </span>

          <button class="btn" type="submit">
            Register
          </button>
        </div>

      </form>
    </div>
  </div>
`;


components.loginScreen = `
<div class="nav">
  <ul>
    
    <li class="nav home">
      <a href="#">Home Page</a>
      </li>

      <li class="nav home">
        <a href="#">Contact</a>
      </li>
      
      <li class="nav home">
        <a href="#">About us</a>
      </li>
      
    </ul>

  </div>

<div class="login-container">
    <div class="aside-right">
      <div class="header">
        <h3>Join Manga</h3>
      </div>

      <form id="login-form">
        <div class="input-wrapper">
          <input type="email" name="email" placeholder="Enter Email">
          <div class="error" id="email-error"></div>
        </div>

        <div class="input-wrapper">
          <input type="password" name="password" placeholder="Enter Password">
          <div class="error" id="password-error"></div>
        </div>

        <div class="form-action">
          <span class="cursor" id="redirect-to-register">
            Don't have an account? Register
          </span>

          <button class="btn" type="submit">
            Login
          </button>
        </div>

      </form>
    </div>
  </div>
`;


components.homeScreen = `
<div class="nav">
  <ul>
    
    <li class="nav home">
      <a href="#">Home Page</a>
      </li>

      <li class="nav home">
        <a href="#">Contact</a>
      </li>
      
      <li class="nav home">
        <a href="#">About us</a>
      </li>
      
      <li class="nav home">
      <a href="#">List Manga</a>
      </li>
      <li class="nav home">
      <a href="#">Login</a>
      </li>
    </ul>
    
    
    
  </div>

`