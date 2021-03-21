const CardButton = ({titleCard, textCard, bgColor, textColor, isShadow, isRounded}) => {
  const classValueDiv = 'card container-sm d-grid ' + bgColor + ' ' + isShadow + ' ' + isRounded
  const classValueH4 = 'fw-bold ' + textColor
  const classValueP = 'card-text mt-0 ' + textColor
  return (
    <div className={classValueDiv}>
      {/* </div><img src="..." className="card-img-top" alt="..."> */}
      <div className="card-body">
        <h4 className={classValueH4}>{titleCard}</h4>
        <p className={classValueP}>{textCard}</p>
      </div>
    </div>
  )
}

export default CardButton
