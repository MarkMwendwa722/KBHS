import about from "../assets/aboutImage.jpg";

function Gallery() {
  return (
    <div>
        <div style={{backgroundImage:`url(${about})`}} className="bg-cover bg-center bg-fixed h-[90vh] relative">
        <span className="absolute bottom-10 left-20 text-white text-3xl font-semibold">
          Gallery
        </span>
      </div>
      <div className="my-20 max-w-screen-lg m-auto">
        <div className="gallery_grid place-content-center">
            <div className="gallery_grid_1"></div>
            <div className="gallery_grid_2">
                <div className="gallery_grid_child_1"></div>
                <div className="gallery_grid_child_2"></div>
                <div className="gallery_grid_child_3"></div>
                <div className="gallery_grid_child_4"></div>
            </div>
            <div className="gallery_grid_3"></div>
            <div className="gallery_grid_4">
            <div className="gallery_grid_child_1"></div>
                <div className="gallery_grid_child_1"></div>
                <div className="gallery_grid_child_2"></div>
                <div className="gallery_grid_child_3"></div>
                <div className="gallery_grid_child_4"></div>
            </div>
            <div className="gallery_grid_5">
            <div className="gallery_grid_child_1"></div>
                <div className="gallery_grid_child_1"></div>
                <div className="gallery_grid_child_2"></div>
                <div className="gallery_grid_child_3"></div>
                <div className="gallery_grid_child_4"></div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery