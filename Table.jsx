import * as React from 'react';
import * as XLSX from 'xlsx';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
//import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
 
const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
  {
    id: 'population',
    label: 'Population',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'size',
    label: 'Size\u00a0(km\u00b2)',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'density',
    label: 'Density',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];
 
function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}
 
export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rows, setRows] = React.useState([]);
  const [columns, setColumns] = React.useState([]);
 
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
 
    reader.onload = (e) => {
      const binaryStr = e.target.result;
      const workbook = XLSX.read(binaryStr, { type: 'binary' });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
      processData(jsonData);
    };
 
    reader.readAsBinaryString(file);
  };
 
  const processData = (data) => {
    const headers = data[0];
    const formattedColumns = headers.map((header, index) => ({
      id: index.toString(),
      label: header,
      minWidth: 170,
      align: 'left',
    }));
    const formattedRows = data.slice(1).map((row) => {
      const rowData = {};
      headers.forEach((header, index) => {
        rowData[index.toString()] = row[index];
      });
      return rowData;
    });
    setColumns(formattedColumns);
    setRows(formattedRows);
  };
 
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
 
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
 
  return (
<Paper sx={{ width: '100%', overflow: 'hidden' }}>
<Input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} />
      {rows.length > 0 && (
<>
<TableContainer sx={{ maxHeight: 440 }}>
<Table stickyHeader aria-label="sticky table">
<TableHead>
<TableRow>
                  {columns.map((column) => (
<TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
>
                      {column.label}
</TableCell>
                  ))}
</TableRow>
</TableHead>
<TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, rowIndex) => {
                    return (
<TableRow hover role="checkbox" tabIndex={-1} key={rowIndex}>
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
<TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === 'number'
                                ? column.format(value)
                                : value}
</TableCell>
                          );
                        })}
</TableRow>
                    );
                  })}
</TableBody>
</Table>
</TableContainer>
<TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
</>
      )}
</Paper>
  );
}