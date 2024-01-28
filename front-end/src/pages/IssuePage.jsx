import emailjs from "@emailjs/browser";
import { useRef } from "react";
function IssuePage() {

  let templateParams = {
    from_name: "James",
    message: "Check this out!",
  };
  function sendMail() {
    emailjs
      .send(
        "<>",
        "template_azmnoyw",
        templateParams,
        "<>"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
  }

  return (
    <div className="flex justify-center h-[85vh] bg-gradient-to-br from-blue-100 to-purple-100">
      {/* The button to open modal */}
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Gửi thành công 🥳</h3>
          <p className="py-4">
            Cảm ơn bạn đã gửi góp ý / báo lỗi 🤗. Chúng tôi sẽ xem xét những ý
            kiến của người dùng để ngày càng hoàn thiện sản phẩm hơn nhé!
          </p>
          <div className="modal-action">
            <label htmlFor="my-modal" className="btn btn-success">
              Đóng
            </label>
          </div>
        </div>
      </div>
      <div className="md:w-[50%]">
        <h1 className="text-3xl text-center font-bold p-5 bg-[linear-gradient(90deg,hsl(var(--s))_0%,hsl(var(--sf))_9%,hsl(var(--pf))_42%,hsl(var(--p))_47%,hsl(var(--a))_100%)] bg-clip-text will-change-auto [-webkit-text-fill-color:transparent] [transform:translate3d(0,0,0)] motion-reduce:!tracking-normal max-[1280px]:!tracking-normal [@supports(color:oklch(0_0_0))]:bg-[linear-gradient(90deg,hsl(var(--s))_4%,color-mix(in_oklch,hsl(var(--sf)),hsl(var(--pf)))_22%,hsl(var(--p))_45%,color-mix(in_oklch,hsl(var(--p)),hsl(var(--a)))_67%,hsl(var(--a))_100.2%)]">
          Báo lỗi hoặc góp ý
        </h1>
        <p className="text-justify font-semibold text-sm pr-2 pl-2">
          Sự đóng góp ý kiến từ các bạn sẽ là sự hỗ trợ đắc lực giúp chúng tôi
          ngày càng tốt hoàn thiện sản phẩm hơn.
        </p>

        <textarea
          placeholder="Nhập phản hồi của bạn tại đây!"
          className="mt-5 mb-3 h-[30%] textarea textarea-bordered textarea-md w-full "
        ></textarea>
        <input type=" text" placeholder="Email của bạn" className="input w-full max-w-xs" />
        <label
          htmlFor="my-modal"
          // onClick={()=>sendMail()}
          class=" mt-5 w-full btn btn-primary btn-md  bg-gradient-to-tl from-transparent via-blue-600 to-indigo-500"
        >
          Gửi ý kiến
        </label>
      </div>
    </div>
  );
}
export default IssuePage;
