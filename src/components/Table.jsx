import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import { Delete, EditRoadOutlined, RemoveRedEyeOutlined } from '@mui/icons-material';

function TableComponent() {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="left">Faculty Name</TableCell>
            <TableCell align="left">Faculty Type</TableCell>
            <TableCell align="left">Primary Faculty</TableCell>
            <TableCell align="left">Postcode/Zip</TableCell>
            <TableCell align="left">External Id</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell align="left">Data 1</TableCell>
            <TableCell align="left">Data 2</TableCell>
            <TableCell align="left">Data 3</TableCell>
            <TableCell align="left">Data 4</TableCell>
            <TableCell align="left">Data 5</TableCell>
            <TableCell colSpan={3} align="center">
                <Button> <EditRoadOutlined></EditRoadOutlined></Button>
                <Button color="warning"><Delete></Delete></Button>
                <Button color = "success"><RemoveRedEyeOutlined></RemoveRedEyeOutlined></Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableComponent;
