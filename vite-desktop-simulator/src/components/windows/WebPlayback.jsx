import React, { useState, useEffect } from 'react'
import './WebPlayback.css'
import { Volume2 } from 'lucide-react'


const track = {
  name: '',
  album: {
    images: [{ url: '' }]
  },
  artists: [{ name: '' }]
}

const formatTime = (ms) => {
  const secs = Math.floor(ms / 1000)
  const m = Math.floor(secs / 60)
  const s = secs % 60
  return `${m}:${s.toString().padStart(2, '0')}`
}


function WebPlayback (props) {
  const [player, setPlayer] = useState(undefined)
  const [is_paused, setPaused] = useState(false)
  const [is_active, setActive] = useState(false)
  const [current_track, setTrack] = useState(track)
  const [volume, setVolume] = useState(0.5)
  const [duration, setDuration] = useState(0)
const [position, setPosition] = useState(0)


  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://sdk.scdn.co/spotify-player.js'
    script.async = true

    

    document.body.appendChild(script)

    window.onSpotifyWebPlaybackSDKReady = () => {
      const player = new window.Spotify.Player({
        name: 'Web Playback SDK',
        getOAuthToken: cb => {
          cb(props.token)
        },
        volume: 0.5
      })

      setPlayer(player)

      player.addListener('ready', async ({ device_id }) => {
        console.log('Ready with Device ID', device_id)

        // transfer playback to this device
        await fetch('https://api.spotify.com/v1/me/player', {
          method: 'PUT',
          headers: {
            Authorization: `Bearer ${props.token}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ device_ids: [device_id], play: false })
        })

        // fetch whatever is currently playing on your account
        const res = await fetch(
          'https://api.spotify.com/v1/me/player/currently-playing',
          {
            headers: { Authorization: `Bearer ${props.token}` }
          }
        )

        if (res.status === 200) {
          const data = await res.json()
          if (data?.item) setTrack(data.item) // show current track immediately
        }
      })

      player.addListener('not_ready', ({ device_id }) => {
        console.log('Device ID has gone offline', device_id)
      })

      player.addListener('player_state_changed', state => {
        if (!state) {
          return
        }

        setTrack(state.track_window.current_track)
        setPaused(state.paused)
        setDuration(state.duration)
        setPosition(state.position)

        player.getCurrentState().then(state => {
          !state ? setActive(false) : setActive(true)
        })
      })
      
const interval = setInterval(async () => {
  const state = await player.getCurrentState()
  if (state && !state.paused) {
    setPosition(state.position)
  }
}, 1000)
      player.connect()

      return () => clearInterval(interval)
    }
  }, [])

  return (
    <>
      <div className='container'>
        <div className='main-wrapper'>
          {current_track.album.images?.[0]?.url ? (
            <img
              src={current_track.album.images[0].url}
              className='now-playing__cover'
              alt={current_track.name || 'Album art'}
            />
          ) : (
            <div className='now-playing__cover now-playing__cover--placeholder' />
          )}

          <div className='now-playing__side'>
            <div className='now-playing__name'>{current_track.name}</div>

            <div className='now-playing__artist'>
              {current_track.artists[0].name}
            </div>

            <div className='status-wrapper'>
  <span className='status-time'>{formatTime(position)}</span>
  <input
    type='range'
    min='0'
    max={duration}
    value={position}
    onChange={(e) => {
      const val = parseFloat(e.target.value)
      player.seek(val)
      player && player.seek(val)
    }}
  />
  <span className='seek-time'>{formatTime(duration)}</span>
</div>

            <div className='volume-wrapper'>
  <Volume2 size={16} />
  <input
    type='range'
    min='0'
    max='1'
    step='0.01'
    value={volume}
    onChange={(e) => {
      const val = parseFloat(e.target.value)
      setVolume(val)
      player && player.setVolume(val)
    }}
  />
</div>

            <button
              className='btn-spotify'
              onClick={() => {
                player && player.previousTrack()
              }}
            >
              &lt;&lt;
            </button>

            <button
              className='btn-spotify'
              onClick={() => {
                player && player.togglePlay()
              }}
            >
              {is_paused ? 'PLAY' : 'PAUSE'}
            </button>

            <button
              className='btn-spotify'
              onClick={() => {
                player && player.nextTrack()
              }}
            >
              &gt;&gt;
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default WebPlayback
