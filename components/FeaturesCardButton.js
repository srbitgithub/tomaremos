const Card = ({titleCard, textCard, bgColor, textColor, isShadow, isRounded, buttonColor, buttonText, price}) => {
    const classValueDiv = 'card container-sm d-grid ' + bgColor + ' ' + isShadow + ' ' + isRounded
    const classValueH2 = 'fw-bold text-center ' + textColor
    const classValueP = 'card-text mt-0 ' + textColor
    const classButton = 'btn btn-block ' + buttonColor + ' ' + buttonText + ' ' + isRounded
    return (
      <div className={classValueDiv}>
        {/* </div><img src="..." className="card-img-top" alt="..."> */}
        <div className="card-body">
          <h2 className={classValueH2}>{titleCard}</h2>
          <h3 className={classValueH2}>{price}</h3>
          <p className={classValueP}>{textCard}</p>
          <button className={classButton}>Saber más</button>
        </div>
      </div>
    )
  }
  
  export default Card
