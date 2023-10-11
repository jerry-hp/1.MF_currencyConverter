import { useState } from "react";
import { Box, Button, Select, Input, Text, Heading } from "@chakra-ui/react";

function Currency() {
  const [ip, setIp] = useState("");
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("USD");
  const [Hasil, setHasil] = useState<string | null>(null);

  const handleIp = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valueIp = e.target.value;
    setIp(valueIp);
  };
  const handleFrom = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setFrom(value);
  };
  const handleTo = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const valueTo = e.target.value;
    setTo(valueTo);
  };
  const handleConvert = () => {
    if (from === "USD" && to === "USD") {
      setHasil(`$ ${ip}`);
    }
    if (from === "USD" && to === "IDR") {
      const result = Number(ip) * 15000;
      setHasil(`Rp. ${result.toString()}`);
    }
    if (from === "IDR" && to === "USD") {
      const result = Number(ip) / 15000;
      setHasil(`$ ${result.toString()}`);
    }
    if (from === "USD" && to === "EUR") {
      const result = Number(ip) * 0.94;
      setHasil(`€ ${result.toString()}`);
    }
    if (from === "EUR" && to === "USD") {
      const result = Number(ip) / 0.94;
      setHasil(`$ ${result.toString()}`);
    }
    if (from === "EUR" && to === "IDR") {
      const result = Number(ip) * 16677.77;
      setHasil(`Rp. ${result.toString()}`);
    }
    if (from === "IDR" && to === "EUR") {
      const result = Number(ip) / 16677.77;
      setHasil(`€ ${result.toString()}`);
    }
    if (from === "EUR" && to === "EUR") {
      const result = Number(ip);
      setHasil(`€ ${result.toString()}`);
    }
    if (from === "IDR" && to === "IDR") {
      const result = Number(ip);
      setHasil(`Rp. ${result.toString()}`);
    }
  };
  return (
    <>
      <Box
        maxW="800px"
        m="0 auto"
        display="grid"
        gridTemplateAreas="'h h h''ip ip ip''s1 to s2''btn btn btn''heading heading heading'"
        gridAutoColumns="2fr max-content 2fr"
        gridTemplateRows="max-content max-content max-content max-content max-content"
        gap="1rem"
        boxSizing="border-box"
        padding="20px"
        border="2px solid black"
        mt="2rem"
      >
        <Heading gridArea="h" textAlign="center">
          Currency Converter
        </Heading>
        <Input type="number" gridArea="ip" value={ip} onChange={handleIp} />
        <Select gridArea="s1" value={from} onChange={handleFrom}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="IDR">IDR</option>
        </Select>
        <Text gridArea="to" m="0 auto">
          To
        </Text>
        <Select gridArea="s2" value={to} onChange={handleTo}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="IDR">IDR</option>
        </Select>
        <Button gridArea="btn" onClick={handleConvert}>
          Convert
        </Button>
        <Heading gridArea="heading">{Hasil !== null ? `Result : ${Hasil}` : "Result :"}</Heading>
      </Box>
    </>
  );
}

export default Currency;
