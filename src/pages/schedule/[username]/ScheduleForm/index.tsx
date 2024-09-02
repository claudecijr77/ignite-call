import { CalendarStep } from '@/pages/schedule/[username]/ScheduleForm/CalendarStep'
import { useState } from 'react'
import { ConfirmStep } from '@/pages/schedule/[username]/ScheduleForm/ConfirmStep'

export function ScheduleForm() {
  const [selectdDateTime, setSelectdDateTime] = useState<Date | null>()

  function handleClearSelectDateTime() {
    setSelectdDateTime(null)
  }

  if (selectdDateTime) {
    return (
      <ConfirmStep
        schedulingDate={selectdDateTime}
        onCancelConfirmation={handleClearSelectDateTime}
      />
    )
  }

  return <CalendarStep onSelectDateTime={setSelectdDateTime} />
}
