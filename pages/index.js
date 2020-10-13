import { useEffect, useState } from "react";
import Head from "next/head";
import TableRow from "../components/TableRow";
import { Heading, Flex, Stack } from "@chakra-ui/core";
export default () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      const res = await fetch("/api");
      const newData = await res.json();
      setData(newData);
    }
    getData();
  }, []);
  return (
    <main>
      <Head>
        <title>Next.js, FaunaDB and Node.js</title>
      </Head>
      <Heading as="h1" my={2} textAlign="center">
        Next.js, FaunaDB and Node.js
      </Heading>
      <Heading as="h2" my={2} textAlign="center">
        Customer Data
      </Heading>
      <Flex mt={12} align="center" justify="center">
        <Stack>
          <Heading mb={6} as="h4">
            Name:
          </Heading>
          <Heading mt={6} as="h4">
            Phone:
          </Heading>
          <Heading my={4} as="h4">
            Credit Card:
          </Heading>
        </Stack>
        {data.length > 0 ? (
          data.map((d) => (
            <TableRow
              key={d.data.telephone}
              creditCard={d.data.creditCard.number}
              firstName={d.data.firstName}
              lastName={d.data.lastName}
              telephone={d.data.telephone}
            />
          ))
        ) : (
          <>
            <TableRow loading />
            <TableRow loading />
            <TableRow loading />
          </>
        )}
      </Flex>
    </main>
  );
};
