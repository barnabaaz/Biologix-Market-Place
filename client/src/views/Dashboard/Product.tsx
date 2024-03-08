import React from "react";
import styled from "styled-components";
import { useStore } from "../../context";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import { Box, Button, TableRow as MuiTableRow } from "@mui/material";
import Paper from "@mui/material/Paper";
import EditDialogue from "./EditModal";
import { Packages } from "../../packageType";
import AddModal from "./AddModal";

const Container = styled.div``;

const MainTitle = styled.div`
  display: flex;
  justify-content: space-between;
`;
const TableRow = styled.tr``;
const TableDefinition = styled.td`
  display: flex;
  height: 100%;
  gap: 10px;
  width: 100%;

  justify-content: center;
  align-items: center;
`;
const StyledTable = styled.table`
  background-color: #263043;
  padding: 10px;
`;
export interface Data {
  packageCategory: string;
  listOfTest: string[];
  price: number;
  packageName: string;
  testDescription: string;
  selected: boolean;
  discount: number;
  discountTag: boolean;
}
const Product = () => {
  const {
    packages: { packages },
  } = useStore();
  console.log(packages);
  const [openEditModal, setOpenModal] = React.useState(false);
  const [openAddModal, setOpenAddModal] = React.useState(true);
  const [editData, setEditData] = React.useState<Packages>({} as Packages);
  const [addData, setAddData] = React.useState<Data>({
    packageCategory: "",
    listOfTest: [],
    price: 0,
    packageName: "",
    testDescription: "",
    selected: true,
    discount: 0,
    discountTag: false,
  });

  const editModal = (data: Packages) => {
    setOpenModal(true);
    setEditData(data);
  };

  return (
    <Container>
      <EditDialogue
        open={openEditModal}
        setOpen={setOpenModal}
        data={editData}
        setData={setEditData}
        packages={packages}
      />
      <AddModal
        openAddModal={openAddModal}
        setOpenAddModal={setOpenAddModal}
        packages={packages}
        data={addData}
        setData={setAddData}
      />
      <MainTitle className="main-title">
        <h3>PACKAGES</h3>
      </MainTitle>
      <div className="mb-3 d-flex justify-content-end">
        <div className="btn btn-success btn-lg">Add New Product</div>
      </div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Package Category</TableCell>
              <TableCell>Package Name</TableCell>
              <TableCell>Number of Test</TableCell>
              <TableCell>Price</TableCell>
              <TableCell> Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {packages.map((item, index) => (
              <TableRow key={index} className="">
                <TableCell>{index + 1}</TableCell>
                <TableCell>{item.packageCategory}</TableCell>
                <TableCell>{item.packageName}</TableCell>
                <TableCell>{item.listOfTest.length}</TableCell>
                <TableCell>{item.price}</TableCell>
                <TableCell>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-evenly",
                      gap: "10px",
                    }}
                  >
                    <Button
                      variant="contained"
                      size="small"
                      onClick={() => editModal(item)}
                    >
                      Edit
                    </Button>
                    <Button color="warning" variant="contained" size="small">
                      Delete
                    </Button>
                    <Button color="info" size="small" variant="contained">
                      Approve
                    </Button>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Product;
