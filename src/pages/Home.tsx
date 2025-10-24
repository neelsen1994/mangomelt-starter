import { Box, Typography, Button, Stack } from '@mui/material'

export default function Home() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        background: 'linear-gradient(180deg, #FFF8E1 0%, #FFE0B2 100%)',
      }}
    >
      <Typography variant="h2" fontWeight={800} color="primary">
        Mango Melt Art Platform
      </Typography>

      <Typography variant="h6" sx={{ mt: 2, maxWidth: 600 }}>
        Promoting local art and connecting artists, venues, and communities.
      </Typography>

      <Typography variant="h4" sx={{ mt: 6, fontWeight: 700 }}>
        🎨 Coming Soon!
      </Typography>

      <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
        <Button variant="contained" color="primary" href="mailto:hello@mangomelt.xyz">
          Contact Us
        </Button>
        <Button variant="outlined" color="primary" href="https://www.instagram.com/mangomeltart">
          Follow on Instagram
        </Button>
      </Stack>
    </Box>
  )
}
