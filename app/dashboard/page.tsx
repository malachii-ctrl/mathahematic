import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar"
import { RecentActivity } from "@/components/dashboard/recent-activity"
import { StudyProgress } from "@/components/dashboard/study-progress"
import { QuickActions } from "@/components/dashboard/quick-actions"
import { UpcomingExams } from "@/components/dashboard/upcoming-exams"
import { PastPapers } from "@/components/dashboard/past-papers"

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-white dark:bg-gray-950">
      <DashboardSidebar />
      <div className="flex-1 overflow-auto">
        <DashboardHeader />
        <main className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <QuickActions />
            <UpcomingExams />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <div className="lg:col-span-2">
              <StudyProgress />
            </div>
            <RecentActivity />
          </div>
          <PastPapers />
        </main>
      </div>
    </div>
  )
}

