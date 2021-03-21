//import Link from 'next/link'

const LogButtons =() => {
    return (
      <div className='container-sm d-grid gap-0 d-md-flex justify-content-md-end mt-1'>
        <div className='col'>
          <div className='d-grid gap-0 shadow border border-secondary border-1 rounded bg-light p-2'>
            <h6 className='text-dark text-center'>Inicio de sesión</h6>
            <div className='input-group mb-2'>
              <span className='input-group-text' id='basic-addon1'>@</span>
              <input type='email' className='form-control' placeholder='Introduce tu email' aria-label='Username' aria-describedby='basic-addon1'></input>
            </div>
            <div className='input-group mb-0'>
              <input type='password' className='form-control' placeholder='Introduce tu contraseña' aria-label='Username' aria-describedby='basic-addon1'></input>
              <a href='register' className='btn btn-block btn-success mt-2'><span>Iniciar Sesión</span></a>
            </div>
          </div>
          <div className='d-grid gap-0 shadow border border-secondary border-1 rounded bg-light p-2 mt-3'>
            <h6 className='text-dark text-center mt-0'>¿Aún no estás registrado?</h6>
            <a href='register' className='btn btn-block btn-success'><span>Registrarme Gratis</span></a>
          </div>
        </div>
      </div>
    )
  }

  export default LogButtons

