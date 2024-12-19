import { useRef, useState } from "react";
import { gsap } from "gsap";
import buttonGooglePlay from "../assets/79GIv0tl5JK.png";
import buttonMicrosoft from "../assets/1lPaaBoaNgH.png";
import ScreenShots from "../components/screenShots";
import clsx from "clsx";

function LoginScreen() {
  console.log("LoginScreen");
  const spanUsername = useRef();
  const spanPassword = useRef();

  const refInputPassword = useRef();
  const refButtonPassword = useRef();

  const [isVisiblePassword, setIsVisiblePassword] = useState(false);

  const backgroundColor = "bg-white";
  const handleChange = (event, input) => {
    console.log(input);
    const element =
      input === "username"
        ? spanUsername.current
        : input === "password"
        ? spanPassword.current
        : "";
    console.log(element);
    const value = event.target.value;
    if (!(value === "")) {
      gsap.to(element, {
        duration: 0.1,
        top: "4px",
        fontSize: "0.7rem",
        ease: "linear",
      });
      gsap.to(event.target, {
        duration: 0,
        paddingTop: "20px",
      });
    } else {
      gsap.to(element, {
        duration: 0.1,
        top: "11.5px",
        fontSize: "0.8rem",
        ease: "linear",
      });
      gsap.to(event.target, {
        duration: 0,
        paddingTop: "8px",
      });
    }
  };

  function visibilityPassword() {
    if (isVisiblePassword) {
      refInputPassword.current.type = "password";
      setIsVisiblePassword(false);
    } else {
      refInputPassword.current.type = "text";
      setIsVisiblePassword(true);
    }
  }

  return (
    <div
      className={clsx("m-0 p-0 w-screen h-screen font-sans", backgroundColor)}
    >
      <main className="w-full h-[calc(100%-130px)] flex justify-center items-center pt-[25px]">
        <article className="flex justify-center">
          <div className="h-[650px] custom:block hidden">
            <div className="relative w-[391px] h-[604px] bg-image-phones bg-[length:480px_auto] bg-[-48px_0] bg-no-repeat mr-[22px] mb-[15px]">
              <ScreenShots />
            </div>
          </div>

          <div className="w-[360px] mr-[15px] pt-[5px]">
            <div className="flex flex-col items-center border-[1px]  border-[#dbdbdb] h-[425px]">
              <div className="flex justify-center items-center w-full h-[168px] pt-[15px]">
                <i className="bg-instagram-name bg-[-175px_-50px] h-[54px] w-[177px] inline-block"></i>
              </div>
              <form
                className="w-[278px] h-full flex flex-col items-center mt-[20px]"
                action=""
              >
                <label className="relative w-full">
                  <span
                    ref={spanUsername}
                    className="pointer-events-none absolute text-[0.8rem] text-[#737373] left-[8px] top-[11.5px]"
                  >
                    Telefone, nome de usuário ou email
                  </span>
                  <input
                    onChange={() => handleChange(event, "username")}
                    className="w-full h-[42px] bg-[#fafafa] border-[1px] border-[#dbdbdb] rounded-[3px] mb-[6px] pl-[8px] py-[8px] text-[0.8rem] outline-none focus:border-[#a7a7a7] text-left"
                    type="text"
                  />
                </label>
                <label className="relative w-full">
                  <span
                    ref={spanPassword}
                    className="pointer-events-none absolute text-[0.8rem] text-[#737373] left-[8px] top-[11.5px]"
                  >
                    Senha
                  </span>
                  <input
                    ref={refInputPassword}
                    onChange={() => handleChange(event, "password")}
                    className="w-full h-[42px] bg-[#fafafa] border-[1px] border-[#dbdbdb] rounded-[3px] mb-[6px] pl-[8px] py-[8px] text-[0.8rem] outline-none focus:border-[#a7a7a7] text-left"
                    type="password"
                  />
                  {isVisiblePassword ? (
                    <button
                      type="button"
                      ref={refButtonPassword}
                      onClick={visibilityPassword}
                      className="absolute right-0 mt-[11.5px] mr-[11.5px] font-semibold text-[0.9rem] text-[#262626] hover:opacity-[0.6]"
                    >
                      Ocultar
                    </button>
                  ) : (
                    <button
                      type="button"
                      ref={refButtonPassword}
                      onClick={visibilityPassword}
                      className="absolute right-0 mt-[11.5px] mr-[11.5px] font-semibold text-[0.9rem] text-[#262626] hover:opacity-[0.6]"
                    >
                      Mostrar
                    </button>
                  )}
                </label>
                <button
                  type="button"
                  className="w-full h-[36px] bg-[#4cb5f9] rounded-md font-semibold text-white text-[0.9rem] my-[8px]"
                >
                  Entrar
                </button>
                <div className="w-full flex justify-center items-center my-[10px]">
                  <div className="border-t-[1px] w-full flex h-[1px]"></div>
                  <p className="mx-[25px] font-semibold text-[0.9rem] text-[#737385]">
                    OU
                  </p>
                  <div className="border-t-[1px] w-full flex h-[1px]"></div>
                </div>
                <button
                  type="button"
                  className="flex justify-center items-center mb-[10px]"
                >
                  <span className="bg-sprite-core w-[17px] h-[18px] bg-[-413px_-258px] inline-block mr-[10px] rounded-sm"></span>
                  <p className="text-[#385185] font-semibold text-[0.9rem]">
                    Entrar com o Facebook
                  </p>
                </button>
                <a className="text-[#385185] text-[0.9rem]" href="http://">
                  Esqueceu a senha?
                </a>
              </form>
            </div>
            <div className="flex justify-center items-center mt-[15px] py-[20px] text-[0.9rem] border-[1px] border-[#dbdbdb]">
              <p className="mr-[5px]">Não tem uma conta?</p>
              <button type="button" className="text-[#0095f7] font-semibold">
                Cadastre-se
              </button>
            </div>
            <div className="flex flex-col justify-center items-center p-[15px] pb-0 pt-[25px]">
              <p className="mb-[15px]">Obtenha o aplicativo.</p>
              <div className="h-[40px]">
                <button type="button" className="mr-[8px]">
                  <img
                    className="h-[40px] rounded-md"
                    src={buttonGooglePlay}
                    alt=""
                  />
                </button>
                <button type="button">
                  <img
                    className="h-[40px] rounded-md"
                    src={buttonMicrosoft}
                    alt=""
                  />
                </button>
              </div>
            </div>
          </div>
        </article>
      </main>
      <footer className="w-full h-[130px] flex flex-col text-[0.8rem] text-[#737373] pt-[15px]">
        <div className="flex justify-center items-center gap-x-[20px] gap-y-[8px] flex-wrap p-2">
          <a href="">Meta</a>
          <a href="">Sobre</a>
          <a href="">Blog</a>
          <a href="">Carreiras</a>
          <a href="">Ajuda</a>
          <a href="">API</a>
          <a href="">Privacidade</a>
          <a href="">Termos</a>
          <a href="">Localizações</a>
          <a href="">Instagram Lite</a>
          <a href="">Threads</a>
          <a href="">Carregamento de contatos e não usuarios</a>
          <a href="">Meta Verified</a>
        </div>
        <div className="flex justify-center items-center gap-[20px] flex-wrap p-2">
          <select name="" id="">
            <option value="pt-br">Português (Brasil)</option>
          </select>
          <p>&copy; 2024 Instagram from Meta</p>
        </div>
      </footer>
    </div>
  );
}

export default LoginScreen;
