import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

import Hero from "../../assets/images/hero_image.jpg";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
  return (
    <>
      <section className="bg-primary-50 dark: dark:dark bg-dotted-pattern bg-contain py-5 items-center md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold">
              Desperte a magia geek, transformando eventos em momentos
              memoráveis!
              <p className="p-regular-16 md:p-regular-20">
                Conecte-se a uma comunidade global de eventos extraordinários.
                Aprenda com especialistas e eleve seus projetos a novos
                patamares 🚀
              </p>
              <Button
                className="button w-full sm:w-fit dark:text-white"
                size="lg"
                asChild
              >
                <Link href="#events">Vivenciar Agora</Link>
              </Button>
            </h1>
          </div>

          <Image
            src={Hero}
            alt="hero"
            width={1000}
            height={1000}
            className="w-[50vw] sm:max-h-[70vh] lg:max-h-[90vh] xl:max-h-[65vh] object-cover rounded-md lg:mt-10"
          />
        </div>
      </section>

      <section id="events" className="wrapper my-8 flex flex-col md:gap-12">
        <h2 className="h2-bold">
          Mil eventos <br />
          confiam em nós.
        </h2>
        <div className="flex w-full flex-col gap-5 md:flex-row">
          Buscar Filtro por categorias
        </div>
      </section>
    </>
  );
}
