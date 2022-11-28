export function Image({ data }) {
  return (
    <div className="border p-5">
      <h2 className="mb-3 text-lg font-medium text-cyan-600 uppercase">
        {data.title}
      </h2>
      <img className="w-full" src={data.url} alt="" />
    </div>
  )
}

export function Text({ data }) {
  return (
    <div className="border p-5 w-full">
      <h2 className="text-3xl mb-3 font-bold text-red-600 uppercase">
        {data.title}
      </h2>
      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: data.text }}
      ></div>
    </div>
  )
}

export function Video({ data }) {
  return (
    <div className="border p-5">
      <h2 className="mb-3 text-lg font-medium text-lime-600 uppercase">
        {data.title}
      </h2>
      <iframe
        className="aspect-video w-full"
        height="315"
        src={data.url}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  )
}
