import Header from '@components/Header';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import SportsBarIcon from '@mui/icons-material/SportsBar';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import StadiumIcon from '@mui/icons-material/Stadium';
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from '@mui/lab/';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { motion, useCycle } from "framer-motion";
import Head from 'next/head';
import * as React from 'react';

export default function Home() {
  const [animate, cycle] = useCycle(
    { scale: 1, rotate: 0 },
    { scale: 1.25, rotate: 15 },
  )


  const [animate1, cycle1] = useCycle(
    {
      scale: [1, 1.1, 1.2, 1],
      rotate: [0, 15, -16, 0]
    },
    {
      scale: [1, 1.3, 1.4, 1],
      rotate: [0, -10, 10, 0],
    },
  )


  return (
    <div className="container">
      <Head>
        <title>Chris' Stag Party!</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <main>
        <Header />

        <motion.div
          animate={animate}
          onTap={cycle}>
          <Avatar alt="chris head" src="/chris-head-1.png"
            sx={{ width: 174, height: 174 }} variant="square" />
        </motion.div>


        <Timeline position="alternate">
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              align="right"
              variant="body"
              color="text.secondary"
            >
              1:00 pm
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary">
                <SportsBarIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h6" component="span">
                <a href="https://www.salthorse.beer/drink-food#drinks">Meet at Salt Horse</a>
              </Typography>
              <Typography>Swift beer and/or snacks</Typography>
              <Typography color="gray" variant="caption">Table is booked for 6 under Chris</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              variant="body"
              color="text.secondary"
            >
              1:57 pm
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary">
                <DirectionsBusIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h6" component="span">
                Catch 31 bus
              </Typography>
              <Typography><a href="https://goo.gl/maps/GrjP5Vb1nCY3WwAV9">South Bridge to New Dundas Park</a></Typography>
              <Typography color="gray" variant="caption">Later bus can be taken if required</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              variant="body"
              color="text.secondary"
            >
              2:45 pm
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary">
                <StadiumIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h6" component="span">
                Arrive at New Dundas Park
              </Typography>
              <Typography>??7 on the door</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              variant="body"
              color="text.secondary"
            >
              3 pm
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary">
                <SportsSoccerIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h6" component="span">
                Kick off
              </Typography>
              <Typography>Bonnyrigg Rose vs Bo'Ness Utd</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              variant="body"
              color="text.secondary"
            >
              4:45 pm
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary">
                <SportsSoccerIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h6" component="span">
                Match Ends
              </Typography>
              <Typography>Bonnyrigg Rose vs Bo'Ness Utd</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              variant="body"
              color="text.secondary"
            >
              4:53 pm
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary">
                <DirectionsBusIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h6" component="span">
                Catch 31 bus
              </Typography>
              <Typography><a href="https://goo.gl/maps/QuJyzPqZQUoBM1SM8">to Palmerston Place</a></Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              variant="body"
              color="text.secondary"
            >
              6:30 pm
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary">
                <RestaurantIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h6" component="span">
                <a href="https://www.thepalmerstonedinburgh.co.uk/">Dinner at the Palmerston </a>
              </Typography>
              <Typography><a href="https://static1.squarespace.com/static/603e3517ff5db27cbd412fe4/t/6203f6ee8938df0e6f397331/1644426990597/Sample+Menu.pdf">Food menu</a></Typography>
              <Typography><a href="https://static1.squarespace.com/static/603e3517ff5db27cbd412fe4/t/6203f762b231fc398db06f95/1644427107046/Cocktail+Menu.pdf">Drinks menu</a></Typography>
              <Typography><a href="https://static1.squarespace.com/static/603e3517ff5db27cbd412fe4/t/6203f7ca681114248e7b6cf9/1644427211093/Wine+List.pdf">Wine list</a></Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              variant="body"
              color="text.secondary"
            >
              8:30 pm
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary">
                <SportsBarIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h6" component="span">
                <a href="https://vaultcity.co.uk/pages/the-wee-vault-tasting-room-and-bottleshop">Drinks at The Wee Vault</a>
              </Typography>
              <Typography>Careful there is 17% 'er on the menu!</Typography>
              <Typography><a href="https://untappd.com/v/wee-vault-edinburgh/10930853">Tap List</a></Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              variant="body"
              color="text.secondary"
            >
              10:00 pm
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary">
                <LocalBarIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h6" component="span">
                <a href="http://www.luckyliquorco.com/LLC_menu33.pdf">Lucky Liquor</a>
              </Typography>
              <Typography>or</Typography>
              <Typography variant="h6" component="span">
                <a href="https://g.page/neverreallyhere?share">Never Really Here</a>
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>

        <motion.div
          initial={{ opacity: 1, scale: 1 }}
          onTap={cycle1}
          animate={animate1}
          viewport={{ once: true }}>
          <Avatar alt="chris head" src="/chris-head-2.png"
            sx={{ width: 138, height: 184 }} variant="square" />
        </motion.div>
      </main>
    </div>
  )
}
