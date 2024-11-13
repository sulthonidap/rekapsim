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
import { FormControl, FormDescription } from "@/components/ui/form";

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

        <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-2 p-10 pt-4">
          <Card className="hover:cursor-pointer hover:bg-zinc-50 hover:border-black">
            <CardHeader className="text-center">
              <CardTitle>Jumlah Penerbitan SIM</CardTitle>
              <CardDescription>
                {format(new Date(), "dd MMMM yyyy")}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex  gap-6">
              <div className="space-y-6">
                <div className="flex w-full max-w-sm items-center space-x-2">
                  <Label className="w-24 font-semibold">Polres : </Label>
                  <Input type="email" placeholder="Polres xxx" disabled className="border border-black" />
                  <br />
                </div>
                <div className="flex w-full max-w-sm items-center space-x-2">
                  <Label className="w-24 font-semibold">Tanggal : </Label>
                  <Input
                    type="email"
                    placeholder={format(new Date(), "dd MMMM yyyy")}
                    disabled
                    className="border border-black"
                  />
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label className="font-semibold">Jumlah Produksi :</Label>
                  <Input type="email" id="email" placeholder="Masukkan Nilai" className="border border-black" />
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label className="font-semibold">
                    Jumlah Surat Kesehatan Fisik :
                  </Label>
                  <Input type="email" id="email" placeholder="Masukkan Nilai" className="border border-black" />
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label className="font-semibold">
                    Jumlah Surat Kesehatan Psikologi :
                  </Label>
                  <Input type="email" id="email" placeholder="Masukkan Nilai" className="border border-black" />
                </div>
                <br />
                <Label className="font-semibold text-xl">Justifikasi</Label>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label className="font-semibold">
                    Anggota TNI / Polri :
                  </Label>
                  <Input type="email" id="email" placeholder="Masukkan Nilai" className="border border-black" />
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label className="font-semibold">
                    Aplikasi ONLINE :
                  </Label>
                  <Input type="email" id="email" placeholder="Masukkan Nilai" className="border border-black" />
                </div>
              <Button className="bg-orange-500"> SUBMIT </Button>

              </div>
              <div className="space-y-4">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label className="font-semibold">
                    Selisih Kesehatan Fisik  :
                  </Label>
                  <Input type="email" id="email" placeholder="otomatis" className="py-8 w-[80px] bg-yellow-200" disabled />
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label className="font-semibold">
                    Selisih Kesehatan Psikologi :
                  </Label>
                  <Input type="email" id="email" placeholder="otomatis" disabled className="py-8 w-[80px] bg-yellow-200" />
                </div>
                
              </div>
              

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
