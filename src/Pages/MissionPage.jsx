import React from 'react'
import { Typography, Button, Flex } from 'antd'
import { Link, useParams } from 'react-router-dom'

function MissionPage() {
    const { missionId } = useParams()
  return (
    <Typography.Title level={1}>Mission {missionId}</Typography.Title>
  )
}

export default MissionPage