import Center from "./Center";

const Footer = () => {
  return (
    <div className="bg-white mt-3">
      <Center>
        <div className="flex gap-8 p-2 items-center ">
          <div className="w-[50%]">
            <span className="text-[12px]">
              As a website owner, you want to provide the best user experience
              for your visitors. However, with the rise of spam, it can be
              challenging to protect{" "}
            </span>
          </div>
          <div className="w-[50%] flex items-center justify-between font-semibold">
            <span>About Us</span>
            <span>Disclaimer</span>
            <span>Privacy Policy</span>
            <span>Terms and Condition</span>
          </div>
        </div>
      </Center>
    </div>
  );
};

export default Footer;
