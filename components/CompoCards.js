import Card from './FeaturesCards'

const CompoCards = () => {
  return (
    <div className='container col'>
      <div className='row'>
        <div className='col mt-3'>
          <Card
          titleCard='Evita infecciones'
          textCard='El sistema más aséptico que existe. Si nadie comparte nada, no hay ningún peligro.'
          bgColor='bg-light'
          textColor='text-dark'
          isShadow='shadow'
          />
        </div>
        <div className='col mt-3'>
          <Card
              titleCard='Rapidez en los cambios'
              textCard='Introduce o retira los elementos de la carta de forma rápida desde tu móvil, ordenador o tablet.'
              bgColor='bg-light'
              textColor='text-dark'
              isShadow='shadow'
          />
        </div>
      </div>
      <div className='row'>
        <div className='col mt-3'>
          <Card
              titleCard='Código QR'
              textCard='Con un simple código QR, tus clientes podrán ver la carta incluso desde sus casas.'
              bgColor='bg-light'
              textColor='text-dark'
              isShadow='shadow'
          />
        </div>
        <div className='col mt-3'>
          <Card
              titleCard='A medida'
              textCard='Con el formato digital de tu carta dispondrás de productos ilimitados (platos, postres, bebidas, etc.)'
              bgColor='bg-light'
              textColor='text-dark'
              isShadow='shadow'
          />
        </div>
      </div>
      <div className='row'>
        <div className='col mt-3'>
          <Card
              titleCard='Menú diario'
              textCard='Podrás cambiar cada día el menú. Y si quieres, guárdarte los diferentes platos, para realizar cambios más rápidamente.'
              bgColor='bg-light'
              textColor='text-dark'
              isShadow='shadow'            
          />
        </div>
        <div className='col mt-3'>
          <Card
              titleCard='Reduce gastos'
              textCard='No tendrás que imprimir más cartas, no tendrás un archivo PDF de carta, dispondrás de tu menú personalizable 100%.'
              bgColor='bg-light'
              textColor='text-dark'
              isShadow='shadow'
          />
        </div>
      </div>
    </div>
  )
}

export default CompoCards