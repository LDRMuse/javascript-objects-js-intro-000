var playlist = {
  'Marine Boudeau': 'Something',
    'Someone else': 'Something else'
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}
