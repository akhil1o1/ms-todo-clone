import React, { useState, useContext } from "react";
import { Box, Stack, Typography, IconButton, Tooltip } from "@mui/material";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import StarIcon from "@mui/icons-material/Star";
import EditIcon from "@mui/icons-material/Edit";
import DateFormatter from "./DateFormatter";
import appContext from "../../Context/appContext";

function Task({
  text,
  id,
  category,
  description,
  dueDate,
  important,
  completed,
  entryDate,
  setShowEditPane,
  setEditedTask,
  saveEditedTask,
}) {
  const [expand, setExpand] = useState(false);
  const task = {
    text,
    id,
    category,
    description,
    dueDate,
    important,
    completed,
    entryDate,
  };

  const ctx = useContext(appContext);
  const { theme } = ctx;

  function handleExpandClick() {
    setExpand((prev) => !prev);
  }

  function handleEditPaneClick() {
    setShowEditPane(true);
    setEditedTask({
      text,
      id,
      category,
      description,
      dueDate,
      important,
      completed,
      entryDate,
    });
  }

  return (
    <Box
      className={theme === "light" ? "task-light" : "task-dark"}
      mt="10px"
      py="7px"
      px="15px"
      sx={{ backgroundColor: theme === "light" ? "#ffffff" : "#1b1b1b" }}
    >
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Stack direction="row" alignItems="center" spacing={2}>
          <Tooltip
            title={completed ? "Mark as incomplete" : "Mark as complete"}
            placement="bottom"
          >
            <IconButton onClick={() => saveEditedTask(task, "completed")}>
              {completed ? (
                <CheckCircleIcon
                  sx={{ color: theme === "light" ? "#757575" : "#fff" }}
                />
              ) : (
                <CheckCircleOutlineOutlinedIcon
                  sx={{ color: theme === "light" ? "#757575" : "#fff" }}
                />
              )}
            </IconButton>
          </Tooltip>
          <Typography sx={{ cursor: "pointer" }} onClick={handleExpandClick}>
            {text}
          </Typography>
        </Stack>
        <Tooltip
          title={important ? "Remove importance" : "Mark as important"}
          placement="bottom"
        >
          <IconButton onClick={() => saveEditedTask(task, "important")}>
            {important ? (
              <StarIcon
                sx={{ color: theme === "light" ? "#757575" : "#fff" }}
              />
            ) : (
              <StarBorderOutlinedIcon
                sx={{ color: theme === "light" ? "#757575" : "#fff" }}
              />
            )}
          </IconButton>
        </Tooltip>
      </Box>
      {expand && (
        <Box py="5px">
          <Box
            my="10px"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box>
              {description && (
                <Typography>
                  <span className="bold-text">Description</span> : {description}
                </Typography>
              )}
            </Box>
            <Tooltip title="Edit task">
              <IconButton onClick={handleEditPaneClick}>
                <EditIcon
                  sx={{ color: theme === "light" ? "#757575" : "#fff" }}
                />
              </IconButton>
            </Tooltip>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="body2">
              <span className="bold-text">Added to</span> : {category}
            </Typography>
            {dueDate && <DateFormatter label={"Due Date"} date={dueDate} />}
            <DateFormatter date={entryDate} label={"Added at"} />
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default Task;
