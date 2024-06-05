"use client";
import { useEffect, useState } from "react";
import { ReactLenis } from "lenis/react";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  const [parkingSpaces, setParkingSpaces] = useState([]);

  const teams = [
    {
      nama: "Achmad Luthfan Nur Irsyad",
      nim: "22/499721/SV/21359",
      src: "/lutpan.jpg",
      ig: "https://www.instagram.com/luttpaaan/",
    },
    {
      nama: "Anugrah Dwiki Ardana",
      nim: "22/494995/SV/20942",
      src: "/anugrah.jpg",
      ig: "https://www.instagram.com/aardaana/",
    },
    {
      nama: "Daffa Maulana Putra",
      nim: "22/494973/SV/20938",
      src: "/dapol-crop.jpg",
      ig: "https://www.instagram.com/iamdapoll/",
    },
  ];

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    const fetchDataParking = async () => {
      const response = await fetch("http://54.255.247.215:8000/parking-data");
      const result = await response.json();
      if (response.ok) {
        setParkingSpaces(result);
      }
    };

    fetchDataParking();
  });

  return (
    <ReactLenis root>
      <div>
        <section className="min-h-screen flex items-center justify-center bg-[url('/hero.jpg')] bg-no-repeat bg-cover ">
          <div className="w-full h-full absolute bg-black opacity-80 z-[2]"></div>
          <div className="relative z-10 px-[3vw] lg:mb-32">
            <h2 className="text-[4vw] lg:text-3xl font-normal text-center md:mb-5 text-slate-200 shadow-lg opacity-80 ">
              <TypeAnimation
                sequence={[
                  "Mata Kuliah Praktikum IoT",
                  1500,
                  "Kelompok 8",
                  1500,
                  "Teknologi Rekayasa Internet",
                  1500,
                ]}
                repeat={Infinity}
                speed={50}
              />
            </h2>
            <h1
              data-aos="fade-up"
              data-aos-duration="1500"
              className="text-[7vw] lg:text-7xl font-bold md:font-semibold text-center md:mb-5 shadow-lg text-slate-200 lg:leading-[85px] mt-4 md:mt-0 lg:px-16"
            >
              Desain dan Implementasi Sistem Parkir Berbasis IoT dengan
              Visualisasi Real Time Melalui Website
            </h1>
            <div
              className="flex justify-center "
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="200"
            >
              <button className="bg-red-700 text-[4vw] font-semibold hover:scale-110 duration-300 shadow-lg px-8 mt-4 mb:mt-0 lg:text-xl rounded-md cursor-pointer py-2 text-slate-300">
                Demo
              </button>
            </div>
          </div>
        </section>
        <section className="min-h-screen font-Poppins flex items-center justify-center pt-20">
          <div className="flex flex-col gap-y-10">
            <h2
              className="text-center text-[7vw]  lg:text-5xl text-slate-900 font-semibold"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              Anggota Kelompok
            </h2>
            <div className="flex md:flex-row flex-col gap-x-10">
              {teams.map((team) => {
                return (
                  <div
                    className="our-team lg:w-80 bg-slate-50 rounded-lg shadow-lg"
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="200"
                  >
                    <div className="picture">
                      <Image
                        className="rounded-full h-[160px]"
                        src={team.src}
                        alt="photo"
                        width={150}
                        height={150}
                      />
                    </div>
                    <div className="team-content">
                      <h3 className="text-xl font-medium mb-2 text-slate-800">
                        {team.nama}
                      </h3>
                      <h4 className="title text-slate-800">{team.nim}</h4>
                    </div>
                    <ul className="social">
                      <Link href={`${team.ig}`} target="_blank">
                        <Image
                          src="/instagram-white-icon.webp"
                          width={25}
                          height={25}
                          alt="instagram"
                          className="fill-white mx-auto my-1 hover:scale-105 duration-200"
                        ></Image>
                      </Link>
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section className="font-Poppins flex flex-col items-center justify-center min-h-screen relative">
          <nav className="h-[20vw] z-50 font-Poppins w-full absolute md:h-20 lg:h-24 top-0 bg-slate-800 flex items-center justify-center">
            <h1 className="text-zinc-100 font-bold text-[7vw] md:text-3xl lg:text-4xl">
              Real Time Visualization
            </h1>
          </nav>
          <div className="flex my-[15vw] md:my-20 items-center justify-center gap-x-6 md:gap-x-32">
            <div className="flex items-center gap-x-2">
              <div className="w-5 h-5 bg-green-500 rounded-sm"></div>
              <p>Kosong</p>
            </div>
            <div className="flex items-center gap-x-2">
              <div className="w-5 h-5 bg-red-500 rounded-sm"></div>
              <p>Terisi</p>
            </div>
          </div>
          <div className="flex flex-col items-center mx-6 gap-y-8 md:gap-y-16 xl:gap-y-20 min-w-[100%]">
            <h2 className="text-slate-800 font-medium text-xl md:text-2xl lg:text-3xl">
              SLOT AVAILABLE :
            </h2>
            <div className="grid grid-cols-2 justify-center gap-x-3 w-full h-[90vw] md:h-[400px] md:flex md:justify-evenly md:w-[70%] lg:w-[50%]">
              {parkingSpaces.map((parkingSpace) => {
                return (
                  <div
                    className={`h-full justify-self-center  rounded-md flex items-center justify-center px-2 w-32 duration-300 ${
                      parkingSpace.status === false
                        ? "bg-green-500"
                        : "bg-red-500"
                    }`}
                  >
                    <p className="text-white text-[5vw] md:text-lg text-center">
                      Slot {parkingSpace.id}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </ReactLenis>
  );
}
