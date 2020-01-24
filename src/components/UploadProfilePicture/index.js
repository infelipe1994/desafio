import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { Button } from '@/src/components/Button'
import { ProfilePicture } from '@/src/components/UploadProfilePicture/ProfilePicture'
import { Stack } from '@/src/components/Stack'

export const UploadProfilePicture = ({ onUploadPicture, pictureSrc }) => {
  const [src, setSrc] = useState(pictureSrc)

  return (
    <Stack direction="row" spaceBetween="x3">
      <ProfilePicture setSrc={setSrc} src={src} />
      <Button
        disabled={!src}
        isOutlined
        onClick={() => onUploadPicture(src)}
        type="button"
      >
        Enviar foto
      </Button>
    </Stack>
  )
}

UploadProfilePicture.defaultProps = {
  pictureSrc: ''
}

UploadProfilePicture.propTypes = {
  onUploadPicture: PropTypes.func.isRequired,
  pictureSrc: PropTypes.string
}
