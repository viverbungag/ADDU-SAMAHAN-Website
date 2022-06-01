import React from 'react'
import { SysDev } from "../../../data/dataIndex"
import { SysDevTemplate } from '../../ComponentIndex'

const SysDevPage = () => {
  return (
    <SysDevTemplate developers={SysDev.developers} />
  )
}

export default SysDevPage