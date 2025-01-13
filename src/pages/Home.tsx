import { Button, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../store/modules/userLogged/userLoggedSlice";
import { FloatButton } from "../components/FloatButton";
import { UpsertModal } from "../components/UpsertModal";

export function Home() {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const userLoggedRedux = useAppSelector((state) => state.userLogged);

  const [openModal, setOpenModal] = useState(false);

  function handleLogout() {
    // dispara o logout
    dispatch(logout());
  }

  useEffect(() => {
    if (!userLoggedRedux.id) {
      //navego para login
      navigate("/login");
    }
  }, [userLoggedRedux, navigate]);

  return (
    <>
      <Typography variant="h2">Welcom, {userLoggedRedux.name}</Typography>
      <Button variant="contained" color="error" onClick={handleLogout}>
        Logout
      </Button>

      <FloatButton onClick={() => setOpenModal(true)} />

      <UpsertModal open={openModal} handleClose={() => setOpenModal(false)} />
    </>
  );
}
