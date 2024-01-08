import Feed from "@/components/Feed";
import Navbar from "@/components/Navbar";
import RightBar from "@/components/RightBar";
import Sidebar from "@/components/Sidebar";
import { Box, Stack } from "@mui/material";

export default function Home() {
  return (
    <Box>
      <Navbar></Navbar>
      <Stack direction="row" spacing={2}>
        <Sidebar></Sidebar>
        <Feed></Feed>
        <RightBar></RightBar>
      </Stack>
    </Box>
  );
}
