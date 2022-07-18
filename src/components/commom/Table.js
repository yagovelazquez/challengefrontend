import {
  Thead,
  Table as ChakraTable,
  Tr,
  Th,
  Td,
  Tbody,
  chakra,
} from "@chakra-ui/react";
import React from "react";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import { useTable, useSortBy } from "react-table";

function Table(props) {
  const { data, columns } = props;

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy);

  return (
    <ChakraTable variant='striped'  {...getTableProps()}>
      <Thead>
        {headerGroups.map((headerGroup) => (
          <Tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <Th
                {...column.getHeaderProps(column.getSortByToggleProps())}
                isNumeric={column.isNumeric}
              >
                {column.render("Header")}
                <chakra.span pl="4">
                  {column.isSorted ? (
                    column.isSortedDesc ? (
                      <GoTriangleDown aria-label="sorted descending" />
                    ) : (
                      <GoTriangleUp aria-label="sorted ascending" />
                    )
                  ) : null}
                </chakra.span>
              </Th>
            ))}
          </Tr>
        ))}
      </Thead>
      <Tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <Tr {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <Td {...cell.getCellProps()} isNumeric={cell.column.isNumeric}>
                  {cell.render("Cell")}
                </Td>
              ))}
            </Tr>
          );
        })}
      </Tbody>
    </ChakraTable>
  );
}

export default Table;
