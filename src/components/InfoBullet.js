import React from "react"

const InfoBullet = ({ data }) => {
  return (
    <article className="mb-4">
      <div className="flex">
        <img className="h-auto w-16 object-contain" src={data.image} alt={data.title} />
        <div className="pl-2">
          <h3 className="font-bold">{data.title}</h3>
          <div className="text-primary-500">{data.subtitle}</div>
          <p className="font-light">{data.description}</p>
        </div>
      </div>
    </article>
  )
}

export default InfoBullet
