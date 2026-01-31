import gsap from "gsap";



export default function Matalassos() {
  const handleOverProp = () => {
    gsap.to(".textProperament", { scale: 0.8, color: " #dbeafe", duration: 0.3 });
    gsap.to(".imgProperament", { rotate: 2.5, scale: 1.1, duration: 0.3 });
  };
  function handleOutProp() {
    gsap.to(".textProperament", { scale: 1,    color: "#fef9c2", duration: 0.3 });
    gsap.to(".imgProperament", { rotate: 0,scale: 1, duration: 0.3 });
  }
  const handleOverMat = () => {
    gsap.to(".textMatalas", { scale: 0.8, color: " #dbeafe", duration: 0.3 });
    gsap.to(".imgMatalas", { rotate: 2.5, scale: 1.1, duration: 0.3 });
  };
  const handleOutMat = () => {
    gsap.to(".textMatalas", { scale: 1, color: "#fef9c2", duration: 0.3 });
    gsap.to(".imgMatalas", { rotate: 0, scale: 1, duration: 0.3 });
  };
  return (
    <div className="flex w-screen justify-around gap-20">
      <div
        onMouseOver={() => handleOverMat()}
        onMouseOut={() => handleOutMat()}
        className="w-42 cursor-pointer  h-full flex flex-col items-center justify-center montserrat-regular z-100"
      >
        <h3 className=" textMatalas font-semibold text-2xl text-[#fef9c2] hover:text-blue-200">
          Matalassos
        </h3>
        <img
          className="imgMatalas  w-48"
          src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=165,fit=crop,trim=25.140845070422536;0;0;0/YBgjMgabRgiQr27z/matalaass_sin_recortada-min-m2Wq2WRR3WHVbRNA.png"
          alt=""
        />
      </div>
      <div
        onMouseOver={() => handleOverProp()}
        onMouseOut={() => handleOutProp()}
        className="w-48  cursor-pointer h-full flex flex-col items-center justify-center  z-200"
      >
        <h3 className=" textProperament font-semibold text-2xl text-[#fef9c2] p-2 duration- rounded-xl montserrat-regular">
          Properament
        </h3>
        <img
          className="imgProperament w-48"
          src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=142,fit=crop,trim=27.540983606557376;0;0;0/YBgjMgabRgiQr27z/coixins_min-YbN4z56alBsbj3kg.png"
          alt=""
        />
      </div>
    </div>
  );
}
