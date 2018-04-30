import React from 'react'
import { render } from 'react-dom'

import localizer from 'react-big-calendar/lib/localizers/globalize'
import globalize from 'globalize'

localizer(globalize)

import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

import 'react-big-calendar/lib/less/styles.less'
import './styles.less'
import './prism.less'

import Dnd from './demos/dnd'

class Example extends React.Component {
  render() {
    return (
      <div className="app">
        <div className="examples">
          <Dnd />
        </div>
      </div>
    )
  }
}

render(<Example />, document.getElementById('app'))
