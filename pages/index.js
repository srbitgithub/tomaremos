import Layout from '../components/Layout'
import LogButtons from '../components/LogButtons'
import CompoCards from '../components/CompoCards'
import CompoCardsButton from '../components/CompoCardsButton'
import FeaturesCards from '../components/FeaturesCards'
import Footer from '../components/Footer'

//import AppName from '../pages/components/appName'

const Index =()=> (
  <Layout>
    <div className="container col-10">
      <div className="col">
        <div className="row">
          <div className="col-8">
            <div className='m-3'>
              <FeaturesCards 
                textCard='Con tomaremos.com tendrás tu carta digital completamente personalizable. Podrás poner menús diarios, podrás añadir y quitar platos de la lista como, cuando y donde quieras. Accede desde un ordenador o desde cualquier dispositivo móvil.'
                titleCard='¿Cansado de un simple y estático pdf para presentar tu carta?'
                bgColor='bg-primary'
                textColor='text-light'
              />
            </div>
            <div className='pb-3'>
              <CompoCards />
            </div>
              <CompoCardsButton />
          </div>
          <div className="col-4">
            <div className="mt-3">
              <LogButtons />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='mt-4'>
      <Footer />
    </div>
  </Layout>
)
export default Index


