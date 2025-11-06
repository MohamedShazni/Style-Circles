import { Route, Routes } from "react-router";
import BabyShopLanding from "./BabyShopLanding";
import Collections from "./Collections";

const main = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<BabyShopLanding />} />
        <Route path="/Collections" element={<Collections />} />
      </Routes>
    </>
  );
};

export default main;
