import { Layout } from "@/components/Layout";
import { Modal } from "@/components/Modal";
import { Product } from "@/components/Product";
import { Shoe } from "@/types/shoe";
import { GetStaticProps } from "next";
import { useState } from "react";

interface IHomeProps {
  shoes: Shoe[];
}

export default function Home({ shoes }: IHomeProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentShoe, setCurrentShoe] = useState<Shoe | null>(null);

  function handleSelectProduct(shoe: Shoe) {
    setCurrentShoe(shoe);
    setIsOpen(true);
  }

  function handleClose() {
    setIsOpen(false);
  }
  return (
    <Layout>
      <div className="flex flex-wrap px-28 gap-20">
        {shoes.map(shoe => (
          <Product
            key={shoe.id}
            shoe={shoe}
            handleSelectProduct={handleSelectProduct}
          />
        ))}
      </div>
      <Modal
        isOpen={isOpen}
        handleClose={handleClose}
        currentShoe={currentShoe}
      />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(
    "https://api-contacts.pedagogico.cubos.academy/shoes",
  );

  const data = await response.json();

  return {
    props: {
      shoes: [...data],
    },
  };
};
