import { Add } from "@mui/icons-material";
import { Fab } from "@mui/material";

interface FloatButtonProps {
  onClick: () => void;
}

export function FloatButton({ onClick }: FloatButtonProps) {
  return (
    <div>
      <Fab
        sx={{
          position: "absolute",
          bottom: 20,
          right: 20,
        }}
        color="primary"
        aria-label="add"
        onClick={onClick}
      >
        <Add />
      </Fab>
    </div>
  );
}
