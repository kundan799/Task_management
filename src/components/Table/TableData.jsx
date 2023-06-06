import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { Box, Button, Pagination } from "@mui/material";

import Searchitem from "../Search/SearchItem";
import Sort from "../Sorting/Sort";
import ProjectlistMobile from "../Projectlist/ProjectlistMobile";

const TableData = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  // <--------------------------pagination---------------------------->
  let perPage = 4;
  let totalPage = Math.ceil(data.length / perPage);
  let end = page * perPage;
  let start = end - perPage;
  let paginationData = data.slice(start, end);
  console.log("pagination", paginationData);

  const handleChange = (event, value) => {
    setPage(value);
  };

  // <--------------------------------------data fetch------------------->
  const url = "https://tame-school-uniform-bear.cyclic.app/api/project";
  const getdata = () => {
    axios
      .get(url)
      .then((res) => setData(res.data.message))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getdata();
  }, []);

  // handle start
  const handlestart = (id) => {
    const updatedata = {
      ...data,
      status: "Running",
    };
    axios
      .patch(`${url}/${id}`, updatedata)
      .then(() => {
        getdata();
      })
      .catch((err) => console.log("getting error by update to start"));
  };

  // handle close
  const handleClose = (id) => {
    const updatedata = {
      ...data,
      status: "Closed",
    };
    axios
      .patch(`${url}/${id}`, updatedata)
      .then(() => {
        getdata();
      })
      .catch((err) => console.log("getting error by update to Close"));
  };
  // handle cancel
  const handleCancel = (id) => {
    const updatedata = {
      ...data,
      status: "Cancel",
    };
    axios
      .patch(`${url}/${id}`, updatedata)
      .then(() => {
        getdata();
      })
      .catch((err) => console.log("getting error by update to Cancel"));
  };

  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "60px",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Box sx={{ width: "50%" }}>
          <Searchitem data={data} setData={setData} />
        </Box>

        <Box sx={{ width: "20%" }}>
          <Sort data={data} setData={setData} />
        </Box>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="caption table">
          <TableHead sx={{ backgroundColor: "#e1ebfd" }}>
            <TableRow>
              <TableCell>Project Name</TableCell>
              <TableCell align="right">Reason</TableCell>
              <TableCell align="right">Type</TableCell>
              <TableCell align="right">Division</TableCell>
              <TableCell align="right">Catogery</TableCell>
              <TableCell align="right">Prority</TableCell>
              <TableCell align="right">Dept</TableCell>
              <TableCell align="right">Location</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginationData.map((row) => (
              <TableRow key={row._id}>
                <TableCell
                  component="th"
                  scope="row"
                  style={{ fontSize: "11px" }}
                >
                  {row.Name}
                  <br />
                  <span>
                    {row.startDate} to {row.enddate}
                  </span>
                </TableCell>
                <TableCell align="right">{row.reason}</TableCell>
                <TableCell align="right">{row.type}</TableCell>
                <TableCell align="right">{row.division}</TableCell>
                <TableCell align="right">{row.category}</TableCell>
                <TableCell align="right">{row.prority}</TableCell>
                <TableCell align="right">{row.department}</TableCell>
                <TableCell align="right">{row.location}</TableCell>
                <TableCell align="right" sx={{ fontWeight: "bold" }}>
                  {row.status}
                </TableCell>
                <TableCell align="right">
                  <Button
                    variant="contained"
                    href="#contained-buttons"
                    style={{ borderRadius: "40px" }}
                    onClick={() => handlestart(row._id)}
                  >
                    Start
                  </Button>
                </TableCell>
                <TableCell align="right">
                  <Button
                    variant="outlined"
                    style={{ borderRadius: "40px" }}
                    onClick={() => handleClose(row._id)}
                  >
                    Close
                  </Button>
                </TableCell>
                <TableCell align="right">
                  <Button
                    variant="outlined"
                    style={{ borderRadius: "40px" }}
                    onClick={() => handleCancel(row._id)}
                  >
                    Cancel
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <------------------------pagination----------------> */}
      <Box sx={{ width: "15%", margin: "auto", marginTop: "20px" }}>
        <Pagination
          count={totalPage}
          page={page}
          onChange={handleChange}
          color="primary"
          shape="rounded"
        />
      </Box>
    </>
  );
};

export default TableData;
