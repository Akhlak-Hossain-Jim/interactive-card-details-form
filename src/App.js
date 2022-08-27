import { useState } from "react";
import styled from "styled-components";
import Left from "./Components/Left";
import Right from "./Components/Right";

export default function App() {
  const [CardNumber, setCardNumber] = useState();
  const [Name, setName] = useState();
  const [ExpMonth, setExpMonth] = useState();
  const [ExpYear, setExpYear] = useState();
  const [Cvc, setCvc] = useState();

  return (
    <Container>
      <Left
        CardNumber={CardNumber}
        Name={Name}
        ExpMonth={ExpMonth}
        ExpYear={ExpYear}
        cvc={Cvc}
      />
      <Right
        CardNumber={CardNumber}
        Name={Name}
        ExpMonth={ExpMonth}
        ExpYear={ExpYear}
        cvc={Cvc}
        setCardNumber={setCardNumber}
        setName={setName}
        setExpMonth={setExpMonth}
        setExpYear={setExpYear}
        setCvc={setCvc}
      />
    </Container>
  );
}

const Container = styled.main`
  max-width: 1440px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 600) {
    grid-template-columns: 1fr;
  }
  @media (min-width: 900px) {
    height: min(100vh, 900px);
  }
`;
