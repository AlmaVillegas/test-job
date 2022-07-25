import { useCallback, useEffect } from "react"
import { useSnackbar } from "notistack"
import {
  CssBaseline,
  ThemeProvider,
  Container,
  Grid,
  Box,
} from "@mui/material" 
import Layout from "./common/components/layout" 
import { theme } from "./utils" 
import {
  Bar,
  Description,
  FormBodyFatCalculator,
  Title,
} from "./common/components/elements" 
import { useAppSelector } from "./common/hooks" 

function App() {
  const { alerts } = useAppSelector((state) => state) 
  const { alert } = alerts 
  const { enqueueSnackbar } = useSnackbar() 
  const viewAlert = useCallback(() => {
    if (alert)
      enqueueSnackbar(alert.message, {
        key: alert.id,
        variant: alert.status,
        autoHideDuration: 6000,
        transitionDuration: { enter: 400, exit: 400 }
      }) 
  }, [alert, enqueueSnackbar]) 

  useEffect(() => viewAlert(), [viewAlert]) 
  return (
    <ThemeProvider theme={theme()}>
      <CssBaseline />
      <Layout>
        <Container maxWidth="xl">
          <Grid container spacing={2}>
            <Grid item sm={12} md={5} lg={6}>
              <Box>
                <Title />
                <Description />
                <FormBodyFatCalculator />
              </Box>
            </Grid>
            <Grid item sm={12} md={7} lg={6}>
              <Bar />
            </Grid>
          </Grid>
        </Container>
      </Layout>
    </ThemeProvider>
  ) 
}

export default App 
