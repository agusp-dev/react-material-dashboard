import React from 'react'
import _ from 'lodash'
import { AddWidget } from '../Widgets/AddWidget/AddWidget'
import { ProjectDashboard } from './ProjectDashboard'

const ProjectTab = ({ project, editCards }) => {

  return (
    <div
      style={{
        minHeight: '200px',
        width: '100%',
        opacity: 1,
        marginTop: '10px'
      }}
    >
      <ProjectDashboard
        // dashboard={dashboard}
        // updateDashboardGrid={this.updateDashboardGrid}
        project={project}
        editCards={editCards}
      />
      {/* <AddWidget
        goWorkflow={this.redirectToProjectWorkflow}
        goScene={this.redirectToProjectScene}
      /> */}
    </div>
  )
}

export { ProjectTab }