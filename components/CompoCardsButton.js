import CardButton from './FeaturesCardButton'

const CompoCardsButton = () => {
  return (
    <div className='container '>
        <div className='col-8 mx-auto'>
            <div className='row mt-3'>
                <CardButton
                    titleCard='PLAN BASIC'
                    textCard='Dispondrás de platos y menús infinitos, cambio de menú diario, código QR para clientes, actualización de la carta desde cualquier dispositivo de sobremesa o móvil.'
                    bgColor='bg-secondary'
                    textColor='text-light'
                    buttonColor='btn-primary'
                    buttonText='Saber más'
                    price='GRATIS PARA SIEMPRE'
                    isRounded='rounded'
                />
            </div>
            <div className='row mt-3'>
                <CardButton
                    titleCard='PLAN PREMIUM TRIMESTRAL'
                    textCard='Además de todo el Plan Basic, podrás subir una foto para cada plato, los clientes podrán realizar los pedidos desde el local con la aplicación y recibirás pedidos para reparto a domicilio.'
                    bgColor='bg-secondary'
                    textColor='text-light'
                    buttonColor='btn-primary'
                    buttonText='Saber más'
                    price='19€/Mes (un solo pago)'
                    isRounded='rounded'
                />
            </div>
            <div className='row mt-3'>
                <CardButton
                    titleCard='PLAN PREMIUM SEMESTRAL'
                    textCard='Dispondrás de platos y menús infinitos, cambio de menú diario, código QR para clientes, actualización de la carta desde cualquier dispositivo de sobremesa o móvil.'
                    bgColor='bg-secondary'
                    textColor='text-light'
                    buttonColor='btn-primary'
                    buttonText='Saber más'
                    price='14€/Mes (un solo pago)'
                    isRounded='rounded'
                />
            </div>
            <div className='row mt-3'>
                <CardButton
                    titleCard='PLAN PREMIUM ANUAL'
                    textCard='Además de todo el Plan Basic, podrás subir una foto para cada plato, los clientes podrán realizar los pedidos desde el local con la aplicación.'
                    bgColor='bg-secondary'
                    textColor='text-light'
                    buttonColor='btn-primary'
                    buttonText='Saber más'
                    price='9€/Mes (un solo pago)'
                    isRounded='rounded'
                />
            </div>
        </div>
    </div>
  )
}

export default CompoCardsButton