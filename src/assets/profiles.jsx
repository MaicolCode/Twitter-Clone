import { useState } from 'react'

// eslint-disable-next-line react/prop-types
export function ProfilesTwitter({ name }) {
  let [isFollow, setIsFollow] = useState(false)

  const text = isFollow ? 'Siguiendo' : 'Seguir'

  const classButton = isFollow
    ? 'tw-followCard-button is-follow'
    : 'tw-followCard-button'
  const userName = name

  const state = () => {
    setIsFollow(!isFollow)
  }

  return (
    <div className="content-card">
      <header className="tw-header">
        <img alt={name} src={`https://unavatar.io/${name}`} className="tw-Avatar" />
        <div className="tw-info">
          <strong>{userName}</strong>
          <span>@{name}</span>
        </div>
      </header>
      <aside>
        <button className={classButton} onClick={state}>
          <span className={'msgFollowing'}>{text}</span>
          <span className={'textRemove'}>Dejar de seguir</span>
        </button>
      </aside>
    </div>
  )
}
