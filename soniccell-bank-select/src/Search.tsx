import React from "react";
import { Table } from "react-bulma-components";

interface Bank {
  num: number;
  name: string;
  bankLsb: number;
  bankMsb: number;
}

type SearchState = {
  text: string;
  banks: Bank[];
};

const Search: React.FC<{}> = props => {
  return (
    <Table>
      <thead>
        <tr>
          <th>test</th>
          <th>test</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>test body</td>
          <td>test body</td>
        </tr>
        <tr>
          <td>test body</td>
          <td>test body</td>
        </tr>
        <tr>
          <td>test body</td>
          <td>test body</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default Search;
