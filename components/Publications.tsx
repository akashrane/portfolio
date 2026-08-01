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
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold text-white mb-6">
          Publications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {publications.map((publication) => (
            <div key={publication.id} className="text-white flex flex-col h-full border border-gray-600 rounded p-5 bg-[#1f1f1f] hover:border-white transition-colors">
              <h3 className="text-lg font-bold text-white mb-2 leading-tight">
                {publication.title}
              </h3>
              <p className="text-sm text-white opacity-70 mb-1">
                {publication.journal}
              </p>
              <p className="text-sm text-white opacity-60 mb-5 flex-1">
                Published: {publication.published}
              </p>
              <div>
                <a
                  href={publication.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border border-white px-4 py-[0.6rem] text-sm text-white hover:bg-white hover:text-[#1f1f1f] transition-all rounded w-max"
                >
                  View Publication
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;

