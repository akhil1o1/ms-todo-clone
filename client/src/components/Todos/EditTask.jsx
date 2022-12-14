import React, { useContext } from "react";
import {
  Box,
  Typography,
  TextField,
  Stack,
  Tooltip,
  Divider,
  Button,
  IconButton,
} from "@mui/material";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import StarIcon from "@mui/icons-material/Star";
import CloseIcon from "@mui/icons-material/Close";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import DateFormatter from "./DateFormatter";
import appContext from "../../Context/appContext";

function EditTask({
  editedTask,
  setEditedTask,
  setShowEditPane,
  saveEditedTask,
  deleteTask,
}) {
  const {
    text,
    id,
    category,
    description,
    dueDate,
    important,
    completed,
    entryDate,
  } = editedTask;
  console.log(editedTask);

  const ctx = useContext(appContext);
  const { theme } = ctx;

  const completeIcon = completed ? (
    <CheckCircleIcon sx={{ color: theme === "light" ? "#757575" : "#fff" }} />
  ) : (
    <CheckCircleOutlineOutlinedIcon
      sx={{ color: theme === "light" ? "#757575" : "#fff" }}
    />
  );

  const importanceIcon = important ? (
    <StarIcon sx={{ color: theme === "light" ? "#757575" : "#fff" }} />
  ) : (
    <StarBorderOutlinedIcon
      sx={{ color: theme === "light" ? "#757575" : "#fff" }}
    />
  );

  function handleCloseClick() {
    setShowEditPane(false);
  }

  function handleEditInputChange(event) {
    const { name, value } = event.target;
    setEditedTask((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function toggleIcon(buttonName) {
    setEditedTask((prevEditedTask) => ({
      ...prevEditedTask,
      [buttonName]:
        buttonName === "completed"
          ? !editedTask.completed
          : !editedTask.important,
    }));
  }

  return (
    <Box
      className="editTask"
      sx={{ backgroundColor: theme === "light" ? "#ffffff" : "#1b1b1b" }}
      mt="72px"
      p="15px"
      width="30vw"
      height="100%"
    >
      <Box
        pb="10px"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography variant="h6" mb="10px" fontWeight="bold">
          Edit Task
        </Typography>
        <Button
          onClick={saveEditedTask}
          className={theme === "light" ? "add-button" : null}
          variant="contained"
        >
          Save Edit
        </Button>
      </Box>
      <Divider />
      <Typography my="10px" fontWeight="bold">
        Added to : {category}
      </Typography>
      <Divider />
      <Stack
        py="10px"
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Tooltip title={completed ? "Mark as incomplete" : "Mark as complete"}>
          <IconButton onClick={() => toggleIcon("completed")}>
            {completeIcon}
          </IconButton>
        </Tooltip>
        <TextField
          id="standard-basic"
          variant="standard"
          name="text"
          onChange={handleEditInputChange}
          placeholder="Enter task"
          autoFocus
          value={text}
        />
        <Tooltip title={important ? "Remove importance" : "Mark as important"}>
          <IconButton onClick={() => toggleIcon("important")}>
            {importanceIcon}
          </IconButton>
        </Tooltip>
      </Stack>
      <Typography my="12px" fontWeight="bold">
        Task description
      </Typography>
      <Box mb="15px">
        <TextField
          id="standard-textarea"
          name="description"
          onChange={handleEditInputChange}
          placeholder="Description"
          multiline
          variant="standard"
          fullWidth
          value={description}
        />
      </Box>
      <Box py="10px">
        <DateFormatter date={entryDate} label={"Added at"} />
      </Box>
      <Divider />
      <Box py="10px">
        <DateFormatter date={dueDate} label={"Due Date"} />
      </Box>
      <Divider />
      <Box py="10px" mb="10px">
        <label className="bold-text">
          Edit due date
          <input
            onChange={handleEditInputChange}
            name="dueDate"
            className={
              theme === "light" ? "date-input-light" : "date-input-dark"
            }
            type="date"
          />
        </label>
      </Box>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Tooltip title="close">
          <IconButton onClick={handleCloseClick} size="small">
            <CloseIcon
              sx={{
                border: "1px solid",
                borderRadius: "100%",
                color: theme === "light" ? "#757575" : "#fff",
              }}
            />
          </IconButton>
        </Tooltip>
        <Tooltip title="delete task">
          <IconButton onClick={() => deleteTask(id)} size="small">
            <DeleteOutlineOutlinedIcon
              sx={{
                border: "1px solid",
                borderRadius: "100%",
                color: theme === "light" ? "#757575" : "#fff",
              }}
            />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
}

export default EditTask;
