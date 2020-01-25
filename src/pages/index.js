import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Router from 'next/router'

import { withTranslation } from '@/i18n'

class Home extends Component {
  static propTypes = {
    t: PropTypes.func.isRequired
  }

  componentDidMount() {
    Router.replace('/register/personal-info')
  }

  render() {
    return <span>{this.props.t('Redirecionando...')}</span>
  }
}

export default withTranslation('common')(Home)
