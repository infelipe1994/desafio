import React, { useRef } from 'react'
import PropTypes from 'prop-types'

import { Box } from '@/src/components/Box'
import { Icon } from '@/src/components/Icon'
import { theme } from '@/src/theme'
import { uuid } from '@/src/utilities/uuid'

const containerSize = { height: '4.500rem', width: '4.500rem' }
const iconSize = { height: '3.500rem', width: '3.500rem' }

export const ProfilePicture = ({ setSrc, src }) => {
  const id = useRef(uuid())

  return (
    <Box
      {...containerSize}
      alignItems="center"
      backgroundColor={theme.colors.white}
      border={`1px solid ${theme.colors.water}`}
      display="flex"
      justifyContent="center"
      style={{ cursor: 'pointer' }}
    >
      <label htmlFor={id.current} style={{ cursor: 'pointer', lineHeight: 0 }}>
        {src ? (
          <img alt="Foto de perfil." src={src} style={{ ...containerSize }} />
        ) : (
          <Icon
            {...iconSize}
            aria-label="Selecione uma foto de perfil."
            color={theme.colors.water}
            name="profile"
          />
        )}
        <input
          hidden
          id={id.current}
          onChange={event => {
            const file = event.target.files[0]
            const reader = new FileReader()

            reader.onload = event => setSrc(event.target.result)
            reader.readAsDataURL(file)
          }}
          type="file"
        />
      </label>
    </Box>
  )
}

ProfilePicture.propTypes = {
  setSrc: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired
}
