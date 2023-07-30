import {} from 'react'

const Galery = () => {
  return (
    <div className='flex flex-col  md:flex-row mx-3 ' >
        <div className='md:w-1/2' >
            <h2> dsdfsdfsd </h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque porro deleniti possimus ducimus est eos ipsum officia, suscipit mollitia quisquam perspiciatis quod exercitationem accusantium quas fugit quam expedita. Voluptatum, neque!</p>
        </div>
        <div className="grid grid-cols-2 w-full gap-4">
            <div className="h-full">
                <iframe
                title="Video 1"
                className="mb-4 h-36 w-full rounded-2xl md:h-48 lg:h-64"
                src="https://www.youtube.com/embed/_sugCKZiUes?autoplay=1&mute=1"
                frameBorder="0"
                allowFullScreen
                allow="autoplay"
                ></iframe>
                <iframe
                title="Video 2"
                className="mb-4 h-52 w-full rounded-2xl md:h-64 lg:h-96"
                src="https://www.youtube.com/embed/_sugCKZiUes?autoplay=1&mute=1"
                frameBorder="0"
                allowFullScreen
                allow="autoplay"
                ></iframe>
            </div>
            <div className="h-full">
                <iframe
                title="Video 3"
                className="mb-4 h-52 w-full rounded-2xl md:h-64 lg:h-96"
                src="https://www.youtube.com/embed/_sugCKZiUes?autoplay=1&mute=1"
                frameBorder="0"
                allowFullScreen
                allow="autoplay"
                ></iframe>
                <iframe
                title="Video 4"
                className="mb-4 h-36 w-full rounded-2xl md:h-48 lg:h-64"
                src="https://www.youtube.com/embed/_sugCKZiUes?autoplay=1&mute=1"
                frameBorder="0"
                allowFullScreen
                allow="autoplay"
                ></iframe>
            </div>
        </div>
    </div>

  )
}

export default Galery