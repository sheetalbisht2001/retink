import React from 'react'
import DataTable from 'src/ui-component/dataTable'

const PlanDataTable = (props: any) => {
  const {
    data,
    tableRowLabels,
    handleRowClick,
  } = props

  let listData = data || []

  return (
    <>
      <DataTable
        rows={listData}
        columns={tableRowLabels}
        onRowClick={handleRowClick}
      />
    </>
  )
}

export default PlanDataTable
