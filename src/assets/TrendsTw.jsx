import { useState } from "react"

// eslint-disable-next-line react/prop-types
export function TwitterTrends({name, children, posts}){
    const [viewModal, setViewModal] = useState(false)
    const modalView = viewModal ? 'viewModal' : ''

    function activeModal() {
        setViewModal(!viewModal)
    }   

    if(viewModal){
        document.querySelector('.tw-TrendsCard').addEventListener('click',activeModal)
    }
    return(
        <section className="card-trend">
            <header className="tw-headTrends">
                <span>{children}</span>
                <strong>{name}</strong>
                <span>{posts ?`${posts} posts`: ''}</span>
            </header>
            <button className="tw-buttonTrends" onClick={activeModal}>
                <ion-icon name="ellipsis-horizontal-outline" style={{fontSize:"16px"}}></ion-icon>
            </button>
            <article className={`tw-modalTrends ${modalView}`} >
                <InfoModal>No estoy interesado</InfoModal>
                <InfoModal>El contenido es spam</InfoModal>
            </article>
        </section>
    )
}

// eslint-disable-next-line react/prop-types
function InfoModal({children}){
    return (
        <strong className="tw-infoModal"><ion-icon name="sad-outline" style={{fontSize:"20px"}}></ion-icon> {children}</strong>
    )
}