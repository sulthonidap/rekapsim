`use client`;

import { Metadata } from "next";
import Navbar from "@/components/navbar";
import { format } from "date-fns";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Example dashboard app built using the components.",
};

export default function DashboardPage() {
  return (
    <>
      <div className="hidden flex-col md:flex">
        <div className="sticky top-0 z-40">
          <Navbar />
        </div>
        <div className="mx-auto text-center my-1">
          <div className="flex justify-center">
            <img src="logo-polda.jpg" alt="" className="w-[80px]" />
          </div>
          <h2 className="text-xl font-bold tracking-tight">
            LAPORAN HARIAN REKAPITULASI PENERBITAN SIM{" "}
          </h2>
          <h2 className="text-xl font-bold tracking-tight">POLRES xxx</h2>
          <h3>{format(new Date(), "dd MMMM yyyy")}</h3>
        </div>

        <div className="grid gap-16 md:grid-cols-3 lg:grid-cols-3 p-10 pt-4">
          <Card className="hover:cursor-pointer hover:bg-zinc-50 hover:border-black">
            <CardHeader className="text-center">
              <CardTitle>Jumlah Penerbitan SIM</CardTitle>
              <CardDescription>
                {format(new Date(), "dd MMMM yyyy")}
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid gap-2">
                <Label htmlFor="area">Jenis SIM</Label>
                <Select defaultValue="billing">
                  <SelectTrigger id="area">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="team">SIM A</SelectItem>
                    <SelectItem value="billing">SIM B-1</SelectItem>
                    <SelectItem value="account">SIM B-2</SelectItem>
                    <SelectItem value="deployments">SIM C</SelectItem>
                    <SelectItem value="support">SIM D</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="area">Jumlah</Label>
                <Input placeholder="Masukkan Jumlah" type="number" />
              </div>
              <Button className="bg-orange-500"> Input </Button>
            </CardContent>
          </Card>
          <Card className="hover:cursor-pointer hover:bg-zinc-50 hover:border-black">
            <CardHeader className="text-center">
              <CardTitle>Jumlah Penerbitan SIM Kurang Persyaratan</CardTitle>
              <CardDescription>
                {format(new Date(), "dd MMMM yyyy")}
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid gap-2">
                <Label htmlFor="area">Jenis SIM</Label>
                <Select defaultValue="billing">
                  <SelectTrigger id="area">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="team">SIM A</SelectItem>
                    <SelectItem value="billing">SIM B-1</SelectItem>
                    <SelectItem value="account">SIM B-2</SelectItem>
                    <SelectItem value="deployments">SIM C</SelectItem>
                    <SelectItem value="support">SIM D</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="area">Jamkesnas</Label>
                <Select defaultValue="billing">
                  <SelectTrigger id="area">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="team">Ada</SelectItem>
                    <SelectItem value="billing">Tidak Ada</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="area">Jumlah</Label>
                <Input placeholder="Masukkan Jumlah" type="number" />
              </div>
              <Button className="bg-orange-500"> Input </Button>
            </CardContent>
          </Card>
          <Card className="hover:cursor-pointer hover:bg-zinc-50 hover:border-black">
            <CardHeader>
              <CardTitle>Data Rekapitulasi Bulan Ini</CardTitle>
              <CardDescription>
                {format(new Date(), " MMMM yyyy")}
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <Separator />
              <div className="flex justify-around  ">
                <Label className="text-md">Jumlah</Label>
                <Label className="text-md">Selisih</Label>
              </div>
              <div className="bg-slate-100 ">
                <Separator />
                <div className="flex justify-around my-2">
                  <Label className="text-md font-bold">26985</Label>
                  <Label className="text-md font-bold text-orange-500">
                    251
                  </Label>
                </div>
                <Separator />
              </div>
              <div>
                <Label className="text-md font-bold">
                  Data Penerbitan SIM Hari ini
                </Label>
                <br />
                <Label className="text-sm text-muted-foreground">
                  {format(new Date(), "dd MMMM yyyy")}
                </Label>

                <div className="grid gap-4 md:grid-rows-2 mt-2">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                        Total Jumlah SIM
                      </CardTitle>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="h-4 w-4 text-muted-foreground"
                      >
                        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                      </svg>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">127</div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                        Total SIM Kurang Persyaratan
                      </CardTitle>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="h-4 w-4 text-muted-foreground"
                      >
                        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                      </svg>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-orange-500">
                        15
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
