import { Shoe } from "@/types/shoe";
import { convertToMoney } from "@/utils/formatter";

interface IProductProps {
  handleSelectProduct: (shoe: Shoe) => void;
  shoe: Shoe;
}

export function Product({ handleSelectProduct, shoe }: IProductProps) {
  return (
    <div
      onClick={() => handleSelectProduct(shoe)}
      className="text-black w-56 h-[308px] flex flex-col justify-center cursor-pointer text-center hover:scale-110 duration-300"
    >
      <img src={shoe.image} className="mt-4 w-52 h-52 object-contain" />
      <span>{shoe.name}</span>

      <div className="w-52 flex gap-2 mt-4 items-center">
        <span className="text-xs line-through text-[#aba0a0]">
          {convertToMoney(shoe.oldPrice)}
        </span>
        <h2 className="text-2xl font-bold">
          {convertToMoney(shoe.currentPrice)}
        </h2>
      </div>
      <div className="w-52 flex gap-1 mt-2 items-center">
        <h4 className="font-bold">
          6x {convertToMoney(shoe.currentPrice / 6)}
        </h4>
        <span className="text-sm">Sem juros</span>
      </div>
    </div>
  );
}
