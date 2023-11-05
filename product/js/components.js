const components = {}; // Đùng để lưu trữ giao diện các màn hình tại đây

components.registerScreen`
<div class="register-container">
    <div class="aside-right">
      <div class="header">
        <h3></h3>
      </div>

      <form id="register-form">
        <div class="input-name-wrapper">
          <div class="input-wrapper">
            <input type="text" name="firstName" placeholder="Enter username">
            <div class="error" id="first-name-error"></div>
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
          <input type="password" name="confirmPassword" placeholder="Confirm Password">
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


`