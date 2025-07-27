export default function Info() {
  return (
    <section className="p-6">
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <div className="mb-20">
          <h2 className="text-xl md:text-3xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan to-blue bg-clip-text text-transparent">
              The 1st World AI-Powered Image
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan to-blue bg-clip-text text-transparent">
              & Visual Awards
            </span>
          </h2>
          <p className="text-[#BFBFBF] text-xl font-medium">
            Visions of the Future: Imagined by AI, Inspired by Humanity
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-16 lg:gap-20">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <p className="text-white text-base leading-relaxed">
              What does the future of cities, nature, human connection, or
              identity look like through the lens of AI? How will AI redefine
              industries like education, medicine, fashion, or architecture? How
              will it change the way we live, feel, create—and dream?
            </p>

            <p className="text-white text-base leading-relaxed">
              We invite creators to explore how artificial intelligence is
              reshaping the core functions of human life: from how we see and
              interpret reality, to how we create, collaborate, and communicate,
              and ultimately, how we live and find meaning.
            </p>

            <p className="text-white text-base leading-relaxed">
              How do AI-generated visuals challenge our understanding of beauty,
              truth, or originality? What new forms of labor, emotion,
              connection, and creativity emerge when AI becomes part of our
              daily tools, workplaces, and personal spaces?
            </p>

            <p className="text-white text-base leading-relaxed">
              This is a space to show how AI transforms the familiar into
              something unseen yet intuitively human. Whether you explore
              automated futures, augmented senses, hybrid identities, or
              machine-enabled dreams.
            </p>
          </div>

          {/* Right Column - Aligned Content */}
          <div className="space-y-6">
            <p className="text-white text-base leading-relaxed">
              This award is not only a celebration of technological creativity
              but also a call to the emerging generation of AI artists and
              storytellers to co-author the visual language of the future.
            </p>

            <p className="text-white text-base leading-relaxed">
              Whether your submission is poetic or practical, surreal or
              data-driven, we encourage you to push the boundaries of what's
              possible with generative tools. Show us the future world as
              imagined by you—and your AI.
            </p>

            <div className="mt-8">
              <h3 className="bg-gradient-to-r from-cyan to-blue bg-clip-text text-transparent text-3xl md:text-3xl lg:text-3xl font-bold leading-tight mb-8">
                AI is not just a tool—it's a new lens through which we perceive
                the world
              </h3>

              <p className="text-[#BFBFBF] text-xl font-medium">
                From how we see and interpret reality, to how we create,
                collaborate, and communicate, and ultimately, how we live and
                find meaning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
