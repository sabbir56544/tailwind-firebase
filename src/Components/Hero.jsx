import React from "react";

const Hero = () => {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-center py-36 relative"
        style={{ backgroundImage: "url(../images/banner-bg.jpg)" }}
      >
        <div className="container">
          <h1 className="xl:text-6xl md:text-5xl text-4xl text-gray-800 font-medium mb-4">
            Best Collection For <br className="hidden sm:block" /> Home
            Decoration
          </h1>
          <p className="text-base text-gray-600 leading-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa{" "}
            <br className="hidden sm:block" />
            assumenda aliquid inventore nihil laboriosam odio
          </p>

          <div className="mt-12">
            <a
              href="shop.html"
              class="bg-primary border border-primary text-white px-8 py-3 font-medium rounded-md uppercase hover:bg-transparent
               hover:text-primary transition"
            >
              Shop now
            </a>
          </div>
        </div>
      </div>

      <div class="container py-16">
        <div class="lg:w-10/12 grid md:grid-cols-3 gap-3 lg:gap-6 mx-auto justify-center">

            
            <div
                class="border-primary border rounded-sm px-8 lg:px-3 lg:py-6 py-4 flex justify-center items-center gap-5">
                <img src="images/icons/delivery-van.svg" class="lg:w-12 w-10 h-12 object-contain" />
                <div>
                    <h4 class="font-medium capitalize text-lg">free shipping</h4>
                    <p class="text-gray-500 text-xs lg:text-sm">Order over $200</p>
                </div>
            </div>
            
            
            <div
                class="border-primary border rounded-sm px-8 lg:px-3 lg:py-6 py-4 flex justify-center items-center gap-5">
                <img src="images/icons/money-back.svg" class="lg:w-12 w-10 h-12 object-contain" />
                <div>
                    <h4 class="font-medium capitalize text-lg">Money returns</h4>
                    <p class="text-gray-500 text-xs lg:text-sm">30 Days money return</p>
                </div>
            </div>
            
            
            <div
                class="border-primary border rounded-sm px-8 lg:px-3 lg:py-6 py-4 flex justify-center items-center gap-5">
                <img src="images/icons/service-hours.svg" class="lg:w-12 w-10 h-12 object-contain" />
                <div>
                    <h4 class="font-medium capitalize text-lg">24/7 Support</h4>
                    <p class="text-gray-500 text-xs lg:text-sm">Customer support</p>
                </div>
            </div>
            

        </div>
    </div>
    </>
  );
};

export default Hero;
