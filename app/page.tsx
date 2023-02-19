function Home() {
  return (
    <main className="flex flex-col gap-8">
      <div className="flex flex-row justify-between items-center gap-8">
        <div className="flex flex-col gap-1">
          <span className="text-lg">hey, I am</span>
          <span className="text-4xl font-bold">Colin 👋</span>

          <div className="flex flex-col gap-2">
            <p className="text-lg">
              a developer who loves to link{" "}
              <span className="font-medium">UX</span> and{" "}
              <span className="font-medium">DX</span> 🤝
            </p>
            <p className="text-lg">
              Right now I am working at dwins building the awesome Finanzguru
              app.
            </p>
          </div>
        </div>
        <div className="bg-purple-600 w-48 h-48 aspect-square rounded-full" />
      </div>

      <div>
        <h2 className="text-lg font-medium">my history</h2>
        <div className="flex flex-row items-center gap-1">
          <span className="text-purple-600 font-medium font-mono">2016</span>
        </div>
        <div className="flex flex-col gap-2">
          <p className=" text-lg">
            After my first experiments with PHP I learned about the Javascript
            world
          </p>
        </div>

        <div className="flex flex-row items-center gap-1">
          <span className="text-purple-600 font-medium font-mono">2017</span>
        </div>
        <div className="flex flex-col gap-2">
          <p className=" text-lg">started studying Computer Science</p>
        </div>

        <div className="flex flex-row items-center gap-1 relative">
          <div className="absolute -left-4">
            <div className="absolute w-2 h-2 bg-purple-600 rounded-full" />
            <div className="w-2 h-2 bg-purple-600 rounded-full animate-ping" />
          </div>
          <span className="text-purple-600 font-medium font-mono">2019</span>
        </div>
        <div className="flex flex-col gap-2">
          <p className=" text-lg">Got my first professional Job at dwins</p>
        </div>
      </div>

      <div className="flex flex-row items-center gap-4">
        <h2 className="whitespace-nowrap text-lg font-medium">
          my experiences
        </h2>

        <div className="relative overflow-hidden">
          <div className="absolute top-0 bottom-0 w-8 bg-gradient-to-r from-slate-50 dark:from-black" />
          <div className="flex flex-row gap-2 overflow-y-scroll">
            {[
              "react",
              "react-native",
              "nodejs",
              "GitHub Actions",
              "Flexbox",
              "d3",
              "NextJS",
              "tailwind",
              "neovim",
            ].map((t) => (
              <span
                key={t}
                className="text-sm font-mono font-medium whitespace-nowrap px-2 py-1 rounded-md bg-purple-500/30 text-purple-500"
              >
                {t}
              </span>
            ))}
            <div className="absolute top-0 right-0 bottom-0 w-8 bg-gradient-to-l from-slate-50 dark:from-black" />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <p className="">... just to name a few.</p>
        <p className="">
          In general I am relay good learning new stuff. However, over the time
          I picked some of my favoriete technologies:
        </p>
        <p className="">I use neovim to edit code, use git in the terminal</p>
      </div>

      <p className="">
        At dwins I worked with a large react-native codebase. Close with the
        designer, we developed a design system, that is tailwind inspired. We
        migrated large portions of the codebase with codemods and custom eslint
        rules. To get the best developer experience, I developed and maintained
        Examples, eslint rules and a Langage Server, that provides smart
        suggestions and documentation.
      </p>

      <p className="">
        Over the time I wrote a lot of bash scripts and a GO based CLI tool to
        manage git tagging.
      </p>

      <p className="">
        I also love to work with d3 to display data in a playful way to our
        customers.
      </p>
    </main>
  );
}

const Row = ({ title, children }: { title: string; children: string }) => (
  <div className="flex flex-row">
    <pre className="flex flex-1">
      <span className="hidden sm:block">{"type  "}</span>:{title}
      <span className="hidden sm:block">{"<ENTER>"}</span>
    </pre>
    <div className="w-56">{children}</div>
  </div>
);

export default function Home2() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-4 p-4">
      <div className="flex flex-col items-center">
        <h1 className="text-center mb-4">Hey, I am Colin Busch</h1>

        <div className="flex flex-1 flex-col mb-4">
          <h2 className="text-center mx-4">
            a developer who loves to bring{" "}
            <span className="font-medium">UX</span> and{" "}
            <span className="font-medium">DX</span> together 🤝
          </h2>
          <h2 className="text-center">some short text</h2>
        </div>

        <div className="flex flex-col self-stretch mb-4">
          <Row title="help">if you are new!</Row>
          <Row title="about">to learn more about me</Row>
          <Row title="q">to exit</Row>
        </div>

        <span className="text-center">To contact me</span>

        <div className="flex flex-col self-stretch mb-12">
          <Row title="help">if you are new!</Row>
        </div>
      </div>

      <div className="bg-bg3 absolute bottom-0 left-0 right-0 h-6 flex flex-row justify-between">
        <div className="flex flex-row">
          <div className="uppercase bg-accent text-bg3 font-bold px-2">
            normal
          </div>
          <div className="bg-bg2 text-muted px-2 hidden sm:block">main</div>
          <div className="text-muted px-2 bg-bg2 sm:bg-transparent">
            page.tsx
          </div>
        </div>
        <div className="flex flex-row">
          <div className="text-muted px-2 hidden sm:block">typescript.tsx</div>
          <div className="bg-bg2 text-muted px-2 hidden sm:block">95%</div>
          <div className="uppercase bg-accent text-bg3 font-bold px-2">
            166:75
          </div>
        </div>
      </div>
    </main>
  );
}
