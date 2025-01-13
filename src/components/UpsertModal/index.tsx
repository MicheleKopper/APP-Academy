import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Grid2,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { style } from "./styles";
import { useState } from "react";
import {
  FieldsErrors,
  validateFormAssessments,
} from "../../utils/validators/assessments.validator";

interface UpsertModalProps {
  open: boolean;
  handleClose: () => void;
}

export function UpsertModal({ open, handleClose }: UpsertModalProps) {
  const [fieldsErrors, setfieldsErrors] = useState<FieldsErrors>({
    title: "",
    grade: "",
    description: "",
  });

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const title = event.currentTarget["title-assessment"].value;
    const grade = Number(event.currentTarget["grade-assessment"].value);
    const description = event.currentTarget["desc-assessment"].value;

    const errors = validateFormAssessments(title, grade, description);

    // Converter objeto em array e faz as validações
    const hasError = Object.keys(errors);
    if (hasError.length) {
      setfieldsErrors(errors);
      return;
    }

    // Garante que o erros limpem do console.log
    setfieldsErrors({} as FieldsErrors);

    console.log(title, grade, description);
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <form onSubmit={onSubmit}>
          <Grid2 container spacing={1}>
            <Grid2 size={12}>
              <Typography variant="h6">New Assessments</Typography>
            </Grid2>

            {/* Título */}
            <Grid2 size={12}>
              <FormControl fullWidth error={!!fieldsErrors.title}>
                <FormLabel htmlFor="title-assessment">Title</FormLabel>
                <TextField
                  id="title-assessment"
                  name="title-assessment"
                  type="text"
                  placeholder="My-title..."
                  variant="outlined"
                  fullWidth
                  required
                  error={!!fieldsErrors.title}
                  helperText={fieldsErrors.title}
                />
              </FormControl>
            </Grid2>

            {/* Nota */}
            <Grid2 size={12} mb={2}>
              <FormControl fullWidth error={!!fieldsErrors.grade}>
                <FormLabel htmlFor="grade-assessment">Grade</FormLabel>
                <TextField
                  id="grade-assessment"
                  name="grade-assessment"
                  type="number"
                  placeholder="10"
                  variant="outlined"
                  fullWidth
                  required
                  error={!!fieldsErrors.grade}
                  helperText={fieldsErrors.grade}
                />
              </FormControl>
            </Grid2>

            {/* Descrição */}
            <Grid2 size={12} mb={2}>
              <FormControl fullWidth error={!!fieldsErrors.description}>
                <FormLabel htmlFor="desc-assessment">Description</FormLabel>
                <TextField
                  id="desc-assessment"
                  name="desc-assessment"
                  type="text"
                  placeholder="My-description..."
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={4}
                  required
                  error={!!fieldsErrors.description}
                  helperText={fieldsErrors.description}
                />
              </FormControl>
            </Grid2>

            <Grid2 size={6}>
              <Button variant="contained" color="error" fullWidth type="reset">
                Cancel
              </Button>
            </Grid2>

            <Grid2 size={6}>
              <Button variant="contained" fullWidth type="submit">
                Submit
              </Button>
            </Grid2>
          </Grid2>
        </form>
      </Box>
    </Modal>
  );
}
