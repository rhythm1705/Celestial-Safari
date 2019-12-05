import React, { useEffect, useState } from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  Text
} from "grommet";
import Spinner from "../../reusables/Spinner";
import { external as axios } from "../../utils/externalAxios";


function PeopleInSpace() {
  const columns = [
    {
      property: "name",
      label: "Name",
      dataScope: "row",
      format: datum => <strong>{datum.name}</strong>
    },
    {
      property: "craft",
      label: "Craft"
    }
  ];
  const [peopleInSpace, setPeopleInSpace] = useState({});
  useEffect(() => {
    if (JSON.stringify(peopleInSpace) === JSON.stringify({})) {
      axios
        .get("http://api.open-notify.org/astros.json", { crossdomain: true })
        .then(res => {
          setPeopleInSpace(res.data);
        });
    }
  });
  return (
    <Box>
      <Text>There are currently {peopleInSpace.number} people in space.</Text>
      {JSON.stringify(peopleInSpace) === JSON.stringify({}) ? (
        <Spinner />
      ) : (
        <Table caption="Simple Table">
          <TableHeader>
            <TableRow>
              {columns.map(c => (
                <TableCell
                  key={c.property}
                  scope="col"
                  border="bottom"
                  align={c.align}
                >
                  <Text>{c.label}</Text>
                </TableCell>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {peopleInSpace.people.map(datum => (
              <TableRow key={datum.name}>
                {columns.map(c => (
                  <TableCell
                    key={c.property}
                    scope={c.dataScope}
                    align={c.align}
                  >
                    <Text>
                      {c.format ? c.format(datum) : datum[c.property]}
                    </Text>
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </Box>
  );
}

export default PeopleInSpace;
