import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import { Delete, EditRoadOutlined, RemoveRedEyeOutlined } from '@mui/icons-material';

function TableComponent({ columns, data }) {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((columnName, index) => (
              <TableCell key={index} align="left">
                {columnName}
              </TableCell>
            ))}
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {columns.map((columnName, colIndex) => (
                <TableCell key={colIndex} align="left">
                  {row[columnName]}
                </TableCell>
              ))}
              <TableCell colSpan={3} align="center">
                <Button>
                  <EditRoadOutlined />
                </Button>
                <Button color="warning">
                  <Delete />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableComponent;
