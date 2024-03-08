import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Packages } from "../../packageType";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  FormControl,
  FormGroup,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  TextField,
} from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import styledComponents from "styled-components";
import axios from "axios";

const StyledBox = styledComponents(Box)`
  
    width:100%;
    max-height:240px;
    padding:10px;
    overflow:auto;
`;
const ClosedIconStyled = styledComponents(Box)`
    &:hover {
        cursor:pointer;
    }
`;
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));
interface AppProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  data: Packages;
  setData: React.Dispatch<React.SetStateAction<Packages>>;
  packages: Packages[];
}

const CustomizedDialogs = ({
  open,
  setOpen,
  data,
  setData,
  packages,
}: AppProps) => {
  const handleClose = () => {
    setOpen(false);
  };
  const getPackageCategories = packages.map((item) => item.packageCategory);
  const packageCategories = getPackageCategories.filter(function (x, i, a) {
    return a.indexOf(x) === i;
  });

  const [openAddModal, setOpenAddModal] = React.useState(false);
  const [testName, setTestName] = React.useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSelectChange = (event: SelectChangeEvent) => {
    setData({
      ...data,
      packageCategory: event.target.value,
    });
  };

  const AddToTestList = () => {
    setData({
      ...data,
      listOfTest: [...data.listOfTest, testName],
    });
    setTestName("");
  };

  // remove test from test list

  const removeFromTestList = (i: number) => {
    setData({
      ...data,
      listOfTest: data.listOfTest.filter((id, index) => index !== i),
    });
  };
  // edit test package
  console.log(localStorage.getItem("access"));
  const handleEdit = () => {
    axios
      .patch(data.update_url, data, {
        headers: { Authorization: `Bearer ${localStorage.getItem("access")}` },
      })
      .then((res: any) => {
        console.log(res.data);
      })
      .catch((err) => console.error(err.message));
  };
  return (
    <>
      {data && (
        <BootstrapDialog onClose={handleClose} open={open}>
          <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
            Edit {data.packageName}
          </DialogTitle>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
          <DialogContent dividers>
            <Typography></Typography>
            <form style={{ display: "grid", rowGap: "12px" }}>
              <FormControl fullWidth>
                <InputLabel>Package Category</InputLabel>
                <Select
                  label="Package Category"
                  name="packageCategory"
                  value={data.packageCategory}
                  size="small"
                  onChange={handleSelectChange}
                >
                  {packageCategories.map((item, index) => (
                    <MenuItem key={index} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <TextField
                size="small"
                name="packageName"
                fullWidth
                label="Package Name"
                value={data.packageName}
                onChange={handleChange}
              />
              <TextField
                size="small"
                multiline
                name="testDescription"
                fullWidth
                value={data.testDescription}
                label="Description"
                onChange={handleChange}
              />
              <Box sx={{ display: "flex", gap: "10px" }}>
                <TextField
                  size="small"
                  name="price"
                  fullWidth
                  value={data.price}
                  type="number"
                  onChange={handleChange}
                />

                <TextField
                  size="small"
                  name="discount"
                  fullWidth
                  value={data.discount}
                  label="discount"
                  helperText="enter  in percentages"
                  type="number"
                  onChange={handleChange}
                />
              </Box>
              <Typography variant="body1">Test List </Typography>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <FormControl fullWidth sx={{ m: 1 }}>
                  <InputLabel htmlFor="outlined-adornment-amount">
                    Test
                  </InputLabel>
                  <OutlinedInput
                    size="small"
                    endAdornment={
                      <InputAdornment position="start">
                        <Button
                          size="small"
                          variant="contained"
                          onClick={AddToTestList}
                        >
                          Add
                        </Button>
                      </InputAdornment>
                    }
                    label="Test"
                    value={testName}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                      setTestName(event.target.value)
                    }
                  />
                </FormControl>
              </Box>
              <StyledBox>
                <Box sx={{ display: "grid", gap: "5px" }}>
                  {data.listOfTest &&
                    data.listOfTest.map((item, index) => (
                      <React.Fragment key={index}>
                        <Box
                          style={{
                            display: "flex",
                            height: "30px",
                            alignItems: "center",
                            width: "100%",
                            background: "rgba(42, 41, 41, 0.09)",
                            padding: "0 5",
                            justifyContent: "space-between",
                          }}
                        >
                          <span style={{ display: "flex" }}>
                            <ArrowRightAltIcon />
                            <Typography variant="body2">{item}</Typography>
                          </span>
                          <ClosedIconStyled>
                            <CloseIcon
                              onClick={() => removeFromTestList(index)}
                            />
                          </ClosedIconStyled>
                        </Box>
                      </React.Fragment>
                    ))}
                </Box>
              </StyledBox>
              <Box sx={{ textAlign: "right", margin: 0 }}>
                <Typography variant="caption" sx={{ textAlign: "right" }}>
                  {data.listOfTest && data.listOfTest.length} tests
                </Typography>
              </Box>
            </form>
          </DialogContent>
          <DialogActions>
            <Button
              autoFocus
              onClick={handleClose}
              variant="contained"
              color="inherit"
            >
              Cancel
            </Button>
            <Button variant="contained" color="success" onClick={handleEdit}>
              Save changes
            </Button>
          </DialogActions>
        </BootstrapDialog>
      )}
    </>
  );
};

export default CustomizedDialogs;
