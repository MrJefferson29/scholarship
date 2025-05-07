import { Container, Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Grid, Card, CardContent, CardMedia, Divider, useTheme, useMediaQuery } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import menka1 from '../assets/menka1.png';
import menka2 from '../assets/menka2.png';
import menka3 from '../assets/menka3.png';
import mitaccul1 from '../assets/mitaccul1.png';
import mitaccul2 from '../assets/mitaccul2.png';
import mitaccul3 from '../assets/mitaccul3.png';
import mitaccul4 from '../assets/mitaccul4.png';
import story1 from '../assets/story1.png';
import story2 from '../assets/story2.png';

const ordinaryLevelCandidates = [
  { name: "Anguh Rodrick Muluh", school: "Model Charity Secondary School Santa", region: "North West" },
  { name: "Awa Favour Muluh", school: "All Saints Bilingual College Bonaberi-Douala", region: "Littoral" },
  { name: "Awa Rejoice Ghang", school: "GBHS Etoug-Ebe", region: "Centre" },
  { name: "Awa Treasure Afanwui", school: "GBHS Mbouda", region: "West" },
  { name: "Cho Happiness Muluh", school: "Reunification Bilingual College Bafoussam", region: "West" },
  { name: "Fonkam Tema Awa", school: "Holy Rosary Integrated Comprehensive College, Bamenda", region: "North West" },
  { name: "Jason Priestly Awa", school: "Rhema Comprehensive College, Atuakom", region: "South West" },
  { name: "Khan Favour Zoh", school: "Saint Jacque's Comprehensive Bilingual College Douala", region: "Littoral" },
  { name: "Khan Mercy Ngwe", school: "ST. Frederick Comprehensive High School Bamenda", region: "North West" },
  { name: "Magha Clarise Nkeng", school: "Nitop External", region: "North West" },
  { name: "Mbuh Desny", school: "Institut Prive Laic Techniques Bonaberi", region: "Littoral" },
  { name: "Mbuh Jude Amah", school: "Standard Secondary School Santa", region: "North West" },
  { name: "Mesung Blaise Penn", school: "Maak-Paulo Bilingual College Bafoussam", region: "West" },
  { name: "Mokom Courage Lum", school: "Nitop Bamenda External", region: "North West" },
  { name: "Muluh Penn Teneng", school: "Cornell Inanloo Mbalngong External", region: "North West" },
  { name: "Muluh Solang Awa", school: "Kad-Ndap Bilingual Secondary School Simbock", region: "Centre" },
  { name: "Ndoh Mervyn Ade", school: "Tamu Golden Institute Yaounde", region: "Centre" },
  { name: "Ngenghang Success Teneng", school: "Cambridge Standard Comprehensive Institute Nkwen Bamenda", region: "North West" },
  { name: "Ngwa Faith Ngwi", school: "National Comprehensive College Limbe", region: "South West" },
  { name: "Ningmbuh Louiseline Ndah", school: "GBHS Deido Douala", region: "Littoral" },
  { name: "Nji Joy Menka", school: "ST. Joseph Catholic College Mankon, Bamenda", region: "North West" },
  { name: "Nkeng Brandon Teneng", school: "Step by Step Secondary School, Mankon", region: "North West" },
  { name: "Penn Gideon Muluh", school: "Junior GBHS Etoug-Ebe", region: "Centre" },
  { name: "Penn Tengem Awa Nathan", school: "All Saints Bilingual College Bonaberi-Douala", region: "Littoral" },
  { name: "Sirri Palma Teku", school: "Complexe Polytechnique Bilingue Prive, Laic Tama", region: "North West" },
  { name: "Tah Payne Awa", school: "Sacred Heart College Mankon", region: "North West" },
  { name: "Tah Payne Azuu", school: "Sacred Heart College Mankon", region: "North West" },
  { name: "Taka Brigia Neng", school: "Bamenda Old Town External 1", region: "North West" },
  { name: "Taku Faith Princess", school: "Saint Joseph Calasanz Bilingual Academic Complex, Messame", region: "Centre" },
  { name: "Teneng Michelle Bless", school: "Woter Fahone Bilingual Secondary and High School Mbankomo", region: "Centre" },
  { name: "Tezeh Kelly Bright", school: "Mefut GBHS Mbouda", region: "West" },
  { name: "Wenyi Favour Khan", school: "Saint Benedict College Mvolye Yaounde", region: "Centre" }
];

const advancedLevelCandidates = [
  { name: "Anguh Lovee Lum", school: "GBHS Mbouda-Banock", region: "West" },
  { name: "Anyam Kelly Mengwi", school: "Faith Comprehensive High School Obili Yaounde", region: "Centre" },
  { name: "Asah Courage Wenyen", school: "GBHS Mbouda", region: "West" },
  { name: "Cho Faith Azie", school: "Santa Memorial Comprehensive College, Santa", region: "North West" },
  { name: "Cho Gerald Mokom", school: "Mugheb Nkwen External", region: "North West" },
  { name: "Cho Shanise Ngwi", school: "City College of Commerce Mankon", region: "North West" },
  { name: "Cho Success Mbo", school: "GBHS Mbouda", region: "West" },
  { name: "Fombu Precious Wonjighe", school: "Step by Step Secondary School, Mankon", region: "North West" },
  { name: "Khan Tracy Ngwi", school: "GBHS Mendong Yaounde", region: "Centre" },
  { name: "Kiyang Ghang Junior", school: "Nkeng Bamenda Special Centre 3", region: "North West" },
  { name: "Magha Lourdest Muluh", school: "PCHS Bamenda", region: "North West" },
  { name: "Mbuh Favour Mbuh", school: "Etouge-Ebe External 2", region: "Centre" },
  { name: "Muluh Blessing Azienyu", school: "PCHS Bamenda", region: "North West" },
  { name: "Muluh Favour Ngwi", school: "PCHS Bamenda", region: "North West" },
  { name: "Ndikum Desny Teneng", school: "GBHS Mbouda", region: "West" },
  { name: "Ntambo Nchumilu George-Reward", school: "Nkam Holy Rosary Integrated Comprehensive College, Bamenda", region: "North West" },
  { name: "Nyah Divine Blessing", school: "PCHS Bamenda", region: "North West" },
  { name: "Penn Favour Awa", school: "GBHS Bamenda", region: "North West" },
  { name: "Penn Izekel Ntunkheh", school: "GBHS Penka Michel", region: "North West" },
  { name: "Penn Raissa Mengwi", school: "Our Lady of Lourdes Secondary College Mankon", region: "North West" },
  { name: "Pezieh Menya", school: "Reunification Bilingual College Bafoussam", region: "West" },
  { name: "Powoh Phinehas Azienuih", school: "GBHS Bojongo-Douala", region: "Littoral" },
  { name: "Tangi Jenny Angel", school: "Magha Baptist High School Yaounde", region: "Centre" },
  { name: "Teneng Gloria Ning", school: "GBHS Bae", region: "North West" },
  { name: "Tenig Angelo", school: "GHSS Ngaoundal", region: "Adamawa" },
  { name: "Tening Anella Magha", school: "GBHS Mbouda-Rural", region: "West" },
  { name: "Tennu Desny", school: "GBHS Bamenda", region: "North West" },
  { name: "Tezeh Kelly Mezoh", school: "ST. Paul's Bilingual College Bafang-Haut-Nkam", region: "West" },
  { name: "Tezeh Rex Teneng", school: "GBHS Mbouda", region: "West" },
  { name: "Wanjah Khan Paul Landry", school: "GBHS Aela", region: "North West" },
  { name: "Winnihope Anuapiabali Mboh", school: "LadyBird Secondary School Yaounde", region: "Centre" }
];

const eventImages = [
  {
    image: menka1,
    description: "Scholarship Award Ceremony at Menka Palace"
  },
  {
    image: menka2,
    description: "Distribution of Didactic Materials to Students"
  },
  {
    image: menka3,
    description: "Team Members Awarding Scholarships at Menka Palace"
  },
  {
    image: mitaccul1,
    description: "P.D.O Executive President & Team at MITACCUL"
  },
  {
    image: mitaccul2,
    description: "Scholarship Award Ceremony at MITACCUL Hall"
  },
  {
    image: mitaccul3,
    description: "Presentation of Awards at MITACCUL"
  },
  {
    image: mitaccul4,
    description: "Group Photo with Award Recipients at MITACCUL"
  },
  {
    image: story1,
    description: "Success Stories: Our Scholars' Journey"
  },
  {
    image: story2,
    description: "Impact Stories: Transforming Lives Through Education"
  }
];

function ScholarshipAwards() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          background: 'linear-gradient(45deg, #1a237e 30%, #534bae 90%)',
          color: 'white',
          py: { xs: 6, md: 10 },
          textAlign: 'center',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            opacity: 0.1,
          },
        }}
      >
        <Container maxWidth="md">
          <Typography 
            variant="h2" 
            component="h1" 
            gutterBottom
            sx={{
              fontWeight: 700,
              textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
              mb: 3,
            }}
          >
            Scholarship Awards
          </Typography>
          <Typography 
            variant="h5" 
            sx={{
              opacity: 0.9,
              maxWidth: '800px',
              mx: 'auto',
            }}
          >
            Celebrating Academic Excellence and Supporting Future Leaders
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* Ordinary Level Section */}
        <Paper 
          elevation={0}
          sx={{ 
            p: { xs: 2, sm: 4 }, 
            mb: 6,
            background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
            borderRadius: 2,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <SchoolIcon sx={{ fontSize: { xs: 30, sm: 40 }, color: 'primary.main', mr: 2 }} />
            <Typography variant="h4" component="h2" color="primary.main" sx={{ fontSize: { xs: '1.5rem', sm: '2rem' } }}>
              GCE Ordinary Level Scholars
            </Typography>
          </Box>
          <Box sx={{ 
            width: '100%', 
            overflowX: 'auto',
            '&::-webkit-scrollbar': {
              height: '8px',
            },
            '&::-webkit-scrollbar-track': {
              background: '#f1f1f1',
              borderRadius: '4px',
            },
            '&::-webkit-scrollbar-thumb': {
              background: '#888',
              borderRadius: '4px',
              '&:hover': {
                background: '#555',
              },
            },
          }}>
            <TableContainer 
              component={Paper} 
              sx={{ 
                mb: 4,
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                borderRadius: 2,
                minWidth: { xs: 650, sm: '100%' },
              }}
            >
              <Table>
                <TableHead>
                  <TableRow sx={{ backgroundColor: 'primary.main' }}>
                    <TableCell sx={{ color: 'white', fontWeight: 'bold', whiteSpace: 'nowrap' }}>Name</TableCell>
                    <TableCell sx={{ color: 'white', fontWeight: 'bold', whiteSpace: 'nowrap' }}>School</TableCell>
                    <TableCell sx={{ color: 'white', fontWeight: 'bold', whiteSpace: 'nowrap' }}>Region</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {ordinaryLevelCandidates.map((candidate, index) => (
                    <TableRow 
                      key={index}
                      sx={{ 
                        '&:nth-of-type(odd)': { backgroundColor: 'rgba(0, 0, 0, 0.02)' },
                        '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.04)' },
                      }}
                    >
                      <TableCell sx={{ whiteSpace: 'nowrap' }}>{candidate.name}</TableCell>
                      <TableCell sx={{ minWidth: { xs: 200, sm: 300 } }}>{candidate.school}</TableCell>
                      <TableCell sx={{ whiteSpace: 'nowrap' }}>{candidate.region}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Paper>

        {/* Advanced Level Section */}
        <Paper 
          elevation={0}
          sx={{ 
            p: { xs: 2, sm: 4 }, 
            mb: 6,
            background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
            borderRadius: 2,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <EmojiEventsIcon sx={{ fontSize: { xs: 30, sm: 40 }, color: 'primary.main', mr: 2 }} />
            <Typography variant="h4" component="h2" color="primary.main" sx={{ fontSize: { xs: '1.5rem', sm: '2rem' } }}>
              GCE Advanced Level Scholars
            </Typography>
          </Box>
          <Box sx={{ 
            width: '100%', 
            overflowX: 'auto',
            '&::-webkit-scrollbar': {
              height: '8px',
            },
            '&::-webkit-scrollbar-track': {
              background: '#f1f1f1',
              borderRadius: '4px',
            },
            '&::-webkit-scrollbar-thumb': {
              background: '#888',
              borderRadius: '4px',
              '&:hover': {
                background: '#555',
              },
            },
          }}>
            <TableContainer 
              component={Paper} 
              sx={{ 
                mb: 4,
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                borderRadius: 2,
                minWidth: { xs: 650, sm: '100%' },
              }}
            >
              <Table>
                <TableHead>
                  <TableRow sx={{ backgroundColor: 'primary.main' }}>
                    <TableCell sx={{ color: 'white', fontWeight: 'bold', whiteSpace: 'nowrap' }}>Name</TableCell>
                    <TableCell sx={{ color: 'white', fontWeight: 'bold', whiteSpace: 'nowrap' }}>School</TableCell>
                    <TableCell sx={{ color: 'white', fontWeight: 'bold', whiteSpace: 'nowrap' }}>Region</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {advancedLevelCandidates.map((candidate, index) => (
                    <TableRow 
                      key={index}
                      sx={{ 
                        '&:nth-of-type(odd)': { backgroundColor: 'rgba(0, 0, 0, 0.02)' },
                        '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.04)' },
                      }}
                    >
                      <TableCell sx={{ whiteSpace: 'nowrap' }}>{candidate.name}</TableCell>
                      <TableCell sx={{ minWidth: { xs: 200, sm: 300 } }}>{candidate.school}</TableCell>
                      <TableCell sx={{ whiteSpace: 'nowrap' }}>{candidate.region}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Paper>

        {/* Event Gallery Section */}
        <Paper 
          elevation={0}
          sx={{ 
            p: 4,
            background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
            borderRadius: 2,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <PhotoLibraryIcon sx={{ fontSize: 40, color: 'primary.main', mr: 2 }} />
            <Typography variant="h4" component="h2" color="primary.main">
              Event Gallery
            </Typography>
          </Box>
          <Grid container spacing={4}>
            {eventImages.map((event, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card 
                  sx={{ 
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 20px rgba(0,0,0,0.2)',
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="250"
                    image={event.image}
                    alt={event.description}
                    sx={{ 
                      objectFit: 'cover',
                      borderBottom: '1px solid rgba(0,0,0,0.1)',
                    }}
                  />
                  <CardContent sx={{ flexGrow: 1, bgcolor: 'background.paper' }}>
                    <Typography 
                      variant="h6" 
                      gutterBottom
                      sx={{ 
                        color: 'primary.main',
                        fontWeight: 600,
                        fontSize: isMobile ? '1rem' : '1.25rem',
                      }}
                    >
                      {event.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
}

export default ScholarshipAwards; 