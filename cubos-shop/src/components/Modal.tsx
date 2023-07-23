import { Shoe } from "@/types/shoe";
import { convertToMoney } from "@/utils/formatter";

interface IModalProps {
  isOpen: boolean;
  handleClose: () => void;
  currentShoe: Shoe | null;
}

export function Modal({ isOpen, handleClose, currentShoe }: IModalProps) {
  if (!isOpen || !currentShoe) return null;
  return (
    <div className="flex justify-center h-full w-full absolute bg-[#0303038c] top-0">
      <div className="w-[488px] max-h-[700px] mt-20 bg-white rounded-lg text-center fixed">
        <div className="flex flex-col items-center text-center w-full p-0 text-black">
          <img
            src="/close-icon.svg"
            alt="Fechar"
            className="absolute right-6 top-6 w-6 h-6 cursor-pointer hover:scale-110 duration-300"
            onClick={handleClose}
          />
          <img
            src={currentShoe.image}
            alt="Produto"
            className="w-96 h-auto max-h-[400px]"
          />
          <strong>{currentShoe.name}</strong>
          <p className="m-12 text-sm text-justify">{currentShoe.description}</p>
          <div className="flex justify-between w-[calc(100%-48px)] pr-6 pb-6">
            <button className="bg-[#52bb50] w-60 border-none h-16 font-bold text-xl text-center text-[#fffcfc] cursor-pointer hover:opacity-80 duration-300">
              Comprar
            </button>
            <div className="flex flex-col items-start w-56 gap-2">
              <div className="flex items-center gap-2 ml-4 w-48">
                <span className="text-xs line-through text-[#aba0a0]">
                  {convertToMoney(currentShoe.oldPrice)}
                </span>
                <h2 className="text-2xl font-bold">
                  R{convertToMoney(currentShoe.currentPrice)}
                </h2>
              </div>
              <div className="flex items-start gap-2 ml-4 w-48">
                <h4 className="font-bold">
                  6x de {convertToMoney(currentShoe.currentPrice / 6)}
                </h4>
                <span className="text-sm">Sem juros</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
