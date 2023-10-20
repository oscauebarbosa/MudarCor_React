import css from "./CardProduto.module.css"

function CardProduto(prop) {
    return (
        <div className={css.bg}>
            <h1>{prop.nome}</h1>
            <p>{prop.desc}</p>
            <h3>{prop.valor}</h3>
        </div>
    )
}

export default CardProduto