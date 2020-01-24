import React from 'react'

import { UploadProfilePicture } from '@/src/components/UploadProfilePicture'

export default {
  component: UploadProfilePicture,
  title: 'UploadProfilePicture'
}

export const Default = () => (
  <UploadProfilePicture
    onUploadPicture={() => {
      alert('Sua foto de perfil enviada com sucesso.')
    }}
  />
)
