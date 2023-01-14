export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUrl = 'http://localhost:3000/'

const clientId = "ed63cd2af87648b4bf81a9658b437e6c";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
]

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`