import React from 'react'
import { connect } from 'react-redux'

const Admin = ({ authData }) => {
  return <div>{`PyDash admin user`}</div>
}

export default connect(state => ({ authData: state.user.data }))(Admin)
