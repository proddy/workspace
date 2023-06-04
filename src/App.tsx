import { Box } from "@mui/material";
import { readData } from "./api";
import { useRequest } from "alova";

const App = () => {
  // do stuff

  const { data: coreData, send: readCoreData } = useRequest(() => readData(), {
    initialData: {
      data: []
    },
    immediate: false
    // immediate: true

  });

  return (
    <Box>
      <div>Hello</div>
    </Box>
  );
};

export default App;
