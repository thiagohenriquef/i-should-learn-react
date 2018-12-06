import React, { Component } from 'react'
import axios from 'axios'
import { baseURL } from '../../resources/users'
import Main from '../template/Main'
import Form from './Form'
import Table from './Table'

const headerProps = {
  icon: 'users',
  title: 'Users',
  subtitle: 'Users Registration: Create, Read, Update, Delete' 
}

const initialState = {
  user: { name: '', email: ''},
  list: []
}
export default class UserCrud extends Component {
  constructor (props) {
    super(props)
    this.state = { ...initialState }

    this.updateField = this.updateField.bind(this)
    this.clear = this.clear.bind(this)
    this.save = this.save.bind(this)
    this.load = this.load.bind(this)
    this.remove = this.remove.bind(this)
  }

  componentWillMount () {
    this.getUsers()
  }

  clear () {
    this.setState({ user: initialState.user })
  }

  getUsers () {
    axios(baseURL).then(res => this.setState({ list: res.data }))
  }

  save() {
    const user = this.state.user
    const method = user.id ? 'put' : 'post'
    const url = user.id ? `${baseURL}/${user.id}` : baseURL
    axios[method](url, user)
        .then(resp => {
            const list = this.updateList(resp.data)
            this.setState({ user: initialState.user, list })
          })
  }

  updateList(user, add = true) {
      const list = this.state.list.filter(u => u.id !== user.id)
      if(add) {
        list.unshift(user)
      }
      return list
  }

  updateField (evt) {
    const user = { ...this.state.user }
    user[evt.target.name] = evt.target.value
    this.setState({ user })
  }

  load (user) {
    this.setState({ user })
  }

  remove(user) {
    axios.delete(`${baseURL}/${user.id}`)
      .then(res => {
        const list = this.updateList(user, false)
        this.setState({ list })
      })
  }

  render () {
    return (
      <Main {...headerProps}>
        <Form
          name={this.state.user.name}
          email={this.state.user.email}
          updateField={this.updateField}
          clear={this.clear}
          save={this.save} />
        <Table
          list={this.state.list}
          load={this.load}
          remove={this.remove}
          />
      </Main>
    )
  }
}