import { RiAddLine, RiPencilLine } from "react-icons/ri";
import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Checkbox,
  Table,
  Td,
  Th,
  Thead,
  Text,
  theme,
  Tr,
  Tbody,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { Pagination } from "../../components/Pagination";

export default function UserList() {

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
            </Heading>
            <Button
              as="a"
              size="sm"
              fontSize="sm"
              colorScheme="pink"
              leftIcon={<Icon as={RiAddLine} fontSize="20" />}
            >
              Criar novo
            </Button>
          </Flex>
          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px={["4","4","6"]} color="gray.300" width="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuário</Th>
                  { isWideVersion && <Th>Data de cadastro</Th>}
                <Th width="8"></Th>
              </Tr>
            </Thead>

            <Tbody>
              <Tr>
                <Td px={["4","4","6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Victor Mayer</Text>
                    <Text fontSize="small" color="gray.300">
                      victor@lunnar.team
                    </Text>
                  </Box>
                </Td>
                { isWideVersion && <Td>18 de Janeiro,2023</Td>}

              </Tr>
              <Tr>
                <Td px={["4","4","6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Victor Mayer</Text>
                    <Text fontSize="small" color="gray.300">
                      victor@lunnar.team
                    </Text>
                  </Box>
                </Td>
                { isWideVersion && <Td>18 de Janeiro,2023</Td>}
               
              </Tr>
              <Tr>
                <Td px={["4","4","6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Victor Mayer</Text>
                    <Text fontSize="small" color="gray.300">
                      victor@lunnar.team
                    </Text>
                  </Box>
                </Td>
                { isWideVersion && <Td>18 de Janeiro,2023</Td>}

              </Tr>
            </Tbody>
          </Table>
          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}
