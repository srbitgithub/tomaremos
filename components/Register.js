const RegisterComponent = () => {
    return (
      <div className='container mt-3'>
      <div className='col-6 mx-auto'>
        <h4 className='text-dark text-center'>Registra tu local aquí</h4>
            <div className='input-group mb-0'>
              <input type='text' className='form-control mb-3' placeholder='Nombre del local' aria-label='Username' aria-describedby='basic-addon1'></input>
            </div>

            <div className='input-group mb-3'>
              <span className='input-group-text' id='basic-addon1'>@</span>
              <input type='email' className='form-control' placeholder='Introduce tu email' aria-label='Username' aria-describedby='basic-addon1'></input>
            </div>
            <div className='input-group mb-2'>
              <input type='password' className='form-control' placeholder='Contraseña (mínimo 6 caracteres)' aria-label='Username' aria-describedby='basic-addon1'></input>
            </div>
            <div className='input-group mb-0'>
              <input type='password' className='form-control mt-2' placeholder='Repite tu contraseña' aria-label='Username' aria-describedby='basic-addon1'></input>
            </div>
            <button className='btn btn-success btn-block mt-3' type='button'>Registrarme Ahora Gratis</button>
          </div>
      </div>
    )
  }

  export default RegisterComponent