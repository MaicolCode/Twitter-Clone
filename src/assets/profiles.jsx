import { useState } from "react";

export function Profiles({ name } ) {
  let [isFollow, setIsFollow] = useState(false);

  const text = isFollow ? "Siguiendo": "Seguir"

  const classButton = isFollow ? "tw-followCard-button is-follow" : "tw-followCard"
  const userName = name

  const state = ()=>{
    setIsFollow(!isFollow)
  }
  
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        alignItems: "center",
        marginTop: 10,
      }}>
      <article style={{ display: "flex", alignItems: "center" }}>
        <img
          alt={ name }
          src={`https://unavatar.io/${name}`}
          style={{ width: 60, height: 60, borderRadius: 100 }}
        />
        <section style={{ lineHeight: 0.5, marginInlineStart: 10 }}>
          <h2>{ userName }</h2>
          <h4>@{ name }</h4>
        </section>
      </article>
      <section style={{ marginInlineStart: "5%" }}>
        <button
          style={{ minWidth: "auto", height: 50, borderRadius: 50 }}
          className={classButton}
          onClick={state}>
          <span className={"msgFollowing"}>{text}</span>
          <span className={"textRemove"}>Dejar de seguir</span>
        </button>
      </section>
    </div>
  );
}
