import { AppointmentsSummary } from "@components/appointmentsSummary";

export default function AppointmentsPage() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Your Appointments</h2>
      <div className="container mx-auto p-4">
        <AppointmentsSummary />
      </div>
    </div>
  )
}