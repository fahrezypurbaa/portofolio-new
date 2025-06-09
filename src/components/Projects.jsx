import React from "react";
import project1 from "../../public/project1.png";
import project2 from "../../public/project2.png";
import project3 from "../../public/project3.png";

const ProjectCard = ({ image, title, description, link }) => {
  return (
    <article className="group relative max-w-sm bg-gray-800 rounded overflow-hidden shadow-lg-group ">
      <div
        className="absolute z-0 w-40 h-40 sm:w-60 sm:h bg-[#cd3cf5] rounded-full blur-3xl
        opacity-50 -top-5 left-10"
      ></div>

      <div className="relative z-10">
        <figure className="relative">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute h-[202px] inset-0 flex items-center justify-center bg-purple-800 bg-opacity-50 opacity-0
                group-hover:opacity-100 transition-opacity duration-300"
          >
            <button className="bg-white font-medium text-black py-2 px-4 rounded-3xl shadow hover:text-white hover:bg-[#2879d5]">
              Live Preview
            </button>
          </a>
        </figure>
        <div className="px-6 py-4">
          <header>
            <h3 className="text-white font-bold text-xl mb-2">{title}</h3>
          </header>
          <p className="text-gray-200 text-base">{description}</p>
        </div>
      </div>
    </article>
  );
};

export default function Projects() {
  const listProjects = [
    {
      image: project1,
      title: "Landing Page untuk rfurniture.id",
      description: "Website promosi produk furniture buatan lokal.",
      link: "https://portofolio-new-p2o6.vercel.app/",
    },
    {
      image: project2,
      title: "E-Commerce Techterrarium",
      description:
        "Website jual-beli tanaman hias dengan fitur cart dan checkout.",
      link: "https://techterrarium.com/",
    },
    {
      image: project3,
      title: "Landing Page untuk Hiradecon.id",
      description:
        "Website resmi Hiradecon — perusahaan konstruksi profesional yang siap menghadirkan solusi total untuk proyek.",
      link: "https://hiradecon.id",
    },
  ];
  return (
    <main className="p-4" id="projects">
      <section data-aos="fade-up" data-aos-delay="300">
        <header className="text-center">
          <h1 className="text-3xl text-white sm:text-4xl font-bold mb-6">
            My <span className="text-purple-400">Projects</span>
          </h1>
          <p className="text-gray-400 mt-2 sm:mt-4 text-sm sm:text-base">
            Berikut adalah beberapa proyek website yang pernah saya kerjakan.
            Setiap proyek ini menunjukkan kemampuan saya dalam merancang,
            mengembangkan, dan mengoptimalkan website sesuai kebutuhan klien.
          </p>
        </header>
      </section>
      <section
        data-aos="fade-up"
        data-aos-delay="500"
        className="flex flex-wrap gap-4 justify-center mt-6"
      >
        {listProjects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </section>
    </main>
  );
}
