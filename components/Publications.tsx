"use client";

interface Publication {
  id: number;
  title: string;
  journal: string;
  published: string;
  link: string;
}

const publications: Publication[] = [
  {
    id: 1,
    title: "Application for Real Time Object Measurement",
    journal:
      "International Journal of Advanced Research in Science, Communication and Technology",
    published: "Jun 2022",
    link: "https://www.ijarsct.co.in/Paper5228.pdf",
  },
  {
    id: 2,
    title: "An Experimental Assessment of Deep Learning on Highway Driving",
    journal:
      "Journal of Science and Technology (National Conference on Cognitive Computing)",
    published: "2021",
    link: "https://drive.google.com/file/d/1PZkHFgOAwYPTJBTRrn16MjFMEt7I5sQE/view",
  },
];

const Publications = () => {
  return (
    <section
      id="publications"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1f1f1f] border-t border-gray-600"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-white mb-6">
          Publications
        </h2>
        <div className="space-y-6">
          {publications.map((publication) => (
            <div key={publication.id} className="text-white">
              <h3 className="text-base font-bold text-white mb-1">
                {publication.title}
              </h3>
              <p className="text-sm text-white opacity-70 mb-1">
                {publication.journal}
              </p>
              <p className="text-sm text-white opacity-60 mb-3">
                Published: {publication.published}
              </p>
              <a
                href={publication.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-white px-4 py-[0.6rem] text-sm text-white hover:bg-white hover:text-[#1f1f1f] transition-all rounded"
              >
                View Publication
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;

