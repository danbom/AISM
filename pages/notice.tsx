import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Table } from "@nextui-org/react";

import Header from "../components/Header";

import styles from "../styles/Home.module.css";

const notice: NextPage = () => {
  return (
    <div></div>
    // <Table
    //   shadow={false}
    //   aria-label="Example pagination  table"
    //   css={{
    //     height: "auto",
    //     minWidth: "100%",
    //   }}
    // >
    //   <Table.Header>
    //     <Table.Column>NAME</Table.Column>
    //     <Table.Column>ROLE</Table.Column>
    //     <Table.Column>STATUS</Table.Column>
    //   </Table.Header>
    //   <Table.Body>
    //     <Table.Row key="1">
    //       <Table.Cell>Tony Reichert</Table.Cell>
    //       <Table.Cell>CEO</Table.Cell>
    //       <Table.Cell>Active</Table.Cell>
    //     </Table.Row>
    //     <Table.Row key="2">
    //       <Table.Cell>Zoey Lang</Table.Cell>
    //       <Table.Cell>Technical Lead</Table.Cell>
    //       <Table.Cell>Paused</Table.Cell>
    //     </Table.Row>
    //     <Table.Row key="3">
    //       <Table.Cell>Jane Fisher</Table.Cell>
    //       <Table.Cell>Senior Developer</Table.Cell>
    //       <Table.Cell>Active</Table.Cell>
    //     </Table.Row>
    //     <Table.Row key="4">
    //       <Table.Cell>William Howard</Table.Cell>
    //       <Table.Cell>Community Manager</Table.Cell>
    //       <Table.Cell>Vacation</Table.Cell>
    //     </Table.Row>
    //     <Table.Row key="5">
    //       <Table.Cell>Jane Fisher</Table.Cell>
    //       <Table.Cell>Senior Developer</Table.Cell>
    //       <Table.Cell>Active</Table.Cell>
    //     </Table.Row>
    //     <Table.Row key="6">
    //       <Table.Cell>Zoey Lang</Table.Cell>
    //       <Table.Cell>Technical Lead</Table.Cell>
    //       <Table.Cell>Paused</Table.Cell>
    //     </Table.Row>
    //     <Table.Row key="7">
    //       <Table.Cell>Jane Fisher</Table.Cell>
    //       <Table.Cell>Senior Developer</Table.Cell>
    //       <Table.Cell>Active</Table.Cell>
    //     </Table.Row>
    //     <Table.Row key="8">
    //       <Table.Cell>William Howard</Table.Cell>
    //       <Table.Cell>Community Manager</Table.Cell>
    //       <Table.Cell>Vacation</Table.Cell>
    //     </Table.Row>
    //   </Table.Body>
    //   <Table.Pagination
    //     color="default"
    //     shadow
    //     align="center"
    //     rowsPerPage={3}
    //     onPageChange={(page) => console.log({ page })}
    //   />
    // </Table>
  );
};

export default notice;
