import React from "react";
import img1 from "../../img/all items/image2.jpg";
import img2 from "../../img/travel10.jpg";
import img3 from "../../img/all items/image3.jpg";

const ImageGallary = () => {
  return (
    <div className="">
        <h2 className="text-gray-500 text-xl">OUR BLOGS GALLARY</h2>
      <section className="overflow-hidden text-gray-700">
        <div className="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
          <div className="flex flex-wrap -m-1 md:-m-2">
            <div className="flex flex-wrap w-1/2">
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://cdn.shopify.com/s/files/1/0510/7489/articles/MachinCreationsInc-seotool-28081-TheDifferentTypes-BlogBanner1.jpg?v=1576163202"
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src={img2}
                />
              </div>
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://bcdairy.ca/wp-content/uploads/2021/08/Variety_Image_747px.jpg"
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src={img1}
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://flexiblog-beauty.netlify.app/static/80aba1ff0497753674bfda8335578775/f47df/image.webp"
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src={img3}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImageGallary;
