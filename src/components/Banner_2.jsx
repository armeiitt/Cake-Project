import React from "react";

function Footer() {
  const imageStyle = {
    width: "100%",
  };

  return (
    <div>
      <div>
        <div>
          <img
            src="https://skins.minimog.co/cdn/shop/files/cake_image_card.jpg?v=1659954235&amp;width=940"
            alt=""
            srcSet=""
            style={imageStyle} // Sử dụng đối tượng style 
          />
        </div>
        <div>
          <div>Don’t let summer float away</div>
          <div>
            <p>
              Snag some cool treats now! And we’ll deliver them straight to
              you in temperature controlled packaging, so they’re cold and
              ready to eat.You don’t have to get out of the pool ;
            </p>
          </div>
          <div>
            <button>SHOW NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
