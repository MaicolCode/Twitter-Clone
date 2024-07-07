// eslint-disable-next-line react/prop-types
export function TwitterTrends({name, children, posts}){

    return(
        <section className="card-trend">
            <header className="tw-headTrends">
                <span>{children}</span>
                <strong>{name}</strong>
                <span>{posts ?`${posts} posts`: ''}</span>
            </header>
            <button className="tw-buttonTrends">
                <ion-icon name="ellipsis-horizontal-outline" style={{fontSize:"16px"}}></ion-icon>
            </button>
        </section>
    )
}