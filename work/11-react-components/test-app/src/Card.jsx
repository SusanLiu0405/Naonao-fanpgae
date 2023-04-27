function Card({
    className, onReadMore,
    title, pic,
    alt, text, linkText,
  }) { 
    return (
        <div className={className}>
            <h3 className={`${className}__title`}>{title}</h3>
            <img className={`${className}__pic`}
            alt={alt}
            src={pic}
            />
            <p className={`${className}__text`}>{text}</p>
            <button className={`${className}__link`}
            onClick={onReadMore}
            aria-label={`Read More about ${title}`}
            >
            Read More
            </button>
        </div>
    )
}
export default Card;  