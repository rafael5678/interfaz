export default function Home() {
  return (
    <div className="illustration-container">
      {/* Columna Ilustración con Fondo Rosado */}
      <div className="illustration-column">
        <div className="illustration-overlap">
          <img src="/images/illustration.png" alt="Ilustración de login" />
        </div>
      </div>

      {/* Columna Formulario */}
      <div className="form-column">
        {/* Header */}
        <div className="login-header">
          <h1>Sign in</h1>
          <p className="form-subtitle">Sign in with Open account</p>
        </div>

        {/* Botones sociales */}
        <div className="social-login">
          <button className="social-btn">
            <img src="/images/google.png" alt="Google" />
            Google
          </button>
          <button className="social-btn">
            <img src="/images/apple.png" alt="Apple" />
            Apple ID
          </button>
        </div>

        {/* Divider */}
        <div className="divider">OR CONTINUE WITH EMAIL</div>

        {/* Subtítulo dirección email */}
        <p className="email-subtitle">ADDRESS</p>

        {/* Formulario */}
        <form>
          <div className="input-group">
            <label htmlFor="email">EMAIL</label>
            <input 
              type="email" 
              id="email"
              placeholder="tune@uili.net" 
              required 
            />
          </div>
          
          <div className="input-group">
            <label htmlFor="password">CONTRASEÑA</label>
            <input 
              type="password" 
              id="password"
              placeholder="・・・・・・・・" 
              required 
            />
          </div>
          
          <button type="submit">START TRADING</button>
        </form>

        {/* Link abajo */}
        <div className="bottom-text">
          Don't have an account? <a href="#">Sign up</a>
        </div>

        {/* Footer adicional */}
        <div className="login-footer">
          <a href="#">Terms of Practice</a>
          
          <a href="#">Privacy Policy</a>

          <a href="#">Help Practice</a>
        </div>
      </div>
    </div>

  )


}