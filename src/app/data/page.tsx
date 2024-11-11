import { promises as fs } from "fs"
import path from "path"
import { Metadata } from "next"
import Image from "next/image"
import { z } from "zod"

import { columns } from "./components/columns"
import { DataTable } from "./components/data-table"
import { taskSchema } from "./data/schema"
import Navbar from "@/components/navbar"

export const metadata: Metadata = {
  title: "Data",
  description: "A task and issue tracker build using Tanstack Table.",
}

// Simulate a database read for tasks.
async function getTasks() {
  const data = await fs.readFile(
    path.join(process.cwd(), "src/app/data/data/tasks.json")
  )

  const tasks = JSON.parse(data.toString())

  return z.array(taskSchema).parse(tasks)
}

export default async function TaskPage() {
  const tasks = await getTasks()

  return (
    <>
    <div className="sticky top-0 z-40 ">
    <Navbar />
    </div>
      <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="flex items-center justify-between space-y-2 text-center">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-center">DATA REKAPITULASI PENERBITAN SIM</h2>
            {/* <p className="text-muted-foreground">
              Here&apos;s a list of your tasks for this month!
            </p> */}
          </div>
          <div className="flex items-center space-x-2">
            {/* <UserNav /> */}
          </div>
        </div>
        <DataTable data={tasks} columns={columns} />
      </div>
    </>
  )
}
