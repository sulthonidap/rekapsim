"use client";

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
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FormControl, FormDescription } from "@/components/ui/form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { use, useState } from "react";

// export const metadata: Metadata = {
//   title: "Dashboard",
//   description: "Example dashboard app built using the components.",
// };

export default function DashboardPage() {
  const [selectItems, setSelectItems] = useState([
    { id: Date.now(), value: "" },
  ]);
  const [healthPhysical, setHealthPhysical] = useState("");
  const [healthMental, setHealthMental] = useState("");
  const [productValues, setProductValues] = useState<{ [key: number]: string }>({});

  const addSelectItem = () => {
    if (selectItems.length < 5) {
      setSelectItems([...selectItems, { id: Date.now(), value: "" }]);
    } else {
      alert("Maksimal 5 Jenis SIM.");
    }
  };

  const handleSelectChange = (id: number, value: string) => {
    setSelectItems(
      selectItems.map((item) => (item.id === id ? { ...item, value } : item))
    );
  };

  const removeSelectItem = (id : number) => {
    setSelectItems(selectItems.filter((item) => item.id !== id));
  };

  const handleProductChange = (id: number, value: string) => {
    setProductValues((prev) => ({ ...prev, [id]: value }));
  };

  
  return (
    <>
      <div className=" flex-col md:flex">
        <div className="sticky top-0 z-40">
          <Navbar />
        </div>
        <br />
        <Tabs defaultValue="v2" className="space-y-4 ml-4">
          <TabsList>
            <TabsTrigger value="v1">versi 1</TabsTrigger>
            <TabsTrigger value="v2">versi 2</TabsTrigger>
          </TabsList>
          <TabsContent value="v2" className="space-y-4">
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

            <div className="grid gap-16 p-2 md:grid-cols-1 lg:grid-cols-2 md:p-10 md:pt-4">
              <Card className="hover:cursor-pointer hover:bg-zinc-50 hover:border-black">
                <CardHeader className="text-center">
                  <CardTitle>Jumlah Penerbitan SIM</CardTitle>
                  <CardDescription>
                    {format(new Date(), "dd MMMM yyyy")}
                  </CardDescription>
                </CardHeader>
                <CardContent className="md:flex gap-6">
                  <div className="space-y-6">
                    <div className="flex w-full max-w-sm items-center space-x-2">
                      <Label className="w-24 font-semibold">Polres : </Label>
                      <Input
                        type="email"
                        placeholder="Polres xxx"
                        disabled
                        className="border border-black"
                      />
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
                      <div className="grid gap-2 mb-6">
                        <Label className="font-semibold flex justify-between items-center">
                          <span>Jumlah Produksi SIM : {selectItems.reduce((acc, item) => acc + (parseFloat(productValues[item.id]) || 0), 0)}</span>
                          <Button onClick={addSelectItem}>Tambah +</Button>
                        </Label>
                        {selectItems.map((item) => (
                          <div
                            key={item.id}
                            className="flex w-full max-w-sm items-center space-x-2"
                          >
                            <Select
                              onValueChange={(value) =>
                                handleSelectChange(item.id, value)
                              }
                            >
                              <SelectTrigger id={`area-${item.id}`}>
                                <SelectValue placeholder="Pilih SIM" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectGroup>
                                  <SelectLabel>Jenis SIM</SelectLabel>
                                  <SelectItem value="SIM-A">SIM A</SelectItem>
                                  <SelectItem value="SIM-B">SIM B-1</SelectItem>
                                  <SelectItem value="SIM-B-2">
                                    SIM B-2
                                  </SelectItem>
                                  <SelectItem value="SIM-C">SIM C</SelectItem>
                                  <SelectItem value="SIM-D">SIM D</SelectItem>
                                </SelectGroup>
                              </SelectContent>
                            </Select>

                            <Input
                              type="number"
                              id={`email-${item.id}`}
                              placeholder={`Jumlah ${item.value}`}
                              className="border border-black"
                              value={productValues[item.id] || ""}
                              onChange={(e) => handleProductChange(item.id, e.target.value)}
                            />
                            <Button
                              onClick={() => removeSelectItem(item.id)}
                              className="bg-red-500 text-white"
                            >
                              Hapus
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                      <Label className="font-semibold">
                        Jumlah Surat Kesehatan Fisik :
                      </Label>
                      <Input
                        type="email"
                        id="healthPhysical"
                        placeholder="Masukkan Nilai"
                        className="border border-black"
                        value={healthPhysical}
                        onChange={(e) => setHealthPhysical(e.target.value)}
                      />
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                      <Label className="font-semibold">
                        Jumlah Surat Kesehatan Psikologi :
                      </Label>
                      <Input
                        type="email"
                        id="email"
                        placeholder="Masukkan Nilai"
                        className="border border-black"
                        value={healthMental}
                        onChange={(e) => setHealthMental(e.target.value)}
                      />
                    </div>
                    <div className="block md:hidden space-y-4 ">
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                      <Label className="font-semibold">
                        Selisih Kesehatan Fisik : 
                        <div className="text-2xl font-bold bg-yellow-400 w-fit p-2 rounded">{selectItems.reduce((sum, item) => sum + (parseFloat(productValues[item.id]) || 0), 0) - parseFloat(healthPhysical) || 0}</div>
                      </Label>

                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                      <Label className="font-semibold">
                        Selisih Kesehatan Psikologi :
                        <div className="text-2xl font-bold bg-yellow-400 w-fit p-2 rounded">
                          {selectItems.reduce((sum, item) => sum + (parseFloat(productValues[item.id]) || 0), 0) - parseFloat(healthMental) || 0}
                          </div>
                      </Label>
                      
                    </div>
                  </div>
                    <br />
                    <Label className="font-semibold text-xl">Justifikasi <span className="text-xs italic mt-[-10]"><br />*upload photo</span></Label>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                      <Label className="font-semibold">
                        Anggota TNI / Polri :
                      </Label>
                      
                      <Input
                        id="picture"
                        type="file"
                        className="file:bg-orange-50 file:text-orange-700 hover:file:bg-blue-100 file:border file:border-solid file:border-orange-700 file:rounded-md border-black"
                      />
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                      <Label className="font-semibold">Aplikasi ONLINE :</Label>
                      <Input
                        id="picture"
                        type="file"
                        className="file:bg-orange-50 file:text-orange-700 hover:file:bg-blue-100 file:border file:border-solid file:border-orange-700 file:rounded-md border-black"
                      />
                    </div>
                    <Button className="bg-orange-500"> SUBMIT </Button>
                  </div>
                  <div className="hidden md:block space-y-4 ">
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                      <Label className="font-semibold">
                        Selisih Kesehatan Fisik : 
                        <div className="text-2xl font-bold bg-yellow-400 w-fit p-2 rounded">{selectItems.reduce((sum, item) => sum + (parseFloat(productValues[item.id]) || 0), 0) - parseFloat(healthPhysical) || 0}</div>
                      </Label>

                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                      <Label className="font-semibold">
                        Selisih Kesehatan Psikologi :
                        <div className="text-2xl font-bold bg-yellow-400 w-fit p-2 rounded">
                          {selectItems.reduce((sum, item) => sum + (parseFloat(productValues[item.id]) || 0), 0) - parseFloat(healthMental) || 0}
                          </div>
                      </Label>
                      
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
                          <div className="text-2xl font-bold">
                          {selectItems.reduce((acc, item) => acc + (parseFloat(productValues[item.id]) || 0), 0)}
                          </div>
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
          </TabsContent>
          <TabsContent value="v1">
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
                  <CardTitle>
                    Jumlah Penerbitan SIM Kurang Persyaratan
                  </CardTitle>
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
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
