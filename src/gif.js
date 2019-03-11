import React from 'react'

const Gif = ({ url }) => (
  <iframe src={ url } width="480" height="270" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
  )

export default Gif;